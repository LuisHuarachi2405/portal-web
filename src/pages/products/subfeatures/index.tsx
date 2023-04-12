import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const ProductSubfeaturesTable = dynamic(
  () =>
    import('@/features/products/components/subfeatures/product-subfeatures-table').then(
      (module) => ({
        default: module.ProductSubfeaturesTable,
      })
    ),
  { suspense: true }
)

const SubfeaturesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductSubfeaturesTable />
  </Suspense>
)

export default SubfeaturesPage
