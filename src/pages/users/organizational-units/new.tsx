import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicOrganizationalUnitsForm = dynamic(
  () => import('@/features/users/ou/organizational-units-form')
)

const CreateOrganizationalUnitPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicOrganizationalUnitsForm />
  </Suspense>
)

export default CreateOrganizationalUnitPage
