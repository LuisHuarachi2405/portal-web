import { useState, Fragment, FC } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Link from 'next/link'
import { Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import Image from 'next/image'
import { Box } from '@mui/system'

import { useIntl } from '@/shared/hooks/use-intl'

import { sidebarItems } from './sidebar-items'

export const MenuList: FC = () => {
  const intl = useIntl()

  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index))
  }

  return (
    <List>
      <Box padding="4px 16px" display="flex" alignItems="center" justifyContent="center">
        <Image src="/assets/portal-logo.svg" width={200} height={60} alt="logo" />
      </Box>
      {sidebarItems.map((item, index) => (
        <Fragment key={item.name}>
          {item.subPaths ? (
            <>
              <ListItemButton
                divider
                onClick={(event) => {
                  event.stopPropagation()
                  handleClick(index)
                }}
              >
                <ListItemIcon>{item?.icon || <InboxIcon />}</ListItemIcon>
                <ListItemText primary={intl.formatMessage(item.name)} />
                {item.subPaths && (openItem ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {item.subPaths && (
                <Collapse in={openItem === index}>
                  <List>
                    {item.subPaths.map((subItem) => (
                      <Link key={subItem.name} href={subItem.path as string}>
                        <ListItemButton sx={{ pl: 4 }} divider>
                          <ListItemIcon>{subItem?.icon || <InboxIcon />}</ListItemIcon>
                          <ListItemText primary={intl.formatMessage(subItem.name)} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </>
          ) : (
            <Link href={item.path as string}>
              <ListItemButton divider>
                <ListItemIcon>{item.icon || <InboxIcon />}</ListItemIcon>
                <ListItemText primary={intl.formatMessage(item.name)} />
              </ListItemButton>
            </Link>
          )}
        </Fragment>
      ))}
    </List>
  )
}
