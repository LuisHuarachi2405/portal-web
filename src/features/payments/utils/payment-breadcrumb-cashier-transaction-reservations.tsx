import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbCashierTransactionsReservations = () => {
  const {
    query: { idCashierTransaction },
  } = useRouter()

  return [
    {
      name: 'components.sidebar.item.home',
      href: paths.home,
    },
    {
      name: 'pages.payments.form.cashier-transaction.title',
      href: paths.payments.edit(idCashierTransaction as string),
    },
    {
      name: 'pages.payments.form.cashier-transaction.reservations.title',
      href: paths.payments.edit(idCashierTransaction as string),
    },
  ]
}
