import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) =>
  isEditing
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
          href: '#',
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
          href: paths.entities.create,
        },
      ]
