import { FC } from 'react'
import styled from '@emotion/styled'
import { Button, Box } from '@mui/material'
import { ExitToApp } from '@mui/icons-material'

import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { MenuList } from './menu-list'

export const Sidebar: FC = () => {
  const { logout } = useAuth()

  return (
    <Box>
      <StyledSidebarContainer role="presentation">
        <MenuList />
        <div style={{ padding: '8px' }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ExitToApp />}
            fullWidth
            onClick={logout}
          >
            Sign out
          </Button>
        </div>
      </StyledSidebarContainer>
    </Box>
  )
}

const StyledSidebarContainer = styled(Box)`
  width: 250px;
  min-height: 100vh;
  height: 100%;
  border-right: 1px solid #0000001f;
`
