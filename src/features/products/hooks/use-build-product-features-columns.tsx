import { GridColDef } from '@mui/x-data-grid'

import { ProductFeaturesTableActions } from '../components/product-features-table-actions'

export const useBuildProductFeaturesColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'idProductFeature',
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
      field: 'idProductCategory',
      headerName: 'Product Category',
      flex: 1,
    },
    {
      field: 'idProductFeatureType',
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
