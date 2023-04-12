import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const loginFormSchema = zod.object({
  email: zod.string().email().min(1, 'components.login.form.validate-email-message'),
  password: zod.string().min(1, 'components.login.form.validate-password-message'),
})

export const loginFormResolver = zodResolver(loginFormSchema)
