import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { DateTime as LuxonDateTime } from 'luxon'
import { zodResolver } from '@hookform/resolvers/zod'

export interface PassengerFormValues {
  name: string
  reservationContact: string
  idPassengerType: string
  idDocumentType: string
  documentNumber: string
  passengerInvoice: string
  birthDate: string
  citizenship: string
  email: string
  phone: string
  observations: string
}

export const usePassengerForm = () =>
  useForm<PassengerFormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  })

export const defaultValues: PassengerFormValues = {
  name: '',
  reservationContact: '',
  idPassengerType: '',
  idDocumentType: '',
  documentNumber: '',
  passengerInvoice: '',
  birthDate: '',
  citizenship: '',
  email: '',
  phone: '',
  observations: '',
}

const formSchema = z.object({
  name: z.string().min(1),
  reservationContact: z.string(),
  idPassengerType: z.string(),
  idDocumentType: z.string(),
  documentNumber: z.string(),
  passengerInvoice: z.string(),
  birthDate: z
    .string()
    .refine((value) => LuxonDateTime.fromISO(value).isValid, { message: 'Invalid date' }),
  citizenship: z.string(),
  email: z.string().email(),
  phone: z.string(),
  observations: z.string(),
})

export type PassengerFormData = z.infer<typeof formSchema>
