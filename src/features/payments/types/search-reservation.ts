export interface SearchReservations {
  skip: number
  take: number
  reservationCode?: string
  reservationID?: string
  date?: string
  fileNumber?: string
  entity?: string
}
