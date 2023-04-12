import { Chip } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'

import { GeneralParametersTableActions } from '../components/general-parameters-table-actions'

export const useBuildColumns = () => {
  const columns: GridColDef[] = [
    { field: 'idGeneralParameter', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'shortName', headerName: 'Short Name', flex: 1 },
    { field: 'code', headerName: 'Code', flex: 1 },
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
      renderCell: ({ row }) => <GeneralParametersTableActions row={row} />,
    },
  ]

  return { columns }
}
