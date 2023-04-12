import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

import { Spinner } from '@/shared/components/spinner'

const ProductSubfeaturesTable = dynamic(
  () =>
    import('@/features/products/components/product-subfeatures-table').then((module) => ({
      default: module.ProductSubfeaturesTable,
    })),
  { suspense: true }
)

const SubfeaturesPage: NextPage = () => (
  <Box>
    <Suspense fallback={<Spinner />}>
      <ProductSubfeaturesTable />
    </Suspense>
  </Box>
)

export default SubfeaturesPage
