/** @type {import('next').NextConfig} */
require('dotenv').config()
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  output: 'standalone',
  // publicRuntimeConfig: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //   NEXT_PUBLIC_AUTH: process.env.NEXT_PUBLIC_AUTH,
  //  NEXT_PUBLIC_AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  //  NEXT_PUBLIC_AWS_S3_BUCKETREGION: process.env.AWS_S3_BUCKETREGION,
  //  NEXT_PUBLIC_AWS_COGNITO_IDENTITYPOOLID: process.env.AWS_COGNITO_IDENTITYPOOLID,
  //  NEXT_PUBLIC_AWS_COGNITO_URL: process.env.AWS_COGNITO_URL,
  // },
  env: {
    NEXT_PUBLIC_API_URL: 'https://gateway.onezerostg.com/graphql',
    NEXT_PUBLIC_AUTH: 'https://auth.onezerostg.com/',
    // NEXT_PUBLIC_AUTH: 'http://localhost:4008/',
    NEXT_PUBLIC_AWS_S3_BUCKET: 'docspdfstg',
    NEXT_PUBLIC_AWS_S3_BUCKETREGION: 'us-east-1',
    NEXT_PUBLIC_AWS_COGNITO_IDENTITYPOOLID: 'us-east-1:23c436cc-f748-415d-8c62-6d34bdb9f853',
    NEXT_PUBLIC_AWS_COGNITO_URL: 'cognito-idp.us-east-1.amazonaws.com/us-east-1_f9NHuQfa7',
    NEXT_TELEMETRY_DISABLED: 1,
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})(nextConfig)

module.exports = withBundleAnalyzer

// module.exports = nextConfig
