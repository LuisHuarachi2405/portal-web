import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const productSubfeatureItemFormSchema = zod.object({
  productSubfeature: zod.string().length(32, {
    message: 'forms.errors.required',
  }),
})

export const productSubfeatureItemFormResolver = zodResolver(productSubfeatureItemFormSchema)
