import type { GridColDef } from '@mui/x-data-grid'

import { UsersTableActions } from '../users/users-table-actions'

export const useBuildUsersColumns = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'userName', headerName: 'Username', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'createdAt',
      headerName: 'Created At',
      renderCell: (params) => new Date(params.value).toLocaleString(),
      flex: 1,
      type: 'singleSelect',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <UsersTableActions row={row} />,
    },
  ]

  return { columns }
}
