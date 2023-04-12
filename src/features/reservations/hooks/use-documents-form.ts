import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export interface DocumentFormValues {
  name: string
  file: string
}

export const defaultValues: DocumentFormValues = {
  name: '',
  file: '',
}

export type DocumentFormExtraProps = {
  prevValues?: Partial<DocumentFormValues>
}

const formSchema = z.object({
  name: z.string().min(1),
  file: z.string().optional(),
})

export type PassengerFormData = z.infer<typeof formSchema>

export const useDocumentForm = () =>
  useForm<DocumentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onSubmit',
  })
