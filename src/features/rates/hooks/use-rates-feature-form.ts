import { useForm } from 'react-hook-form'

import { RateFeatureFormValues } from '../types/rates-forms.types'
import { rateFeatureFormResolver } from '../utils/rates-feature-form-resolver'

export const defaultValues: RateFeatureFormValues = {
  code: '',
  name: '',
  shortName: '',
  idRateFeatureType: '',
  idProductCategory: '',
}

export type RateFeatureFormExtraProps = {
  prevValues?: Partial<RateFeatureFormValues>
}

export const useRateFeatureForm = ({ prevValues }: RateFeatureFormExtraProps) =>
  useForm<RateFeatureFormValues>({
    resolver: rateFeatureFormResolver,
    defaultValues: prevValues || defaultValues,
    mode: 'onSubmit',
  })
