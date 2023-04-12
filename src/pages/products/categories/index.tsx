import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

import { Spinner } from '@/shared/components/spinner'

const ProductCategoriesTable = dynamic(
  () =>
    import('@/features/products/components/product-categories-table').then((module) => ({
      default: module.ProductCategoriesTable,
    })),
  { suspense: true }
)

const CategoriesPage: NextPage = () => (
  <Box>
    <Suspense fallback={<Spinner />}>
      <ProductCategoriesTable />
    </Suspense>
  </Box>
)

export default CategoriesPage
