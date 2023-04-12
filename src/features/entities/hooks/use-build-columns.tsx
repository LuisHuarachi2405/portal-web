import type { GridColDef } from '@mui/x-data-grid'

import { EntityTableActions } from '../components/entities-table-actions'

export const useBuildColumns = () => {
  const columns: GridColDef[] = [
    { field: 'idEntity', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'commercialName', headerName: 'Commercial Name', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <EntityTableActions row={row} />,
    },
  ]

  return { columns }
}
