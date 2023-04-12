import { FC } from 'react'
import styled from '@emotion/styled'
import { DateTime as LuxonDateTime } from 'luxon'
import { IconButton, Tooltip } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'

import { DataTable } from '@/shared/components/data-table/data-table'

import { PassengerFormData } from '../../hooks/use-passenger-form'

export const PassengersTable: FC<{
  passengers: PassengerFormData[]
  removePassenger: (idPassenger: number) => void
}> = ({ passengers, removePassenger }) => (
  <div>
    <h2>Passengers List</h2>

    <DataTable
      getRowId={(row) => row.idPassenger}
      disableColumnMenu
      disableColumnFilter
      components={undefined}
      rows={passengers.map((passenger, index) => ({
        ...passenger,
        idPassenger: index,
      }))}
      columns={[
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
        },
        {
          field: 'idDocumentType',
          headerName: 'Document Type',
          flex: 1,
        },
        {
          field: 'documentNumber',
          headerName: 'Document Number',
          flex: 1,
        },
        {
          field: 'birthDate',
          headerName: 'Birth Date',
          flex: 1,
          valueFormatter: ({ value }) =>
            LuxonDateTime.fromISO(value, { zone: 'utc' }).toFormat('dd-MM-yyyy'),
        },
        {
          field: 'citizenship',
          headerName: 'Citizenship',
          flex: 1,
        },
        {
          field: 'email',
          headerName: 'Email',
          flex: 1,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          flex: 1,
        },
        {
          field: 'observations',
          headerName: 'Observations',
          flex: 1,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          align: 'center',
          headerAlign: 'center',
          flex: 1,
          renderCell: ({ row }) => (
            <ActionsContainer>
              <Tooltip arrow title="Delete">
                <IconButton
                  onClick={() => {
                    removePassenger(row.idPassenger)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ActionsContainer>
          ),
        },
      ]}
    />
  </div>
)

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
