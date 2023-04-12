import { ReservationItemFactory } from '../../utils/Factory/reservationItemFactory'

export const useBuildReservationGenerateRows = (reservationByEntityData: any) => {
  let dataReservations =
    reservationByEntityData?.reservations?.data ||
    reservationByEntityData?.reservationsByFilter?.data ||
    []

  let rowsReservationByEntity = new ReservationItemFactory().create(dataReservations)

  let reservationItem = rowsReservationByEntity.filter(
    (items) => items.item.rateInstance.idRelatedRateInstance === null
  )

  let profit = rowsReservationByEntity.filter(
    (items) => items.item.rateInstance.idRelatedRateInstance != null
  )

  let reservations = dataReservations

  const setDefaultData = () => {
    dataReservations = []
    rowsReservationByEntity = []
    reservationItem = []
    profit = []
    reservations = []
  }

  return { profit, reservationItem, reservations, setDefaultData }
}
