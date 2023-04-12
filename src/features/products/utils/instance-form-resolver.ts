import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const idFieldSchema = zod.string()

export const instanceFormSchema = zod.object({
  productSubfeatureItem1: idFieldSchema,
  productSubfeatureItem2: idFieldSchema,
  productSubfeatureItem3: idFieldSchema,
  productSubfeatureItem4: idFieldSchema,
  productSubfeatureItem5: idFieldSchema,
  productSubfeatureItem6: idFieldSchema,
  productSubfeatureItem7: idFieldSchema,
  productSubfeatureItem8: idFieldSchema,
  productSubfeatureItem9: idFieldSchema,
  productSubfeatureItem10: idFieldSchema,
})

export const instanceFormResolver = zodResolver(instanceFormSchema)
