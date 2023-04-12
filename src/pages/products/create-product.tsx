import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const ProductForm = dynamic(
  () =>
    import('@/features/products/components/product-form').then((module) => ({
      default: module.ProductForm,
    })),
  { suspense: true }
)

const CreateProductPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductForm />
  </Suspense>
)

export default CreateProductPage
