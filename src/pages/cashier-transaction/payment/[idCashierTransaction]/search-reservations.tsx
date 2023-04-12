import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicReservationTable = dynamic(
  () =>
    import('@/features/payments/components/reservation/cashier-transaction-reservation-table').then(
      (module) => ({
        default: module.default,
      })
    ),
  {
    suspense: true,
  }
)

const CreateReservationPaymentPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicReservationTable />
  </Suspense>
)

export default CreateReservationPaymentPage
