import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicOrganizationalUnitsTable = dynamic(
  () =>
    import('@/features/users/ou/organizational-units-table').then((module) => ({
      default: module.OrganizationalUnitsTable,
    })),
  {
    suspense: true,
  }
)

const OrganizationalUnitsPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicOrganizationalUnitsTable />
  </Suspense>
)

export default OrganizationalUnitsPage
