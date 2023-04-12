import { useForm } from 'react-hook-form'

import { RateSubfeatureFormValues } from '../types/rates-forms.types'
import { rateSubfeatureFormResolver } from '../utils/rates-subfeatures-form-resolver'

export const defaultValues: RateSubfeatureFormValues = {
  code: '',
  name: '',
  shortName: '',
  idRateSubFeatureType: '',
  idProductCategory: '',
  rateSubFeatureItem: [
    {
      idRateSubFeatureItemType: '',
      code: '',
      name: '',
      shortName: '',
    },
  ],
}

export type RateSubfeatureFormExtraProps = {
  prevValues?: Partial<RateSubfeatureFormValues>
}

export const useRateSubfeatureForm = ({ prevValues }: RateSubfeatureFormExtraProps) =>
  useForm<RateSubfeatureFormValues>({
    resolver: rateSubfeatureFormResolver,
    defaultValues: prevValues || defaultValues,
    mode: 'onSubmit',
  })
