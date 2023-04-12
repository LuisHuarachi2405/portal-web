import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicPaymentsDepositForm = dynamic(
  () =>
    import('@/features/payments/components/payment/cashier-transaction-payment-deposit-form').then(
      (module) => ({
        default: module.default,
      })
    ),
  {
    suspense: true,
  }
)

const PaymentRecordDepositPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicPaymentsDepositForm />
  </Suspense>
)

export default PaymentRecordDepositPage
