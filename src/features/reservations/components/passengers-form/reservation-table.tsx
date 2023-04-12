import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { IconButton, TextField, Tooltip } from '@mui/material'
import {
  Person as PassengerIcon,
  Article as DocumentIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { DataTable } from '@/shared/components/data-table/data-table'

const mockReservationData = {
  idReservation: '1',
  startDate: '01/01/22',
  endDate: '12/12/22',
  code: 'Code 1',
  group: 'Group 1',
  file: 'File 1',
  totalPrice: 100.0,
  idEntity: 'Entity 1',
}

export const ReservationTable: FC = () => (
  <div>
    <h2>Reservation Data</h2>

    <DataTable
      getRowId={(row) => row.idReservation}
      hideFooter
      disableColumnMenu
      disableColumnFilter
      components={undefined}
      rows={[mockReservationData]}
      columns={[
        {
          field: 'startDate',
          headerName: 'Start Date',
          flex: 1,
        },
        {
          field: 'endDate',
          headerName: 'End Date',
          flex: 1,
        },
        {
          field: 'code',
          headerName: 'Code',
          flex: 1,
        },
        {
          field: 'group',
          headerName: 'Group',
          flex: 1,
          renderCell: (params) => <TextField defaultValue={params.value} size="small" />,
        },
        {
          field: 'file',
          headerName: 'File',
          flex: 1,
          renderCell: (params) => <TextField defaultValue={params.value} size="small" />,
        },
        {
          field: 'totalPrice',
          headerName: 'Total Price',
          flex: 1,
        },
        {
          field: 'idEntity',
          headerName: 'Entity',
          flex: 1,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          align: 'center',
          headerAlign: 'center',
          flex: 1,
          renderCell: () => (
            <ActionsContainer>
              <Tooltip arrow title="Passengers">
                <Link href={paths.reservations.add.passengers}>
                  <IconButton LinkComponent="a">
                    <PassengerIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip arrow title="Documents">
                <Link href={paths.reservations.add.documents}>
                  <IconButton LinkComponent="a">
                    <DocumentIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip arrow title="Delete">
                <IconButton>
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
