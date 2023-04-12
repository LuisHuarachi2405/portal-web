import { useForm } from 'react-hook-form'

import { ProductCategoryFormValues } from '../types/products-forms.types'
import { productCategoryFormResolver } from '../utils/product-category-form-resolver'

const defaultValues: ProductCategoryFormValues = {
  productCategory: '',
}

export const useProductCategoryForm = (initialValues?: ProductCategoryFormValues) =>
  useForm<ProductCategoryFormValues>({
    resolver: productCategoryFormResolver,
    defaultValues: initialValues ?? defaultValues,
  })
