import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicRolePermissionsTable = dynamic(
  () =>
    import('@/features/users/roles-permissions/roles-permissions-table').then((module) => ({
      default: module.RolesPermissionsTable,
    })),
  {
    suspense: true,
  }
)

const GeneralParametersPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicRolePermissionsTable />
  </Suspense>
)

export default GeneralParametersPage
