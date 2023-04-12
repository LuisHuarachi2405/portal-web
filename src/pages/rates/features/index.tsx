import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const RatesFeaturesTable = dynamic(
  () =>
    import('@/features/rates/components/features/rates-features-table').then((module) => ({
      default: module.RatesFeaturesTable,
    })),
  { suspense: true }
)

const RatesFeaturesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <RatesFeaturesTable />
  </Suspense>
)

export default RatesFeaturesPage
