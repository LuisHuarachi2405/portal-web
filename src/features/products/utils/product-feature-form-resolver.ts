import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productFeatureFormSchema = zod.object({
  productFeature: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
  value: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
})

export const productFeatureFormResolver = zodResolver(productFeatureFormSchema)
