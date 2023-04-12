import { GridColDef } from '@mui/x-data-grid'

import { CashierTransactionReservationsItemsSearchTableActions } from '../../components/reservation/cashier-transaction-reservation-items-search-table-actions'
import { priceFormatter, sub } from '../../utils/numbers'

interface BuildCashierTransactionReservationSearchColumnsProps {
  profit: any
}

export const useBuildCashierTransactionReservationItemsSearchColumns = ({
  profit,
}: BuildCashierTransactionReservationSearchColumnsProps) => {
  const columns: GridColDef[] = [
    {
      field: 'code',
      headerName: 'Reservation code',
      flex: 2,
    },
    {
      field: 'entryDate',
      headerName: 'Date',
      flex: 1,
      valueGetter: ({ value }) => value && value.slice(0, 10),
    },
    {
      field: 'note',
      headerName: 'Item',
      flex: 3,
      valueGetter: (params) => params.row.item.product.name || '',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
      valueGetter: (params) => params.row.item?.quantity || 0,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'unitPriceUSD',
      headerName: 'Unit price',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row.item?.unitPriceUSD) || 0,
    },
    {
      field: 'totalPriceUSD',
      headerName: 'Amount',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row.item?.totalPriceUSD) || 0,
    },
    {
      field: 'pendingPayment',
      headerName: 'Pending to pay',
      flex: 1,
      valueGetter: (params) =>
        priceFormatter(sub(params.row.item?.totalPriceUSD, params.row.item?.totalPayedUSD)) || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <CashierTransactionReservationsItemsSearchTableActions row={row} profit={profit} />
      ),
    },
  ]

  return { columns }
}
