import { useForm } from 'react-hook-form'

import { CategoryFormValues } from '../types/products-forms.types'
import { productCategoryFormResolver } from '../utils/product-category-form-resolver'

const productCategoryFormValues: CategoryFormValues = {
  name: '',
  shortName: '',
  categoryType: '',
}

export const useProductCategoryForm = (initialValues?: CategoryFormValues) =>
  useForm<CategoryFormValues>({
    resolver: productCategoryFormResolver,
    defaultValues: initialValues ?? productCategoryFormValues,
  })
