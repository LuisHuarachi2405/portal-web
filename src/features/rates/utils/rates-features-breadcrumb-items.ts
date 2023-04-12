import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useRatesFeaturesBreadcrumbItems = (isEditing: boolean | undefined) => {
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
          name: 'pages.rates.create.entity.breadcrumb.rates.features.pathname',
          href: paths.rates.features.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.features.edit.pathname',
          href: paths.rates.features.edit(paramId as string),
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
          name: 'pages.rates.create.entity.breadcrumb.rates.features.pathname',
          href: paths.rates.features.root,
        },
        {
          name: 'pages.rates.create.entity.breadcrumb.rates.features.create.pathname',
          href: paths.rates.features.new,
        },
      ]
}
