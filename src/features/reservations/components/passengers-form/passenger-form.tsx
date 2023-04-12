import { FC } from 'react'
import styled from '@emotion/styled'
import { DateTime as LuxonDateTime } from 'luxon'
import { Add as AddIcon } from '@mui/icons-material'
import { SubmitHandler, Controller } from 'react-hook-form'
import { Button, MenuItem, TextField } from '@mui/material'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

import {
  usePassengerForm,
  PassengerFormData,
  PassengerFormValues,
} from '../../hooks/use-passenger-form'

export const PassengerForm: FC<{
  addPassenger: (passenger: PassengerFormData) => void
}> = ({ addPassenger }) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = usePassengerForm()

  const onSubmit: SubmitHandler<PassengerFormValues> = (formData) => {
    const validatedFormData = formData as PassengerFormData
    addPassenger(validatedFormData)
    reset()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <div>
        <h2>Passenger Data</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField {...field} size="small" label="Name" error={errors.name !== undefined} />
              )}
            />

            <Controller
              control={control}
              name="reservationContact"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Reservation Contact"
                  error={errors.reservationContact !== undefined}
                />
              )}
            />

            <Controller
              control={control}
              name="idPassengerType"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Passenger Type"
                  select
                  error={errors.idPassengerType !== undefined}
                >
                  <MenuItem value="Adult">Adult</MenuItem>
                  <MenuItem value="Child">Child</MenuItem>
                  <MenuItem value="Infant">Infant</MenuItem>
                  <MenuItem value="Guide">Guide</MenuItem>
                </TextField>
              )}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="idDocumentType"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Identity Document Type"
                  select
                  error={errors.idDocumentType !== undefined}
                >
                  <MenuItem value="DNI">DNI</MenuItem>
                  <MenuItem value="Passport">Passport</MenuItem>
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="documentNumber"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Identity Document Number"
                  error={errors.documentNumber !== undefined}
                />
              )}
            />

            <Controller
              control={control}
              name="passengerInvoice"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Passenger Invoice"
                  error={errors.passengerInvoice !== undefined}
                />
              )}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="birthDate"
              render={({ field }) => (
                <DatePicker
                  inputFormat="dd-MM-yyyy"
                  value={field.value}
                  onChange={(date: LuxonDateTime | null) => {
                    field.onChange(date?.toISO() ?? '')
                  }}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      ref={field.ref}
                      name={field.name}
                      onBlur={field.onBlur}
                      size="small"
                      label="Birth Date (dd-mm-yyyy)"
                      error={errors.birthDate !== undefined}
                    />
                  )}
                />
              )}
            />

            <Controller
              control={control}
              name="citizenship"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Citizenship"
                  select
                  error={errors.citizenship !== undefined}
                >
                  <MenuItem value="Argentina">Argentina</MenuItem>
                  <MenuItem value="Brasil">Brasil</MenuItem>
                  <MenuItem value="Chile">Chile</MenuItem>
                  <MenuItem value="Uruguay">Uruguay</MenuItem>
                </TextField>
              )}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Email"
                  error={errors.email !== undefined}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Phone"
                  error={errors.phone !== undefined}
                />
              )}
            />

            <Controller
              control={control}
              name="observations"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Observations"
                  error={errors.observations !== undefined}
                />
              )}
            />

            <Button type="submit" variant="contained" startIcon={<AddIcon />}>
              Add
            </Button>
          </div>
        </Form>
      </div>
    </LocalizationProvider>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
