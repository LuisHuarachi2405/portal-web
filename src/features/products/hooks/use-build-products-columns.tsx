import { GridColDef } from '@mui/x-data-grid'

import { ProductsTableActions } from '../components/products-table-actions'

export const useBuildProductsColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'code',
      headerName: 'Code',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'shortName',
      headerName: 'Short Name',
      flex: 1,
    },
    {
      field: 'productType',
      headerName: 'Product Type',
      flex: 1,
    },
    {
      field: 'supplierName',
      headerName: 'Supplier',
      flex: 1,
    },
    {
      field: 'inventoryFlag',
      headerName: 'Has Inventory',
      flex: 1,
      renderCell: ({ row }) => (row.inventoryFlag === '1' ? 'Yes' : 'No'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',

      flex: 1,
      renderCell: ({ row }) => <ProductsTableActions row={row} />,
    },
  ]

  return { columns }
}
