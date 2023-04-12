import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useGetRateFeatureQuery } from '@/shared/graphql/generated/rates-api'

const DynamicRatesFeatureForm = dynamic(
  () =>
    import('@/features/rates/components/features/rates-features-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditRateFeatureContent: FC = () => {
  const router = useRouter()
  const { featureId } = router.query as { featureId: string }

  const {
    data,
    loading,
    error,
    refetch: rateFeatureRefetch,
  } = useGetRateFeatureQuery({
    variables: { idRateFeature: featureId },
    fetchPolicy: 'cache-and-network',
    skip: !featureId,
  })

  const rateFeatureData = data?.getRateFeature

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
      <DynamicRatesFeatureForm
        isEditing
        prevValues={{
          idProductCategory: rateFeatureData?.idProductCategory,
          idRateFeatureType: rateFeatureData?.idRateFeatureType,
          code: rateFeatureData?.code,
          name: rateFeatureData?.name,
          shortName: rateFeatureData?.shortName,
        }}
      />
    </Suspense>
  )
}
