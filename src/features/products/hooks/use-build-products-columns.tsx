import { GridColDef } from '@mui/x-data-grid'

import { ProductsTableActions } from '../components/products-table-actions'

export const useBuildProductsColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'idProduct',
      headerName: 'ID',
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
      field: 'idProductType',
      headerName: 'Product Type',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: () => <ProductsTableActions />,
    },
  ]

  return { columns }
}
