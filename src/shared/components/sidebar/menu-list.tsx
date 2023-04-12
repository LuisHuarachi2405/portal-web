import { useState, Fragment, FC } from 'react'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Link from 'next/link'
import { Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

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
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={intl.formatMessage(item.name)} />
                {item.subPaths && (openItem ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {item.subPaths && (
                <Collapse in={openItem === index}>
                  <List>
                    {item.subPaths.map((subItem) => (
                      <Link key={subItem.name} href={subItem.path}>
                        <ListItemButton sx={{ pl: 4 }} divider>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={intl.formatMessage(subItem.name)} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </>
          ) : (
            <Link href={item.path}>
              <ListItemButton divider>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={intl.formatMessage(item.name)} />
              </ListItemButton>
            </Link>
          )}
        </Fragment>
      ))}
    </List>
  )
}
