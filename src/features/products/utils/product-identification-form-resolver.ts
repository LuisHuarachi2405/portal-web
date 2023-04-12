import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productIdentificationFormSchema = zod.object({
  value: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(15),
  identificationType: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
})

export const productIdentificationFormResolver = zodResolver(productIdentificationFormSchema)
