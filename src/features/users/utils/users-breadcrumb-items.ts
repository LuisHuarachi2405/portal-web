import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useUserBuildBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { userId },
  } = useRouter()

  return [
    {
      name: 'components.sidebar.item.home',
      href: paths.home,
    },
    {
      name: 'pages.users.title',
      href: paths.users.root,
    },
    {
      name: isEditing ? 'pages.users.edit' : 'pages.users.new.user.title',
      href: isEditing ? paths.users.edit(userId as string) : paths.users.new,
    },
  ]
}
