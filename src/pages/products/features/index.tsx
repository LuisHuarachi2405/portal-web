import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

import { Spinner } from '@/shared/components/spinner'

const ProductFeaturesTable = dynamic(
  () =>
    import('@/features/products/components/product-features-table').then((module) => ({
      default: module.ProductFeaturesTable,
    })),
  { suspense: true }
)

const FeaturesPage: NextPage = () => (
  <Box>
    <Suspense fallback={<Spinner />}>
      <ProductFeaturesTable />
    </Suspense>
  </Box>
)

export default FeaturesPage
