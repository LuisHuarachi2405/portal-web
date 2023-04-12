import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const userSchema = zod.object({
  idUser: zod.string().optional(),
  email: zod.string().email().min(1),
  name: zod.string().min(1),
  phone: zod.string().optional(),
  country: zod.object({ label: zod.string(), value: zod.string() }).optional().nullable(),
  businessName: zod.string().optional(),
  businessCode: zod.string().optional(),
  idRole: zod.string().optional(),
  idModule: zod.string().optional(),
})

export const usersResolver = zodResolver(userSchema)
