import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicPaymentsTable = dynamic(
  () =>
    import('@/features/payments/components/payment/cashier-transaction-payment-table').then(
      (module) => ({
        default: module.default,
      })
    ),
  {
    suspense: true,
  }
)

const PaymendPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicPaymentsTable />
  </Suspense>
)

export default PaymendPage
