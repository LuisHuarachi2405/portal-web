import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const categoryFormSchema = zod.object({
  productCategory: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
})

const featureFormSchema = zod.object({
  productFeature: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
  isInventory: zod.string().length(1, {
    message: 'forms.errors.required',
  }),
})

const identificationFormSchema = zod.object({
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
  categories: zod.array(categoryFormSchema),
  features: zod.array(featureFormSchema),
  identifications: zod.array(identificationFormSchema),
})

export const productFormResolver = zodResolver(productFormSchema)
