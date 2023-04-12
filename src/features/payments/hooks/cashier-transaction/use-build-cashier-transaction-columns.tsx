import { GridColDef } from '@mui/x-data-grid'

import { CashierTransactionTableActions } from '../../components/cashier-transaction/cashier-transaction-table-actions'
import { priceFormatter } from '../../utils/numbers'

interface BuildCashierTransactionColumns {
  refetch: any
}

export const useBuildCashierTransactionColumns = ({ refetch }: BuildCashierTransactionColumns) => {
  const columns: GridColDef[] = [
    {
      field: 'idCashierTransaction',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      valueGetter: ({ value }) => value && value.slice(0, 10),
    },
    {
      field: 'note',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'amount1',
      headerName: 'Amount',
      flex: 1,
      valueGetter: ({ value }) => priceFormatter(value) || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <CashierTransactionTableActions row={row} refetch={refetch} />,
    },
  ]

  return { columns }
}
