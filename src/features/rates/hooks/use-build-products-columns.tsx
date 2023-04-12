import { GridColDef } from '@mui/x-data-grid'

export function useBuildProductsColumns() {
  const columnsProducts: GridColDef[] = [
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
  ]

  return { columnsProducts }
}
