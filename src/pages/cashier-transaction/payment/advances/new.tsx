import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicPaymentsMainView = dynamic(
  () =>
    import('@/features/payments/components/advances/advances-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

const PaymentsMainViewPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicPaymentsMainView />
  </Suspense>
)

export default PaymentsMainViewPage
