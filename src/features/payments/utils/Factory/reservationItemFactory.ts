/* eslint-disable class-methods-use-this */
import { IReservationItems, ReservationItem } from '../../types/reservationItems'

export class ReservationItemFactory {
  create(reservationItem: any[]): IReservationItems[] {
    const itemsFinal: Array<IReservationItems> = []
    reservationItem.forEach((reservation) => {
      const reservationsItems = reservation.reservationItem
      if (reservationsItems?.length > 0) {
        reservationsItems.forEach((itemReservation: ReservationItem) => {
          itemsFinal.push({
            idReservation: reservation.idReservation,
            code: reservation.code,
            entryDate: reservation.entryDate,
            note: reservation.note,
            totalPriceUSD: reservation.totalPriceUSD,
            idStatus: reservation.idStatus,
            idEntity: reservation.idEntity,
            item: {
              ...itemReservation,
            },
          })
        })
      }
    })
    return itemsFinal
  }
}
