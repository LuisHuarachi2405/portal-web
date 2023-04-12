import { GridColDef } from '@mui/x-data-grid'

import { ProductFeaturesTableActions } from '../components/features/product-features-table-actions'

export const useBuildProductFeaturesColumns = () => {
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
      field: 'categoryName',
      headerName: 'Product Category',
      flex: 1,
    },
    {
      field: 'featureTypeName',
      headerName: 'Feature Type',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <ProductFeaturesTableActions row={row} />,
    },
  ]

  return { columns }
}
