import { useForm } from 'react-hook-form'

import { RateFormValues } from '../types/rates-forms.types'
import { rateFormResolver } from '../utils/rates-form-resolver'

export const defaultValues: RateFormValues = {
  idRate: undefined,
  idRateType: '',
  code: '',
  description: '',
  startDate: '',
  endDate: '',
}

export type RateFormExtraProps = {
  prevValues?: Partial<RateFormValues>
}

export const useRateForm = () =>
  useForm<RateFormValues>({
    resolver: rateFormResolver,
    defaultValues,
    mode: 'onSubmit',
  })
