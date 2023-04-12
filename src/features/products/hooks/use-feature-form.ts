import { useForm } from 'react-hook-form'

import { FeatureFormValues } from '../types/products-forms.types'
import { featureFormResolver } from '../utils/feature-form-resolver'

const productFeatureFormValues: FeatureFormValues = {
  name: '',
  shortName: '',
  productCategory: '',
  featureType: '',
}

export const useFeatureForm = (initialValues?: FeatureFormValues) =>
  useForm<FeatureFormValues>({
    resolver: featureFormResolver,
    defaultValues: initialValues ?? productFeatureFormValues,
  })
