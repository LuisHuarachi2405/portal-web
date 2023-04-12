import { useForm } from 'react-hook-form'

import { SearchValue } from '../../types/search-transaction.types'

export const defaultValues: SearchValue = {
  search: '',
}

export const useSearchTransactionParametersForm = () => {
  const searchTransactionParameters = useForm<SearchValue>({
    defaultValues,
    mode: 'onSubmit',
  })
  return {
    searchTransactionParameters,
  }
}
