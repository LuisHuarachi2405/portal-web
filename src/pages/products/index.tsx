import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

import { Spinner } from '@/shared/components/spinner'

const ProductsTable = dynamic(
  () =>
    import('@/features/products/components/products-table').then((module) => ({
      default: module.ProductsTable,
    })),
  { suspense: true }
)

const ProductsPage: NextPage = () => (
  <div>
    <Suspense fallback={<Spinner />}>
      <ProductsTable />
    </Suspense>
  </div>
)

export default ProductsPage
