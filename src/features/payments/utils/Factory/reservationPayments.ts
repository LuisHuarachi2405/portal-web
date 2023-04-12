/* eslint-disable class-methods-use-this */
import { IReservationsPayments } from '../../types/reservationsPayments'
import { sub } from '../numbers'

export class ReservationsPaymentsFactory {
  create(reservation: any): IReservationsPayments {
    return {
      idReservation: reservation.idReservation,
      idReservationItem: reservation.item.idReservationItem,
      amountTotal: 0,
      item: reservation.itemNumber,
      pendingPayment: Number(sub(reservation.item?.totalPriceUSD, reservation.item?.totalPayedUSD)),
      idPaymentPercent: reservation.idReservation,
      valuePaymentPercent: 0,
      paymentAmount: Number(reservation.TOTAL_TO_PAY),
    }
  }
}
