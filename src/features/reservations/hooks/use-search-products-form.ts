import { z as zod } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export interface SearchProductsFormValues {
  startDate: string
  endDate: string
  origin: string
  destination: string
  query: string | null
}

export const useSearchProductsForm = () =>
  useForm<SearchProductsFormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  })

const defaultValues: SearchProductsFormValues = {
  startDate: '',
  endDate: '',
  origin: '',
  destination: '',
  query: '',
}

const formSchema = zod.object({
  startDate: zod.string().min(1),
  endDate: zod.string().min(1),
  origin: zod.string().optional(),
  destination: zod.string().optional(),
  query: zod.string().min(3),
})

export type SearchProductsFormDataValues = zod.infer<typeof formSchema>
