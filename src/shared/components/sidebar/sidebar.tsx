import { FC } from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

import { MenuList } from './menu-list'

export const Sidebar: FC = () => (
  <Box>
    <StyledSidebarContainer role="presentation">
      <MenuList />
    </StyledSidebarContainer>
  </Box>
)

const StyledSidebarContainer = styled(Box)`
  width: 250px;
  height: 100vh;
  border-right: 1px solid #0000001f;
`
