import { useForm } from 'react-hook-form'

import { CategoryFormValues } from '../types/products-forms.types'
import { categoryFormResolver } from '../utils/category-form-resolver'

const defaultValues: CategoryFormValues = {
  name: '',
  shortName: '',
  categoryType: '',
}

export const useCategoryForm = (initialValues?: CategoryFormValues) =>
  useForm<CategoryFormValues>({
    resolver: categoryFormResolver,
    defaultValues: initialValues ?? defaultValues,
  })
