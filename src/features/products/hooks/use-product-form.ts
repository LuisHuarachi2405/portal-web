import { useForm } from 'react-hook-form'

import { productFormResolver } from '../utils/product-form-resolver'
import { ProductFormValues } from '../types/products-forms.types'

const defaultValues: ProductFormValues = {
  code: '',
  name: '',
  shortName: '',
  productType: '',
  supplier: '',
  hasInventory: '',
  internationalCodeSunat: '',
  operationalCodeSunat: '',
  productTypeSunat: '',
  unitSunat: '',
}

export const useProductForm = (initialValues?: ProductFormValues) =>
  useForm<ProductFormValues>({
    defaultValues: initialValues ?? defaultValues,
    resolver: productFormResolver,
  })
