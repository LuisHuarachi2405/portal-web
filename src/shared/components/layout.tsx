import type { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'

import { Drawer } from './drawer'
import { CustomAppBar as AppBar } from './appbar'
import { Sidebar } from './sidebar/sidebar'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  const isMobile = useMediaQuery('(max-width:760px)', { noSsr: true })

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      {isMobile && (
        <>
          <AppBar toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
          <Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
        </>
      )}
      {!isMobile && <Sidebar />}

      <Box width="100%">{children}</Box>
    </Box>
  )
}
