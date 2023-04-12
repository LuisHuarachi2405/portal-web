import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productCategoryFormSchema = zod.object({
  productCategory: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
})

export const productCategoryFormResolver = zodResolver(productCategoryFormSchema)
