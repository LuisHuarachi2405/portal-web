import { GridColDef } from '@mui/x-data-grid'

import { CashierTransactionPaymentsSearchTableActions } from '../../components/payment/cashier-transaction-search-table-actions'
import { priceFormatter } from '../../utils/numbers'

export const useBuildCashierTransactionPaymentsSearchColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'DocumentTypeTrx',
      headerName: 'Payment type',
      flex: 1,
      valueGetter: (params) =>
        params.row.typePaymentsGeneralParameters?.shortName || params?.row?.DocumentTypeTrx,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      valueGetter: (params) => params.row.date.slice(0, 10),
    },
    {
      field: 'idDocumentTypeName',
      headerName: 'Doc type / Trx',
      flex: 1,
      valueGetter: (params) =>
        params.row.typeDocumentGeneralParameters?.shortName || params?.row?.idDocumentTypeName,
    },
    {
      field: 'number',
      headerName: 'Nro / Trx',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'balance1',
      headerName: 'Amount available',
      flex: 1,
      editable: true,
      valueGetter: (params) => priceFormatter(params.row.balance1) || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <CashierTransactionPaymentsSearchTableActions row={row} />,
    },
  ]

  return { columns }
}
