import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicDocumentTable = dynamic(
  () =>
    import('@/features/reservations/components/documents/documents-table').then((module) => ({
      default: module.DocumentsTable,
    })),
  {
    suspense: true,
  }
)

const DocumentsPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicDocumentTable />
  </Suspense>
)

export default DocumentsPage
