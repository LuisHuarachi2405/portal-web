import { Chip } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'

import { UserModulesTableActions } from '../users/user-modules/user-modules-table-actions'

export const useBuildUserModulesColumns = () => {
  const columns: GridColDef[] = [
    { field: 'idUser', headerName: 'ID', flex: 1 },
    { field: 'idModule', headerName: 'Module Id', flex: 1 },
    { field: 'idOu', headerName: 'OU Id', flex: 1 },
    {
      field: 'idStatus',
      headerName: 'Status',
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'ACTIVE' ? 'success' : 'error'}
          variant="outlined"
        />
      ),
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <UserModulesTableActions row={row} />,
    },
  ]

  return { columns }
}
