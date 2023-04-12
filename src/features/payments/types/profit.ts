export interface Profit {
  idReservation?: string
  code?: string
  entryDate?: string
  note?: string
  totalPriceUSD?: null
  idStatus?: string
  idEntity?: string
  item?: Item
}
export interface Item {
  __typename?: string
  idReservationItem?: string
  idOu?: string
  idReservation?: string
  item?: number
  dateStart?: string
  dateEnd?: string
  idProduct?: string
  product?: Product
  idProductInstance?: null
  productInstance?: null
  idRate?: string
  rate?: Rate
  idRateInstance?: string
  rateInstance?: RateInstance
  unitPriceUSD?: number
  unitPricePEN?: number
  quantity?: number
  totalPriceUSD?: number
  totalPricePEN?: number
  totalPayedUSD?: number
  totalPayedPEN?: number
  idStatus?: string
  idUserCreate?: string
  createdAt?: string
  idUserUpdate?: string
  updatedAt?: string
}
export interface Product {
  __typename?: string
  idProduct?: string
  idOu?: string
  code?: string
  barCode?: string
  name?: string
  shortName?: string
  idEntitySupplier?: string
  inventoryFlag?: string
  unitSunat?: string
  internationalCodeSunat?: string
  productTypeSunat?: string
  operationalCodeSunat?: string
}
export interface Rate {
  __typename?: string
  idRate?: string
  idOu?: string
  idRateType?: string
  code?: string
  description?: string
}
export interface RateInstance {
  __typename?: string
  idRateInstance?: string
  idOu?: string
  idRate?: string
  startDate?: string
  endDate?: string
  idProduct?: string
  idProductInstance?: null
  idEntity?: null
  idChannel?: null
  idMarket?: null
  idBusiness?: null
  taxesPercentage?: number
  purchasePrice1?: number
  profitPercentage1?: number
  profitAmount1?: null
  sellingValue1?: number
  taxesAmount1?: number
  sellingPrice1?: number
  purchasePrice2?: null
  profitPercentage2?: null
  profitAmount2?: null
  sellingValue2?: null
  taxesAmount2?: null
  sellingPrice2?: null
  idRelatedRateInstance?: string
}
