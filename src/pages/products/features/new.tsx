import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const ProductFeatureForm = dynamic(
  () =>
    import('@/features/products/components/features/product-feature-form').then((module) => ({
      default: module.ProductFeatureForm,
    })),
  { suspense: true }
)

const CreateFeaturePage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductFeatureForm />
  </Suspense>
)

export default CreateFeaturePage
