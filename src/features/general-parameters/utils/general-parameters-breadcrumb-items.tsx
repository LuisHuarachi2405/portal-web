import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { paramId },
  } = useRouter()

  return [
    {
      name: 'components.sidebar.item.home',
      href: paths.home,
    },
    {
      name: 'pages.general.parameters.title',
      href: paths.generalParameters.root,
    },
    {
      name: isEditing ? 'pages.general.parameters.edit.title' : 'pages.general.parameters.title',
      href: isEditing
        ? paths.generalParameters.edit(paramId as string)
        : paths.generalParameters.new,
    },
  ]
}
