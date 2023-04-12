import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { paramId },
  } = useRouter()

  return isEditing
    ? [
        {
          name: 'pages.entities.create.entity.breadcrumb.home.pathname',
          href: paths.home,
        },
        {
          name: 'pages.entities.create.entity.breadcrumb.entities.pathname',
          href: paths.entities.root,
        },
        {
          name: 'pages.entities.create.entity.breadcrumb.edit.entities.pathname',
          href: paths.entities.edit(paramId as string),
        },
      ]
    : [
        {
          name: 'pages.entities.create.entity.breadcrumb.home.pathname',
          href: paths.home,
        },
        {
          name: 'pages.entities.create.entity.breadcrumb.entities.pathname',
          href: paths.entities.root,
        },
        {
          name: 'pages.entities.create.entity.breadcrumb.new.entities.pathname',
          href: paths.entities.new,
        },
      ]
}
