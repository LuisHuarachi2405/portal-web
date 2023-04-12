import { useForm } from 'react-hook-form'

import { ProductSubfeatureItemFormValues } from '../types/products-forms.types'
import { productSubfeatureItemFormResolver } from '../utils/product-subfeature-item-form-resolver'

const defaultValues: ProductSubfeatureItemFormValues = {
  productSubfeature: '',
}

export const useProductSubfeatureForm = (initialValues?: ProductSubfeatureItemFormValues) =>
  useForm<ProductSubfeatureItemFormValues>({
    defaultValues: initialValues ?? defaultValues,
    resolver: productSubfeatureItemFormResolver,
  })
