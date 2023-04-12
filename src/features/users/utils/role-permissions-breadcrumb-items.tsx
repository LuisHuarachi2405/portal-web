import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { idRole, idPermission },
  } = useRouter()

  return isEditing
    ? [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'pages.role.permission.title',
          href: paths.users.rolePermissions.root,
        },
        {
          name: 'pages.role.permission.edit.title',
          href: paths.users.rolePermissions.edit({
            idRole: idRole as string,
            idPermission: idPermission as string,
          }),
        },
      ]
    : [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'pages.role.permission.title',
          href: paths.users.rolePermissions.root,
        },
        {
          name: 'pages.role.permission.create.title',
          href: paths.users.rolePermissions.new,
        },
      ]
}
