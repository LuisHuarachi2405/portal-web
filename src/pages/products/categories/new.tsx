import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const ProductCategoryForm = dynamic(
  () =>
    import('@/features/products/components/categories/product-category-form').then((module) => ({
      default: module.ProductCategoryForm,
    })),
  { suspense: true }
)

const CreateProductCategoryPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductCategoryForm />
  </Suspense>
)

export default CreateProductCategoryPage
