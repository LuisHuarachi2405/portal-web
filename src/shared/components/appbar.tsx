import type { Dispatch, FC, SetStateAction } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

interface CustomAppBarProps {
  toggleDrawer: boolean
  setToggleDrawer: Dispatch<SetStateAction<boolean>>
}

export const CustomAppBar: FC<CustomAppBarProps> = (props) => {
  const { toggleDrawer, setToggleDrawer } = props

  const onHandleDrawer = () => {
    setToggleDrawer(!toggleDrawer)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onHandleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
