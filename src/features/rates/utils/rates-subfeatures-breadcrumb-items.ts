import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useRatesSubfeaturesBreadcrumbItems = (isEditing: boolean | undefined) => {
  const {
    query: { paramId },
  } = useRouter()

  return isEditing
    ? [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'components.sidebar.item.rates',
          href: paths.rates.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.subfeatures.pathname',
          href: paths.rates.subfeatures.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.subfeatures.edit.pathname',
          href: paths.rates.subfeatures.edit(paramId as string),
        },
      ]
    : [
        {
          name: 'components.sidebar.item.home',
          href: paths.home,
        },
        {
          name: 'components.sidebar.item.rates',
          href: paths.rates.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.subfeatures.pathname',
          href: paths.rates.subfeatures.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.subfeatures.create.pathname',
          href: paths.rates.subfeatures.new,
        },
      ]
}
