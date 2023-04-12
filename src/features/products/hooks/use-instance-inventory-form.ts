import { useForm } from 'react-hook-form'

import { InstanceInventoryFormValues } from '../types/products-forms.types'
import { instanceInventoryFormResolver } from '../utils/instance-inventory-form-resolver'

const defaultValues: InstanceInventoryFormValues = {
  date: '',
  inventoryTransactionType: '',
  note: '',
  credit: 0,
  debit: 0,
}

export const useInstanceInventoryForm = (initialValues?: InstanceInventoryFormValues) =>
  useForm<InstanceInventoryFormValues>({
    defaultValues: initialValues ?? defaultValues,
    resolver: instanceInventoryFormResolver,
  })
