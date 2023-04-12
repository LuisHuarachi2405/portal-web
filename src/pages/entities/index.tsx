import type { NextPage } from 'next'
import { Box } from '@mui/material'

import { EntitiesTable } from '@/features/entities/components/entities-table'

const EntitiesPage: NextPage = () => (
  <Box>
    <EntitiesTable />
  </Box>
)

export default EntitiesPage
