import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const resetPasswordFormSchema = zod
  .object({
    newPassword: zod.string().min(1),
    newPasswordConfirm: zod.string().min(1),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: 'Passwords do not match',
    path: ['newPasswordConfirm'],
  })

export const resetPasswordFormResolver = zodResolver(resetPasswordFormSchema)
