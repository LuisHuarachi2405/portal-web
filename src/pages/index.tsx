import type { NextPage } from 'next'
import Box from '@mui/material/Box'

import { useIntl } from '@/shared/hooks/use-intl'

const Home: NextPage = () => {
  const intl = useIntl()
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <h1>{intl.formatMessage('pages.home.title')}</h1>
    </Box>
  )
}
export default Home
