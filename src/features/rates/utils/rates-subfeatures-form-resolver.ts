import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const rateSubFeatureItem = zod.object({
  idRateSubFeatureItem: zod.string().optional(),
  idRateSubFeatureItemType: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  code: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  shortName: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  name: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
})

const rateSubfeatureFormSchema = zod.object({
  idRateSubFeatureType: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  idProductCategory: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  code: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  shortName: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  name: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  rateSubFeatureItem: zod.array(rateSubFeatureItem),
})

export const rateSubfeatureFormResolver = zodResolver(rateSubfeatureFormSchema)
