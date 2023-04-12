export interface RateFeatureFormValues {
  idProductCategory: string
  idRateFeatureType: string
  code: string
  shortName: string
  name: string
}

export interface RateSubfeatureFormValues {
  idProductCategory: string
  idRateSubFeatureType: string
  code: string
  name: string
  shortName: string
  rateSubFeatureItem: SubfeatureItem[]
}

export interface SubfeatureItem {
  idRateSubFeatureItem?: string
  idRateSubFeatureItemType: string
  code: string
  name: string
  shortName: string
}

export interface RateFormValues {
  idRate?: string
  idRateType: string
  code: string
  description: string
  startDate: string
  endDate: string
}
