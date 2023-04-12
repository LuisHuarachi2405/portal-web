import { ReservationRepoDocument } from '@/shared/graphql/generated/reservations-api'

import { ReservationFormValues } from '../hooks/use-reservation-form'

export type ReservationData =
  | ({ reservationCode: string; quantity: number } & Omit<ReservationFormValues, 'quantity'>)
  | null

export interface ProductData {
  rateInstanceId: string
  relatedRateInstanceId: string | null
  rateId: string
  sellingPrice: number
  inventoryId: string
  productId: string
  productInstanceId: string
  date: string
  code: string
  name: string
  productFeatures: (string | undefined)[]
  productSubfeatureItems: (string | undefined)[]
  rateFeatures: (string | undefined)[]
  rateSubFeatureItems: (string | undefined)[]
}

export interface ProfitData {
  rateInstanceId: string
  relatedRateInstanceId: string | null
  rateId: string
  sellingPrice: number
  inventoryId: string
  productId: string
  productInstanceId: string
  date: string
}

export type Product = {
  id: string
  product: ProductData
  profit: ProfitData
  quantity: number
}

export type ItineraryItem = {
  id: string
  product: ProductData
  profit: ProfitData
  quantity: number
}

export interface FormModalState {
  open: boolean
  itemToEdit: ReservationRepoDocument | null
}

export interface DeleteConfirmState {
  open: boolean
  idItemToDelete: string | null
}
