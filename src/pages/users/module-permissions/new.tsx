import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicModulePermissionForm = dynamic(
  () => import('@/features/users/module-permissions/module-permission-form')
)

const CreateParameter: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicModulePermissionForm />
  </Suspense>
)

export default CreateParameter
