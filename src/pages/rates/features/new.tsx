import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const RateFeatureForm = dynamic(
  () =>
    import('@/features/rates/components/features/rates-features-form').then((module) => ({
      default: module.default,
    })),
  { suspense: true }
)

const CreateFeaturePage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <RateFeatureForm />
  </Suspense>
)

export default CreateFeaturePage
