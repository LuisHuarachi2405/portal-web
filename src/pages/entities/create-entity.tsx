import type { NextPage } from 'next'
import { Box } from '@mui/system'

import { EntityForm } from '@/features/entities/components/entities-form'

const CreateEntity: NextPage = () => (
  <Box>
    <EntityForm />
  </Box>
)

export default CreateEntity
