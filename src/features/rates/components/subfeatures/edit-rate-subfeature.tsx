import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { RateSubFeatureItem, useGetRateSubFeatureQuery } from '@/shared/graphql/generated/rates-api'

const DynamicRateSubfeatureForm = dynamic(
  () =>
    import('@/features/rates/components/subfeatures/rates-subfeature-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditRateSubfeatureContent: FC = () => {
  const router = useRouter()
  const { subfeatureId } = router.query as { subfeatureId: string }

  const {
    data,
    loading,
    error,
    refetch: rateFeatureRefetch,
  } = useGetRateSubFeatureQuery({
    variables: { idRateSubFeature: subfeatureId },
    fetchPolicy: 'cache-and-network',
    skip: !subfeatureId,
  })

  const rateSubfeatureData = data?.getRateSubFeature

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
      <DynamicRateSubfeatureForm
        isEditing
        prevValues={{
          idProductCategory: rateSubfeatureData?.idProductCategory,
          idRateSubFeatureType: rateSubfeatureData?.idRateSubFeatureType,
          code: rateSubfeatureData?.code,
          name: rateSubfeatureData?.name,
          shortName: rateSubfeatureData?.shortName,
          rateSubFeatureItem: rateSubfeatureData?.rateSubFeatureItem?.length
            ? (rateSubfeatureData?.rateSubFeatureItem as RateSubFeatureItem[])
            : [
                {
                  idRateSubFeatureItemType: '',
                  code: '',
                  name: '',
                  shortName: '',
                },
              ],
        }}
      />
    </Suspense>
  )
}
