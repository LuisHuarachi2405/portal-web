import { GridColDef } from '@mui/x-data-grid'

import { ProductSubfeaturesTableActions } from '../components/subfeatures/product-subfeatures-table-actions'

export const useBuildProductSubfeaturesColumns = () => {
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
      field: 'productSubFeatureType',
      headerName: 'Subfeature Type',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <ProductSubfeaturesTableActions row={row} />,
    },
  ]

  return { columns }
}
