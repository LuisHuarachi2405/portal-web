import { useForm } from 'react-hook-form'

import { ProductIdentificationFormValues } from '../types/products-forms.types'
import { productIdentificationFormResolver } from '../utils/product-identification-form-resolver'

const defaultValues: ProductIdentificationFormValues = {
  value: '',
  identificationType: '',
}

export const useProductIdentificationForm = (initialValues?: ProductIdentificationFormValues) =>
  useForm<ProductIdentificationFormValues>({
    resolver: productIdentificationFormResolver,
    defaultValues: initialValues ?? defaultValues,
  })
