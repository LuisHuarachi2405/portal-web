import { Chip } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'

import { RolePermissionTableActions } from '../roles-permissions/role-permission-table-actions'

export const useBuildRolePermissionsColumns = () => {
  const columns: GridColDef[] = [
    { field: 'roleName', headerName: 'Role Name', flex: 1 },
    { field: 'permissionName', headerName: 'Permission Name', flex: 1 },
    { field: 'idOu', headerName: 'Ou ID', flex: 1 },
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
      renderCell: ({ row }) => <RolePermissionTableActions row={row} />,
    },
  ]

  return { columns }
}
