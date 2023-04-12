import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productSubfeatureItemFormSchema = zod.object({
  id: zod.string().nullable(),
  code: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(14),
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
    .max(45),
  value: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(45),
  productSubfeatureItemType: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
})

export const productSubfeatureFormSchema = zod.object({
  code: zod
    .string()
    .min(1, {
      message: 'forms.errors.required',
    })
    .max(14),
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
    .max(45),
  productSubfeatureType: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
  items: zod.array(productSubfeatureItemFormSchema),
})

export const productSubfeatureFormResolver = zodResolver(productSubfeatureFormSchema)
