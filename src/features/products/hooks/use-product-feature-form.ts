import { useForm } from 'react-hook-form'

import { ProductFeatureFormValues } from '../types/products-forms.types'
import { productFeatureFormResolver } from '../utils/product-feature-form-resolver'

const defaultValues: ProductFeatureFormValues = {
  productFeature: '',
  value: '',
}

export const useProductFeatureForm = (initialValues?: ProductFeatureFormValues) =>
  useForm<ProductFeatureFormValues>({
    resolver: productFeatureFormResolver,
    defaultValues: initialValues ?? defaultValues,
  })
