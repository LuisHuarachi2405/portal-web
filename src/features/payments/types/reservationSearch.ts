export interface ReservationSearch {
  __typename: string
  idReservation: string
  idOu: string
  idEntity: string
  code: string
  file: string
  note: string
  entryDate: string
  idReservationType: string
  passengersQuantity: number
  idContact: string
  totalPriceUSD?: null
  totalPricePEN?: null
  totalPayedUSD: number
  totalPayedPEN?: null
  idStatus: string
  idUserCreate: string
  createdAt: string
  idUserUpdate: string
  updatedAt: string
  reservationItem?: ReservationItemEntity[] | null
}
export interface ReservationItemEntity {
  __typename: string
  idReservationItem: string
  idOu: string
  idReservation: string
  item: number
  dateStart: string
  dateEnd: string
  idProduct: string
  product: Product
  idProductInstance?: string | null
  productInstance?: ProductInstance | null
  idRate: string
  rate: Rate
  idRateInstance: string
  rateInstance: RateInstance
  unitPriceUSD: number
  unitPricePEN: number
  quantity: number
  totalPriceUSD: number
  totalPricePEN: number
  totalPayedUSD: number
  totalPayedPEN: number
  idStatus: string
  idUserCreate: string
  createdAt: string
  idUserUpdate: string
  updatedAt: string
}
export interface Product {
  __typename: string
  idProduct: string
  idOu: string
  code: string
  barCode: string
  name: string
  shortName: string
  idEntitySupplier: string
  inventoryFlag: string
  unitSunat: string
  internationalCodeSunat: string
  productTypeSunat: string
  operationalCodeSunat: string
}
export interface ProductInstance {
  __typename: string
  idProductInstance: string
  idOu: string
  idProduct: string
}
export interface Rate {
  __typename: string
  idRate: string
  idOu: string
  idRateType: string
  code: string
  description: string
}
export interface RateInstance {
  __typename: string
  idRateInstance: string
  idOu: string
  idRate: string
  startDate: string
  endDate: string
  idProduct: string
  idProductInstance?: string | null
  idEntity?: null
  idChannel?: string | null
  idMarket?: string | null
  idBusiness?: string | null
  taxesPercentage: number
  purchasePrice1: number
  profitPercentage1: number
  profitAmount1?: null
  sellingValue1: number
  taxesAmount1: number
  sellingPrice1: number
  purchasePrice2?: null
  profitPercentage2?: null
  profitAmount2?: null
  sellingValue2?: null
  taxesAmount2?: null
  sellingPrice2?: null
  idRelatedRateInstance?: string | null
}
