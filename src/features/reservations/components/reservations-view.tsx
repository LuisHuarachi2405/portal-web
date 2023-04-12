import { FC, useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { DateTime as LuxonDateTime } from 'luxon'
import { Button, IconButton, Tooltip } from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useReservationsQuery } from '@/shared/graphql/generated/reservations-api'

const breadCrumbItems = [
  {
    name: 'Home',
    href: paths.home,
  },
  {
    name: 'Reservations',
    href: paths.reservations.root,
  },
]

export const ReservationsView: FC = () => {
  const { user } = useAuth()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)

  const { data, loading, error, refetch } = useReservationsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      idEntity: user?.idEntity ?? '',
      skip: currentPage * pageSize,
      take: pageSize,
    },
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.reservations.data ?? []

  return (
    <ViewLayout>
      <Container>
        <ViewHeader>
          <div>
            <h1>Reservations</h1>
            <BreadCrumb items={breadCrumbItems} />
          </div>
          <Link href={paths.reservations.add.root}>
            <Button LinkComponent="a" variant="contained">
              Register
            </Button>
          </Link>
        </ViewHeader>

        <DataTable
          getRowId={(row) => row.idReservation}
          loading={loading}
          rows={rows}
          columns={[
            {
              field: 'code',
              headerName: 'Code',
              flex: 1,
            },
            {
              field: 'file',
              headerName: 'File',
              flex: 1,
            },
            {
              field: 'entryDate',
              headerName: 'Date',
              flex: 1,
              valueFormatter: ({ value }) => LuxonDateTime.fromISO(value).toFormat('dd-MM-yyyy'),
            },
            {
              field: 'reservationType',
              headerName: 'Reservation Type',
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
                <ActionsContainer>
                  <Tooltip arrow title="Edit">
                    <Link href={paths.reservations.reservation.edit.root(row.idReservation)}>
                      <IconButton LinkComponent="a">
                        <EditIcon />
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
          paginationMode="server"
          onPageChange={(page) => {
            setCurrentPage(page)
          }}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 20, 50, 100]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowCount={data?.reservations.count ?? 0}
        />
      </Container>
    </ViewLayout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
