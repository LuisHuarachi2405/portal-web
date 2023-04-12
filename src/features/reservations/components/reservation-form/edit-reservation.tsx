import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useReservationByIdQuery } from '@/shared/graphql/generated/reservations-api'
import { Reservation } from '@/shared/graphql/generated/products-api'

const DynamicReservationForm = dynamic(
  () =>
    import('@/features/reservations/components/reservation-form/reservation-form').then(
      (module) => ({
        default: module.default,
      })
    ),
  {
    suspense: true,
  }
)

export const EditReservationContent: FC = () => {
  const router = useRouter()
  const { reservationId } = router.query as { reservationId: string }

  const {
    data,
    loading,
    error,
    refetch: rateFeatureRefetch,
  } = useReservationByIdQuery({
    variables: { idReservation: reservationId },
    fetchPolicy: 'cache-and-network',
    skip: !reservationId,
  })

  const reservationData = data?.reservationById

  if (error)
    return (
      <ErrorBoundary
        retry={() => {
          rateFeatureRefetch()
        }}
      />
    )

  if (loading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicReservationForm isEditing prevValues={reservationData as unknown as Reservation} />
    </Suspense>
  )
}
