import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const rateFeatureFormSchema = zod.object({
  code: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  shortName: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  name: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  idRateFeatureType: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  idProductCategory: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
})

export const rateFeatureFormResolver = zodResolver(rateFeatureFormSchema)
