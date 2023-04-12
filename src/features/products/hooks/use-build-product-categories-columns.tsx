import { GridColDef } from '@mui/x-data-grid'

import { ProductCategoriesTableActions } from '../components/categories/product-categories-table-actions'

export const useBuildProductCategoriesColumns = () => {
  const columns: GridColDef[] = [
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
      field: 'categoryType',
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
