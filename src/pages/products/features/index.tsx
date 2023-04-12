import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const ProductFeaturesTable = dynamic(
  () =>
    import('@/features/products/components/features/product-features-table').then((module) => ({
      default: module.ProductFeaturesTable,
    })),
  { suspense: true }
)

const FeaturesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductFeaturesTable />
  </Suspense>
)

export default FeaturesPage
