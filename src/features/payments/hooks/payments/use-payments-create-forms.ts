import { useForm } from 'react-hook-form'

import { CreatePaymentsForm } from '../../types/create-paymets-form.types'
import { getDateCurrent } from '../../utils/date'
import {
  typeAdvancePaymentResolver,
  typeDefaultPaymentResolver,
  typeCashPaymentSchemaResolver,
} from '../../utils/payments-create-forms-resolver'

export const defaultValues: CreatePaymentsForm = {
  date: getDateCurrent(),
  idDocumentType: '',
  idBankAccount: '',
  idPaymentGateway: '',
  number: '',
  description: '',
  amount: '',
  note: '',
  typeCurrency: '',
  exchangeRate: '',
}

export type UsePaymentsFormExtraProps = {
  prevValues?: Partial<CreatePaymentsForm>
  type?: string
}

export const usePaymentsForm = ({ prevValues, type }: UsePaymentsFormExtraProps) => {
  const propsUseForm: any = {
    defaultValues: prevValues || defaultValues,
    mode: 'onSubmit',
  }

  switch (type) {
    case 'ACCCTITANT':
      propsUseForm.resolver = typeAdvancePaymentResolver
      break
    case 'ACCTPEFE':
      propsUseForm.resolver = typeCashPaymentSchemaResolver
      break
    default:
      propsUseForm.resolver = typeDefaultPaymentResolver
  }

  return useForm<CreatePaymentsForm>(propsUseForm)
}
