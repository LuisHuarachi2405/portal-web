import { FC, useEffect, useMemo } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import ShortUniqueId from 'short-unique-id'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Button, IconButton, MenuItem, TextField, Tooltip } from '@mui/material'
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Person as PassengerIcon,
  Article as DocumentIcon,
} from '@mui/icons-material'
import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetReservationTypesQuery } from '@/shared/graphql/generated/reservations-api'

import { ReservationData } from '../../types/shared.types'
import {
  ReservationFormValues,
  useReservationForm,
  UseReservationProps,
} from '../../hooks/use-reservation-form'

const createUniqueId = new ShortUniqueId({ length: 12 })

export const ReservationTable: FC<{
  totalPrice: number
  reservation: ReservationData | null
  setReservation: (values: ReservationData) => void
  isEditing: boolean
  prevValues: UseReservationProps
}> = ({ reservation, totalPrice, setReservation, isEditing, prevValues }) => {
  const reservationCode = useMemo(() => createUniqueId(), [])
  const router = useRouter()
  const { reservationId } = router.query as { reservationId: string }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useReservationForm({ ...prevValues })

  const { data: reservationTypesData } = useGetReservationTypesQuery()

  const onSubmit: SubmitHandler<ReservationFormValues> = (formData) => {
    setReservation({
      ...formData,
      reservationCode,
      quantity: Number(formData.quantity),
    })
  }

  useEffect(() => {
    if (isEditing && prevValues) {
      setReservation({
        ...prevValues,
        quantity: prevValues.prevValues?.passengersQuantity ?? 1,
        reservationCode: prevValues.prevValues?.code ?? '',
      } as ReservationData)
    }
  }, [isEditing, prevValues, setReservation])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Reservation Data</h2>

      <DataTable
        getRowId={(row) => row.idReservation}
        hideFooter
        disableColumnMenu
        disableColumnFilter
        components={undefined}
        rows={[{ idReservation: '1' }]}
        columns={
          reservation !== null
            ? [
                {
                  field: 'code',
                  headerName: 'Code',
                  flex: 1,
                  renderCell: () => reservation.reservationCode,
                },
                {
                  field: 'reservationType',
                  headerName: 'Reservation Type',
                  flex: 1,
                  renderCell: () => reservation.reservationType,
                },
                {
                  field: 'group',
                  headerName: 'Group',
                  flex: 1,
                  renderCell: () => reservation.group,
                },
                {
                  field: 'file',
                  headerName: 'File',
                  flex: 1,
                  renderCell: () => reservation.file,
                },
                {
                  field: 'note',
                  headerName: 'Note',
                  flex: 1,
                  renderCell: () => reservation.note,
                },
                {
                  field: 'quantity',
                  headerName: 'PAX Quantity',
                  renderCell: () => reservation.quantity,
                },
                {
                  field: 'totalPrice',
                  headerName: 'Total Price',
                  flex: 1,
                  renderCell: () => totalPrice.toFixed(2),
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
                        <Link href={paths.reservations.reservation.edit.documents(reservationId)}>
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
              ]
            : [
                {
                  field: 'code',
                  headerName: 'Code',
                  flex: 1,
                  renderCell: () => reservationCode,
                },
                {
                  field: 'reservationType',
                  headerName: 'Reservation Type',
                  flex: 1,
                  renderCell: () => (
                    <Controller
                      control={control}
                      name="reservationType"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          select
                          fullWidth
                          disabled={reservationTypesData === undefined}
                          error={errors.reservationType !== undefined}
                        >
                          <MenuItem value="">Select a reservation type</MenuItem>
                          {reservationTypesData?.getGeneralParametersByCode.generalParameterValue.map(
                            (reservationType) => (
                              <MenuItem
                                key={reservationType.idGeneralParameterValue}
                                value={reservationType.idGeneralParameterValue}
                              >
                                {reservationType.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      )}
                    />
                  ),
                },
                {
                  field: 'group',
                  headerName: 'Group',
                  flex: 1,
                  renderCell: () => (
                    <Controller
                      control={control}
                      name="group"
                      render={({ field }) => (
                        <TextField {...field} size="small" error={errors.group !== undefined} />
                      )}
                    />
                  ),
                },
                {
                  field: 'file',
                  headerName: 'File',
                  flex: 1,
                  renderCell: () => (
                    <Controller
                      control={control}
                      name="file"
                      render={({ field }) => (
                        <TextField {...field} size="small" error={errors.file !== undefined} />
                      )}
                    />
                  ),
                },
                {
                  field: 'note',
                  headerName: 'Note',
                  flex: 1,
                  renderCell: () => (
                    <Controller
                      control={control}
                      name="note"
                      render={({ field }) => (
                        <TextField {...field} size="small" error={errors.file !== undefined} />
                      )}
                    />
                  ),
                },
                {
                  field: 'quantity',
                  headerName: 'PAX Quantity',
                  renderCell: () => (
                    <Controller
                      control={control}
                      name="quantity"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          onChange={(event) => {
                            const sanitizedValue = event.target.value.replace(/\D/g, '')
                            field.onChange(sanitizedValue)
                          }}
                          fullWidth
                          error={errors.quantity !== undefined}
                        />
                      )}
                    />
                  ),
                },
                {
                  field: 'totalPrice',
                  headerName: 'Total Price',
                  flex: 1,
                  renderCell: () => '-',
                },
                {
                  field: 'actions',
                  headerName: 'Actions',
                  align: 'center',
                  headerAlign: 'center',
                  flex: 1,
                  renderCell: () => (
                    <ActionsContainer>
                      <Tooltip arrow title="Delete">
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </ActionsContainer>
                  ),
                },
              ]
        }
      />

      {reservation === null && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            style={{ marginTop: '16px' }}
          >
            Open Reservation
          </Button>
        </div>
      )}
    </form>
  )
}

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
