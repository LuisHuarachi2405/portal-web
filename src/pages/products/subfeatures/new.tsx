import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const ProductSubfeatureForm = dynamic(
  () =>
    import('@/features/products/components/subfeatures/product-subfeature-form').then((module) => ({
      default: module.ProductSubfeatureForm,
    })),
  { suspense: true }
)

const CreateSubfeaturePage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductSubfeatureForm />
  </Suspense>
)

export default CreateSubfeaturePage
