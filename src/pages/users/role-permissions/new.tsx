import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicRolePermissionForm = dynamic(
  () => import('@/features/users/roles-permissions/role-permission-form')
)

const CreateParameterPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicRolePermissionForm />
  </Suspense>
)

export default CreateParameterPage
