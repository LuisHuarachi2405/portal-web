import { Chip } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'

import { ModulePermissionTableActions } from '../module-permissions/module-permission-table-actions'

export const useBuildModulePermissionColumns = () => {
  const columns: GridColDef[] = [
    { field: 'moduleName', headerName: 'Module Name', flex: 1 },
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
      field: 'createdAt',
      headerName: 'Created At',
      renderCell: (params) => new Date(params.value).toLocaleString(),
      flex: 1,
      type: 'singleSelect',
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      renderCell: (params) => new Date(params.value).toLocaleString(),
      flex: 1,
      type: 'singleSelect',
    },

    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <ModulePermissionTableActions row={row} />,
    },
  ]

  return { columns }
}
