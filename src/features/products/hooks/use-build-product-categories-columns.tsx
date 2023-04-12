import { GridColDef } from '@mui/x-data-grid'

import { ProductCategoriesTableActions } from '../components/product-categories-table-actions'

export const useBuildProductCategoriesColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'idProductCategory',
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
      field: 'idCategoryType',
      headerName: 'Category Type',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <ProductCategoriesTableActions row={row} />,
    },
  ]

  return { columns }
}
