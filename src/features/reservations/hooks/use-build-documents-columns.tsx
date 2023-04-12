import { GridColDef } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'

import { DocumentTableActions } from '../components/documents/documents-table-actions'
import { FormModalState } from '../types/shared.types'

export const useBuildDocumentsColumns = ({
  setFormModalState,
}: {
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
}) => {
  const documentsColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <DocumentTableActions row={row} setFormModalState={setFormModalState} />
      ),
    },
  ]

  return { documentsColumns }
}
