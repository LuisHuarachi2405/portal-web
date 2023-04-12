import { useForm } from 'react-hook-form'

import { FeatureFormValues } from '../types/products-forms.types'
import { productFeatureFormResolver } from '../utils/product-feature-form-resolver'

const productFeatureFormValues: FeatureFormValues = {
  name: '',
  shortName: '',
  productCategory: '',
  featureType: '',
}

export const useProductFeatureForm = (initialValues?: FeatureFormValues) =>
  useForm<FeatureFormValues>({
    resolver: productFeatureFormResolver,
    defaultValues: initialValues ?? productFeatureFormValues,
  })
