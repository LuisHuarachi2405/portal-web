interface EntityDirectionValues {
  idCountry: string
  line1: string
  line2: string
  idState: string
  idProvince: string
  postalCode: string
  idAddressType: string
}

interface EntityContactValues {
  idContactType: string
  value: string
}

interface EntityIdType {
  idEntityIdType?: string
  value?: string
}

export interface FormDataEntity {
  idEntity?: string
  entityType?: string
  role?: string
  name?: string
  commercialName?: string
  idEntityIdType?: EntityIdType
  entityDirectionValues?: EntityDirectionValues[]
  entityContactValues?: EntityContactValues[]
  market?: String
  businessType?: string
  channel?: string
  industry?: string
}
