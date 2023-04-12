import { useForm } from 'react-hook-form'

import { SearchCashierTransactionPayments } from '../../types/search-cashier-transaction-payments'

export const defaultValues: SearchCashierTransactionPayments = {
  date: '',
  idDocumentTypeName: '',
  numDocumento: '',
  DocumentTypeTrx: '',
}

export const useSearchCashierTransactionPaymentsParametersForm = () => {
  const searchCashierTransactionPaymentsParameters = useForm<SearchCashierTransactionPayments>({
    defaultValues,
    mode: 'onSubmit',
  })
  return {
    searchCashierTransactionPaymentsParameters,
  }
}
