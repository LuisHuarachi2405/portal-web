import { useForm } from 'react-hook-form'

import { SearchReservations } from '../../types/search-reservation'

/*
 * Por ahora Cristian comenta que este entity debe ser estatico,
 * posteriomente esto sera dinamico
 */
export const defaultValues: SearchReservations = {
  skip: 0,
  take: 1000,
  reservationCode: '',
  reservationID: '',
  date: '',
  fileNumber: '',
  entity: '0eb40cd8653711edbb510a54081e669b',
}

export const useSearchReservationsParametersForm = () => {
  const searchReservationsParameters = useForm<SearchReservations>({
    defaultValues,
    mode: 'onSubmit',
  })
  return {
    searchReservationsParameters,
  }
}
