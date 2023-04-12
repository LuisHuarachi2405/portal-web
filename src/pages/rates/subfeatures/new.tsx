import { NextPage } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Spinner } from '@/shared/components/spinner'

const RateSubfeatureForm = dynamic(
  () =>
    import('@/features/rates/components/subfeatures/rates-subfeature-form').then((module) => ({
      default: module.default,
    })),
  { suspense: true }
)

const CreateSubfeaturePage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <RateSubfeatureForm />
  </Suspense>
)

export default CreateSubfeaturePage
