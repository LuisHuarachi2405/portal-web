import { GridColDef } from '@mui/x-data-grid'

import { AdvancesTableActions } from '../../components/advances/advances-table-actions'

export const useBuildPaymentsAdvancesColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: 'Date',
      width: 130,
      valueGetter: ({ value }) => value && value.slice(0, 10),
    },
    {
      field: 'idDocumentTypeName',
      headerName: 'Document Type',
      width: 250,
      valueGetter: (params) => params.row?.typeDocumentGeneralParameters?.name || '',
    },
    {
      field: 'number',
      headerName: 'Correlative',
      width: 170,
      valueGetter: (params) => `${params.row?.SerialDocument || ''} ${params.row?.number || ''}`,
    },
    {
      field: 'amountTotal',
      headerName: 'Amount Total',
      width: 170,
      valueGetter: (params) => params.row?.amountTotal || 0,
    },
    {
      field: 'cpeSellingPrice',
      headerName: 'Invoice Amount',
      width: 170,
      valueGetter: (params) => params.row.cpeSellingPrice || 0,
    },
    {
      field: 'SaldoUSD',
      headerName: 'Amount Available',
      width: 170,
      valueGetter: (params) => params.row.SaldoUSD || 0,
    },
    {
      field: 'cpeStatusSunat',
      headerName: 'Sunat Status',
      width: 450,
      valueGetter: (params) => params.row.cpeStatusSunat || 0,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      width: 170,
      valueGetter: (params) => params.row.idStatus || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      width: 110,
      renderCell: ({ row }) => <AdvancesTableActions row={row} />,
    },
  ]

  return { columns }
}
