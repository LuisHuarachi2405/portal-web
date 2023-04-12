import { useForm } from 'react-hook-form'

import { InstanceFormValues } from '../types/products-forms.types'
import { instanceFormResolver } from '../utils/instance-form-resolver'

const defaultValues: InstanceFormValues = {
  productSubfeatureItem1: '',
  productSubfeatureItem2: '',
  productSubfeatureItem3: '',
  productSubfeatureItem4: '',
  productSubfeatureItem5: '',
  productSubfeatureItem6: '',
  productSubfeatureItem7: '',
  productSubfeatureItem8: '',
  productSubfeatureItem9: '',
  productSubfeatureItem10: '',
}

export const useInstanceForm = (initialValues?: InstanceFormValues) =>
  useForm<InstanceFormValues>({
    defaultValues: initialValues ?? defaultValues,
    resolver: instanceFormResolver,
  })
