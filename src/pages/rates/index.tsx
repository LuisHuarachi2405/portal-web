import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const RatesTable = dynamic(
  () =>
    import('@/features/rates/components/rates-table').then((module) => ({
      default: module.RatesTable,
    })),
  { suspense: true }
)

const RatesPage: NextPage = () => (
  <div>
    <Suspense fallback={<Spinner />}>
      <RatesTable />
    </Suspense>
  </div>
)

export default RatesPage
