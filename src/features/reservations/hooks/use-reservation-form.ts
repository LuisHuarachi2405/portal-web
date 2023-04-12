import { z as zod } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Reservation } from '@/shared/graphql/generated/reservations-api'

export interface ReservationFormValues {
  reservationType: string
  group: string
  file: string
  note: string
  quantity: string
}

export const useReservationForm = ({ prevValues }: UseReservationProps) =>
  useForm<ReservationFormValues>({
    defaultValues: prevValues || defaultValues,
    resolver: zodResolver(formSchema),
  })

const defaultValues: ReservationFormValues = {
  reservationType: '',
  group: '',
  file: '',
  note: '',
  quantity: '1',
}

export type UseReservationProps = {
  prevValues?: Partial<Reservation>
}

const formSchema = zod.object({
  reservationType: zod.string().min(1),
  group: zod.string().min(1),
  file: zod.string().min(1),
  note: zod.string().min(1),
  quantity: zod.string().regex(/^\d+$/),
})
