import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicModulePermissionsTable = dynamic(
  () =>
    import('@/features/users/module-permissions/module-permissions').then((module) => ({
      default: module.ModulePermissionsTable,
    })),
  {
    suspense: true,
  }
)

const ModulePermissionsPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicModulePermissionsTable />
  </Suspense>
)

export default ModulePermissionsPage
