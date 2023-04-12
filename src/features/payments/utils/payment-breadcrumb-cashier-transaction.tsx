import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbCashierTransactions = () => [
  {
    name: 'components.sidebar.item.home',
    href: paths.home,
  },
  {
    name: 'pages.payments.form.cashier-transaction.title',
    href: paths.payments.root,
  },
]
