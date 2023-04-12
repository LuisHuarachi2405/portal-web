import type { FC } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import NextLink from 'next/link'
import Link from '@mui/material/Link'

import { useIntl } from '../hooks/use-intl'

interface BreadcrumbItems {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItems[]
}

export const BreadCrumb: FC<BreadcrumbProps> = (props) => {
  const { items } = props

  const intl = useIntl()

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) => (
          <Link
            key={item.href}
            component={NextLink}
            href={item.href}
            underline="hover"
            color={index === items.length - 1 ? 'primary' : 'inherit'}
            fontSize="14px"
            fontWeight={600}
          >
            {intl.formatMessage(item.name)}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}
