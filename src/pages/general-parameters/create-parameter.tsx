import { Box } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicGeneralParameterForm = dynamic(
  () => import('@/features/general-parameters/components/general-parameters-form')
)

const CreateParameter: NextPage = () => (
  <Box>
    <Suspense fallback={<Spinner />}>
      <DynamicGeneralParameterForm />
    </Suspense>
  </Box>
)

export default CreateParameter
