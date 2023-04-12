import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicUsersTable = dynamic(
  () =>
    import('@/features/users/users/users-table').then((module) => ({
      default: module.UsersTable,
    })),
  {
    suspense: true,
  }
)

const UsersPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicUsersTable />
  </Suspense>
)

export default UsersPage
