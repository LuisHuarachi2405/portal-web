import { FC, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { paths } from '@/shared/routes/paths'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useReservationRepoDocumentsQuery } from '@/shared/graphql/generated/reservations-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'

import { DocumentForm } from './documents-form'

import { useBuildDocumentsColumns } from '../../hooks/use-build-documents-columns'
import { FormModalState } from '../../types/shared.types'

export const DocumentsTable: FC = () => {
  const router = useRouter()
  const { reservationId } = router.query as { reservationId: string }
  const [dataGridEntitiesPageSize, setDataGridEntitiesPageSize] = useState<number>(10)
  const [formModalState, setFormModalState] = useState<FormModalState>({
    open: false,
    itemToEdit: null,
  })

  const { documentsColumns } = useBuildDocumentsColumns({ setFormModalState })

  const handleOnPageChange = (page: number) => setDataGridEntitiesPageSize(page)

  const { data, loading, error, refetch } = useReservationRepoDocumentsQuery({
    variables: {
      idReservation: reservationId,
    },
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.reservationRepoDocuments ?? []

  return (
    <ViewLayout>
      <HeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            Mantenimiento de Registros
          </Typography>

          <BreadCrumb
            items={[
              {
                name: 'Home',
                href: paths.home,
              },
              {
                name: 'Reservations',
                href: paths.reservations.root,
              },
              {
                name: 'Reservation',
                href: paths.reservations.add.root,
              },
              {
                name: 'Documents',
                href: paths.reservations.reservation.edit.documents(reservationId),
              },
            ]}
          />
        </Box>

        <Button
          color="primary"
          variant="contained"
          size="small"
          startIcon={<Add />}
          onClick={() => {
            setFormModalState({
              open: true,
              itemToEdit: null,
            })
          }}
        >
          Add Document
        </Button>
      </HeaderContainer>

      <DataTable
        pageSize={dataGridEntitiesPageSize}
        onPageChange={handleOnPageChange}
        loading={loading}
        columns={documentsColumns}
        rows={rows}
        getRowId={(row) => row.idRepoDocument}
      />

      <DocumentForm
        open={formModalState.open}
        handleClose={() => {
          setFormModalState({
            open: false,
            itemToEdit: null,
          })
        }}
        itemToEdit={formModalState.itemToEdit}
      />
    </ViewLayout>
  )
}

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`
