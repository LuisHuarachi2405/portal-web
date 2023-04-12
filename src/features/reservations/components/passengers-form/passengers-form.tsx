import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Button, CircularProgress } from '@mui/material'
import { Save as SaveIcon } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useCreatePassengersMutation } from '@/shared/graphql/generated/reservations-api'

import { PassengerForm } from './passenger-form'
import { PassengersTable } from './passengers-table'
import { ReservationTable } from './reservation-table'

import { PassengerFormData } from '../../hooks/use-passenger-form'

export const PassengersForm: FC = () => {
  const [passengers, setPassengers] = useState<PassengerFormData[]>([])

  const addPassenger = (passenger: PassengerFormData) => {
    setPassengers((prevPassengers) => [...prevPassengers, passenger])
  }

  const removePassenger = (idPassenger: number) => {
    setPassengers((prevPassengers) =>
      prevPassengers.filter((_passenger, index) => index !== idPassenger)
    )
  }

  const [createPassengers, { loading: createPassengersLoading }] = useCreatePassengersMutation({
    onCompleted: () => {
      toast.success('Passengers created successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onSavePassengers = async () => {
    try {
      await createPassengers({
        variables: {
          createPassengerInputArray: passengers.map((value) => ({
            idOu: '17f6c3e4eab848fba150eb8266a61fb3',
            name: value.name,
            lastName: value.name,
            idDocumentType: value.idDocumentType,
            documentNumber: value.documentNumber,
            birthDate: value.birthDate,
            idGender: '17f6c3e4eab848fba150eb8266a61fb3',
            idCountry: value.citizenship,
            flagInvoice: value.passengerInvoice,
            email: value.email,
            idPassengerType: value.idPassengerType,
            idUserCreate: '17f6c3e4eab848fba150eb8266a61fb3',
            idUserUpdate: '17f6c3e4eab848fba150eb8266a61fb3',
          })),
        },
      })
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  // eslint-disable-next-line no-console
  console.log(passengers)

  return (
    <ViewLayout>
      <Header>
        <h1>Reservation Management - Passengers</h1>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Button
            onClick={onSavePassengers}
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            disabled={createPassengersLoading}
          >
            Save Passengers
          </Button>
          {createPassengersLoading && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>
      </Header>
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
            name: 'Passengers',
            href: paths.reservations.add.passengers,
          },
        ]}
      />

      <ReservationTable />

      <PassengersTable passengers={passengers} removePassenger={removePassenger} />

      <PassengerForm addPassenger={addPassenger} />
    </ViewLayout>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`
