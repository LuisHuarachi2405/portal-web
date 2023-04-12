import { Dispatch, FC, SetStateAction } from 'react'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import { ExitToApp } from '@mui/icons-material'
import { Button } from '@mui/material'

import { MenuList } from './sidebar/menu-list'

import { useAuth } from '../contexts/auth/auth-provider'

interface DrawerProps {
  toggleDrawer: boolean
  setToggleDrawer: Dispatch<SetStateAction<boolean>>
}

export const Drawer: FC<DrawerProps> = (props) => {
  const { toggleDrawer, setToggleDrawer } = props

  const onHideDrawer = () => {
    setToggleDrawer(false)
  }

  const { logout } = useAuth()

  return (
    <div>
      <MuiDrawer anchor="left" open={toggleDrawer} onClose={onHideDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={onHideDrawer}
          onKeyDown={onHideDrawer}
        >
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
        </Box>
      </MuiDrawer>
    </div>
  )
}
