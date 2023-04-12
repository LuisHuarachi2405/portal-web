import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicEntityTable = dynamic(
  () =>
    import('@/features/entities/components/entities-table').then((module) => ({
      default: module.EntitiesTable,
    })),
  {
    suspense: true,
  }
)

const EntitiesPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicEntityTable />
  </Suspense>
)

export default EntitiesPage
