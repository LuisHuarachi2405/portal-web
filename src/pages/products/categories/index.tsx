import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const ProductCategoriesTable = dynamic(
  () =>
    import('@/features/products/components/categories/product-categories-table').then((module) => ({
      default: module.ProductCategoriesTable,
    })),
  { suspense: true }
)

const CategoriesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductCategoriesTable />
  </Suspense>
)

export default CategoriesPage
