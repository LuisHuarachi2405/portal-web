import type { FC } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

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
          <NextLink key={item.href} href={item.href} passHref>
            <Link
              href="##"
              underline="hover"
              color={index === items.length - 1 ? 'primary' : 'inherit'}
              fontSize="14px"
              fontWeight={600}
            >
              {intl.formatMessage(item.name)}
            </Link>
          </NextLink>
        ))}
      </Breadcrumbs>
    </div>
  )
}
