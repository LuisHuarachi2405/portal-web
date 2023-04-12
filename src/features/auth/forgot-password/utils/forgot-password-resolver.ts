import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const forgotPasswordFormSchema = zod.object({
  email: zod.string().email().min(1),
})

export const forgotPasswordFormResolver = zodResolver(forgotPasswordFormSchema)
