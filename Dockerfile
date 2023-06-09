# Install dependencies only when needed
#FROM node:18-alpine AS deps
FROM public.ecr.aws/docker/library/node:18-alpine AS deps
#FROM public.ecr.aws/docker/library/node:lts-slim AS deps
#RUN npm install pnpm -g
RUN corepack enable
#RUN corepack prepare yarn@stable --activate
RUN apk add --no-cache libc6-compat
WORKDIR /app

# COPY package.json yarn.lock ./
COPY package.json yarn.lock ./
##RUN yarn install --frozen-lockfile
RUN yarn install

# Rebuild the source code only when needed
#FROM node:18-alpine AS builder
FROM public.ecr.aws/docker/library/node:18-alpine AS builder
#FROM public.ecr.aws/docker/library/node:lts-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npx next build

# Production image, copy all the files and run next
#FROM node:18-alpine AS runner
FROM public.ecr.aws/docker/library/node:18-alpine AS runner
#FROM public.ecr.aws/docker/library/node:lts-slim AS runner
WORKDIR /app

#ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
