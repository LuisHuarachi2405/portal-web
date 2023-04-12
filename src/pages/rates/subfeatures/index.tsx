import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const RatesSubfeaturesTable = dynamic(
  () =>
    import('@/features/rates/components/subfeatures/rates-subfeatures-table').then((module) => ({
      default: module.RatesSubfeaturesTable,
    })),
  { suspense: true }
)

const RatesSubfeaturesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <RatesSubfeaturesTable />
  </Suspense>
)

export default RatesSubfeaturesPage
