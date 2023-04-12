import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const registerFormSchema = zod.object({
  email: zod.string().email().min(1),
  password: zod.string().min(6, 'Password must be at least 6 characters'),
  name: zod.string().min(1),
  lastName: zod.string().min(1),
  phone: zod.string().min(1),
  country: zod.object({ label: zod.string(), value: zod.string() }).optional().nullable(),
  businessName: zod.string().optional(),
  businessCode: zod.string().optional(),
  idLanguage: zod.string().min(1),
})

export const registerFormResolver = zodResolver(registerFormSchema)
