import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = () => [
  {
    name: 'components.sidebar.item.home',
    href: paths.home,
  },
  {
    name: 'pages.general.payments.title',
    href: paths.payments.root,
  },
]
