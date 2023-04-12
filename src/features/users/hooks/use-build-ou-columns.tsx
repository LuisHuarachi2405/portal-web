import type { GridColDef } from '@mui/x-data-grid'

import { OrganizationalUnitsTableActions } from '../ou/organizational-units-table-actions'

export const useBuildOuColumns = () => {
  const columns: GridColDef[] = [
    { field: 'idOu', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'shortName', headerName: 'Short Name', flex: 1 },
    { field: 'code', headerName: 'Code', flex: 1 },
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
      renderCell: ({ row }) => <OrganizationalUnitsTableActions row={row} />,
    },
  ]

  return { columns }
}
