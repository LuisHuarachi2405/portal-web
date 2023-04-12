import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicUsersForm = dynamic(() => import('@/features/users/users/users-form/users-form'))
const CreateUsersPage: NextPage = () => (
  <Suspense fallback={<Spinner />}>
    <DynamicUsersForm />
  </Suspense>
)

export default CreateUsersPage
