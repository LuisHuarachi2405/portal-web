import { paths } from '@/shared/routes/paths'

export const sidebarItems = [
  {
    name: 'components.sidebar.item.home',
    path: paths.home,
  },
  {
    name: 'components.sidebar.item.products',
    subPaths: [
      {
        name: 'components.sidebar.item.products.list',
        path: paths.products.root,
      },
      {
        name: 'components.sidebar.item.products.categories',
        path: paths.products.categories.root,
      },
      {
        name: 'components.sidebar.item.products.features',
        path: paths.products.features.root,
      },
      {
        name: 'components.sidebar.item.products.subfeatures',
        path: paths.products.subfeatures.root,
      },
    ],
  },
  {
    name: 'components.sidebar.item.general.parameters',
    path: paths.generalParameters.root,
  },
  {
    name: 'components.sidebar.item.entity',
    path: paths.entities.root,
  },
]
