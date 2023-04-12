import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const rateFormSchema = zod.object({
  idRate: zod.string().optional(),
  idRateType: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  code: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  description: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  startDate: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  endDate: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
})

export const rateFormResolver = zodResolver(rateFormSchema)
