import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productCategoryFormSchema = zod.object({
  name: zod
    .string()
    .min(1, { message: 'forms.errors.required' })
    .max(150, { message: 'forms.errors.max' }),
  shortName: zod
    .string()
    .min(1, { message: 'forms.errors.required' })
    .max(15, { message: 'forms.errors.max' }),
  categoryType: zod.string().length(32, { message: 'forms.errors.required' }),
})

export const productCategoryFormResolver = zodResolver(productCategoryFormSchema)
