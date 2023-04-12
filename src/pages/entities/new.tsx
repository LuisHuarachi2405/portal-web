import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicEntityForm = dynamic(() => import('@/features/entities/components/entities-form'))

const CreateEntity: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicEntityForm />
  </Suspense>
)

export default CreateEntity
