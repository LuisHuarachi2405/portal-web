import { Chip } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'

import { UserRolesTableActions } from '../users/user-roles/user-roles-table-actions'

export const useBuildUserRolesColumns = () => {
  const columns: GridColDef[] = [
    { field: 'idUser', headerName: 'ID', flex: 1 },
    { field: 'idRole', headerName: 'Role Id', flex: 1 },
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
      renderCell: ({ row }) => <UserRolesTableActions row={row} />,
    },
  ]

  return { columns }
}
