import { useForm } from 'react-hook-form'

import { SearchAdvances } from '../../types/search-advances'

export const defaultValues: SearchAdvances = {
  date: '',
  idDocumentTypeName: '',
  numDocumento: '',
  DocumentTypeTrx: '',
}

export const useSearchAdvancesParametersForm = () => {
  const searchAdvancesParameters = useForm<SearchAdvances>({
    defaultValues,
    mode: 'onSubmit',
  })
  return {
    searchAdvancesParameters,
  }
}
