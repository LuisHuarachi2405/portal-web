import { FC, useState } from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { DateTime as LuxonDateTime } from 'luxon'
import { Add as AddIcon } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  useCreateReservationMutation,
  useCreateReservationItemMutation,
  useCreateInventoryTransactionMutation,
  useGetInventoryTransactionTypesLazyQuery,
} from '@/shared/graphql/generated/reservations-api'

import { ItineraryTable } from './itinerary-table'
import { ReservationTable } from './reservation-table'
import { SearchProductSection } from './search-product-section'

import { ItineraryItem, Product, ReservationData } from '../../types/shared.types'
import { UseReservationProps } from '../../hooks/use-reservation-form'

interface ReservationFormProps extends UseReservationProps {
  // eslint-disable-next-line react/no-unused-prop-types
  isEditing?: boolean
}

const ReservationForm: FC<ReservationFormProps> = (props: ReservationFormProps) => {
  const { prevValues } = props
  const { user } = useAuth()
  const router = useRouter()

  const [reservation, setReservation] = useState<ReservationData | null>(null)
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [createReservation] = useCreateReservationMutation()
  const [createReservationItem] = useCreateReservationItemMutation()
  const [createInventoryTransaction] = useCreateInventoryTransactionMutation()
  const [getInventoryTransactionTypes] = useGetInventoryTransactionTypesLazyQuery()

  const addToItinerary = (item: Product, quantity: number) => {
    setItinerary((prev) => {
      const newItinerary = [...prev]
      const existingItem = newItinerary.find((i) => i.id === item.id)
      if (existingItem !== undefined) {
        if (existingItem.quantity === reservation!.quantity) {
          // eslint-disable-next-line no-alert
          window.alert('You have reached the maximum quantity for this product')
          return prev
        }
        if (existingItem.quantity + quantity > reservation!.quantity) {
          // eslint-disable-next-line no-alert
          window.alert(
            `You can only add ${
              reservation!.quantity - existingItem.quantity
            } more item(s) of this product`
          )
          return prev
        }
        existingItem.quantity += quantity
        return newItinerary
      }

      if (quantity > reservation!.quantity) {
        // eslint-disable-next-line no-alert
        window.alert(`You can only add ${reservation!.quantity} item(s) of this product`)
        return prev
      }

      return prev.concat({ ...item, quantity })
    })
  }

  const removeFromItinerary = (itemId: string) => {
    setItinerary((prev) => prev.filter((item) => item.id !== itemId))
  }

  const saveReservationData = async () => {
    try {
      if (reservation === null) {
        // eslint-disable-next-line no-alert
        window.alert('You must create a reservation first')
        return
      }

      if (itinerary.length === 0) {
        // eslint-disable-next-line no-alert
        window.alert('Please add at least one product to the itinerary')
        return
      }

      setIsSubmitting(true)

      const inventoryTransactionTypesData = await getInventoryTransactionTypes()

      const debitTransactionType =
        inventoryTransactionTypesData.data?.getGeneralParametersByCode.generalParameterValue.find(
          (item) => item.code === 'PROTTIEGR'
        )

      if (debitTransactionType === undefined) {
        // eslint-disable-next-line no-alert
        window.alert('Error creating reservation')
        return
      }

      const response = await createReservation({
        variables: {
          input: {
            code: reservation.reservationCode,
            entryDate: LuxonDateTime.now().toISODate(),
            file: reservation.file,
            group: reservation.group,
            note: reservation.note,
            idReservationType: reservation.reservationType,
            passengersQuantity: reservation.quantity,
            idCurrency: 'USD',
            idContact: user?.idUser,
            idEntity: user?.idEntity,
            idOu: user?.idOu,
            idUserCreate: user?.idUser,
          },
        },
      })

      if (response.data === null || response.data === undefined) {
        // eslint-disable-next-line no-alert
        window.alert('Error creating reservation')
        return
      }

      const reservationId = response.data.createReservation.idReservation

      itinerary.forEach(async (item, index) => {
        const responses = await Promise.all([
          createReservationItem({
            variables: {
              input: {
                dateStart: item.product.date,
                dateEnd: item.product.date,
                idProduct: item.product.productId,
                idProductInstance: item.product.productInstanceId,
                idReservation: reservationId,
                item: index + 2 + 1,
                idRate: item.product.rateId,
                idRateInstance: item.product.rateInstanceId,
                quantity: item.quantity,
                unitPriceUSD: item.product.sellingPrice,
                totalPriceUSD: item.quantity * item.product.sellingPrice,
                totalPayedUSD: 0,
                idOu: user?.idOu,
                idUserCreate: user?.idUser,
              },
            },
          }),
          createReservationItem({
            variables: {
              input: {
                dateStart: item.profit.date,
                dateEnd: item.profit.date,
                idProduct: item.profit.productId,
                idProductInstance: item.profit.productInstanceId,
                idReservation: reservationId,
                item: index + 2 + 1,
                idRate: item.profit.rateId,
                idRateInstance: item.profit.rateInstanceId,
                quantity: item.quantity,
                unitPriceUSD: item.profit.sellingPrice,
                totalPriceUSD: item.quantity * item.profit.sellingPrice,
                totalPayedUSD: 0,
                idOu: user?.idOu,
                idUserCreate: user?.idUser,
              },
            },
          }),
        ])

        const reservationItemId = responses[0].data?.createReservationItem.idReservationItem

        await createInventoryTransaction({
          variables: {
            createInventoryTransactionInput: {
              idProductInstance: item.product.productInstanceId,
              date: LuxonDateTime.now().toISODate(),
              credit: 0,
              debit: item.quantity,
              idReservation: reservationId,
              idReservationItem: reservationItemId,
              note: '',
              idInventoryTransactionType: debitTransactionType.idGeneralParameterValue,
              idOu: user?.idOu,
              idUserCreate: user?.idUser,
            },
          },
        })
      })
      // eslint-disable-next-line no-alert
      window.alert('Reservation created successfully')

      await router.push(paths.reservations.root)
    } catch {
      // eslint-disable-next-line no-alert
      window.alert("Couldn't create reservation")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ViewLayout>
      <h1>Reservation Management</h1>
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
        ]}
      />

      <ReservationTable
        reservation={reservation}
        setReservation={setReservation}
        isEditing
        prevValues={prevValues as UseReservationProps}
        totalPrice={
          itinerary.length === 0
            ? 0
            : itinerary.reduce((acc, item) => acc + item.quantity * item.product.sellingPrice, 0)
        }
      />

      {reservation !== null && (
        <>
          <ItineraryTable data={itinerary} handleRemoveFromItinerary={removeFromItinerary} />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<AddIcon />}
              style={{ marginTop: '16px' }}
              onClick={saveReservationData}
              disabled={itinerary.length === 0 || isSubmitting}
            >
              Generate Reservation
            </Button>
          </div>

          <SearchProductSection
            handleAddToItinerary={addToItinerary}
            quantity={reservation.quantity}
          />
        </>
      )}
    </ViewLayout>
  )
}

export default ReservationForm
