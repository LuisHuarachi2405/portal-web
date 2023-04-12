import { Box } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'

const DynamicGeneralParametersTable = dynamic(
  () =>
    import('@/features/general-parameters/components/general-parameters-table').then((module) => ({
      default: module.GeneralParametersTable,
    })),
  {
    suspense: true,
  }
)

const GeneralParametersPage: NextPage = () => (
  <Box>
    <Suspense fallback={<Spinner />}>
      <DynamicGeneralParametersTable />
    </Suspense>
  </Box>
)

export default GeneralParametersPage
