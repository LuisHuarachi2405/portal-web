import type { Dispatch, FC, SetStateAction } from 'react'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'

import { MenuList } from './sidebar/menu-list'

interface DrawerProps {
  toggleDrawer: boolean
  setToggleDrawer: Dispatch<SetStateAction<boolean>>
}

export const Drawer: FC<DrawerProps> = (props) => {
  const { toggleDrawer, setToggleDrawer } = props

  const onHideDrawer = () => {
    setToggleDrawer(false)
  }

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
        </Box>
      </MuiDrawer>
    </div>
  )
}
