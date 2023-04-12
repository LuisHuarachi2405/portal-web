import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const idFieldSchema = zod.string().length(32, {
  message: 'forms.errors.required',
})

export const instanceInventoryFormSchema = zod.object({
  date: zod.string().min(1, {
    message: 'forms.errors.required',
  }),
  inventoryTransactionType: idFieldSchema,
  note: zod.string(),
  credit: zod.number().min(0, {
    message: 'Must be positive',
  }),
  debit: zod.number().min(0, {
    message: 'Must be positive',
  }),
})

export const instanceInventoryFormResolver = zodResolver(instanceInventoryFormSchema)
