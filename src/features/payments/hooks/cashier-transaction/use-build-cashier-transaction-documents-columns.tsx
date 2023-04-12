import { GridColDef } from '@mui/x-data-grid'

import { CashierTransactionDocumentsTableActions } from '../../components/cashier-transaction/cashier-transaction-documents-table-actions'
import { priceFormatter } from '../../utils/numbers'

export const useBuildCashierTransactionDocumentsColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      valueGetter: (params) => params.row.date.slice(0, 10),
    },
    {
      field: 'idCashierTransactionItemTypeName',
      headerName: 'Doc type',
      flex: 1,
      valueGetter: (params) =>
        params.row.typeDocumentGeneralParameters?.name || params.row.idDocumentTypeName,
    },
    {
      field: 'numberDocument',
      headerName: 'Nro doc',
      flex: 1,
      valueGetter: (params) =>
        `${params.row.SerialDcoument}-${params.row.numberDocument}` ||
        params.row.idDocumentTypeName,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 2,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'cpeStatusSunat',
      headerName: 'SUNAT Status',
      flex: 3,
      valueGetter: (params) =>
        `${params?.row?.cpeCodResponseSunat} - ${params?.row?.cpeStatusSunat}`,
    },
    {
      field: 'amount1',
      headerName: 'Amount',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row.amount1) || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <CashierTransactionDocumentsTableActions row={row} />,
    },
  ]

  return { columns }
}
