export interface IReservationsPayments {
  idReservation: string
  idReservationItem: string
  amountTotal: number
  item: string
  pendingPayment: number
  idPaymentPercent: string
  valuePaymentPercent: number
  paymentAmount: number
}
