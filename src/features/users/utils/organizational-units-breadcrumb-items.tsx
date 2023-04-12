import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { ouId },
  } = useRouter()

  return isEditing
    ? [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'pages.organizational.units.title',
          href: paths.users.organizationalUnits.root,
        },
        {
          name: 'pages.organizational.units.edit.ou.title',
          href: paths.users.organizationalUnits.edit(ouId as string),
        },
      ]
    : [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'pages.organizational.units.title',
          href: paths.users.organizationalUnits.root,
        },
        {
          name: 'pages.organizational.units.new.ou.title',
          href: paths.users.organizationalUnits.new,
        },
      ]
}
