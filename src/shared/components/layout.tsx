import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'
import { FC, ReactNode, useState } from 'react'

import { CustomAppBar as AppBar } from './appbar'
import { Drawer } from './drawer'
import { Sidebar } from './sidebar/sidebar'

import { paths } from '../routes/paths'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  const withoutLayout = [
    paths.auth.signin,
    paths.auth.register,
    paths.auth.forgotPassword,
    paths.auth.resetPassword,
  ]

  const { pathname } = useRouter()

  const isMobile = useMediaQuery('(max-width:760px)', { noSsr: true })

  if (withoutLayout.includes(pathname)) {
    return (
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Box width="100%">{children}</Box>
      </Box>
    )
  }

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
