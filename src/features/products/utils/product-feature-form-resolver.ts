import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productFeatureFormSchema = zod.object({
  name: zod
    .string()
    .min(1, { message: 'forms.errors.required' })
    .max(150, { message: 'forms.errors.max' }),
  shortName: zod
    .string()
    .min(1, { message: 'forms.errors.required' })
    .max(15, { message: 'forms.errors.max' }),
  productCategory: zod.string().length(32, { message: 'forms.errors.required' }),
  featureType: zod.string().length(32, { message: 'forms.errors.required' }),
})

export const productFeatureFormResolver = zodResolver(productFeatureFormSchema)
