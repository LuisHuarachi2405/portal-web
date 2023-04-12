import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const productFormSchema = zod.object({
  code: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(45),
  name: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(150),
  shortName: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(15),
  productType: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
  supplier: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
  hasInventory: zod.string().length(1, {
    message: 'forms.errors.required',
  }),
  internationalCodeSunat: zod.string().max(10),
  operationalCodeSunat: zod.string().max(3),
  productTypeSunat: zod.string().max(5),
  unitSunat: zod.string().max(3),
})

export const productFormResolver = zodResolver(productFormSchema)
