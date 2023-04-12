/* Products Form */

export interface ProductFormValues {
  code: string
  name: string
  shortName: string
  productType: string
  supplier: string
  hasInventory: string
  internationalCodeSunat: string
  operationalCodeSunat: string
  productTypeSunat: string
  unitSunat: string
}

export interface ProductCategoryFormValues {
  productCategory: string
}

export interface ProductFeatureFormValues {
  productFeature: string
  value: string
}

export interface ProductIdentificationFormValues {
  value: string
  identificationType: string
}

export interface ProductSubfeatureItemFormValues {
  productSubfeature: string
}

/* Products Form */

export interface FeatureFormValues {
  name: string
  shortName: string
  productCategory: string
  featureType: string
}

export interface CategoryFormValues {
  name: string
  shortName: string
  categoryType: string
}

/* Product Subfeature Form */

export interface SubfeatureItemFormValues {
  id: string | null
  code: string
  name: string
  shortName: string
  value: string
  productSubfeatureItemType: string
}

export interface SubfeatureFormValues {
  code: string
  name: string
  shortName: string
  productCategory: string
  productSubfeatureType: string
  items: SubfeatureItemFormValues[]
}
/* Product Subfeature Form */

/* Instances Form */

export interface InstanceFormValues {
  productSubfeatureItem1: string
  productSubfeatureItem2: string
  productSubfeatureItem3: string
  productSubfeatureItem4: string
  productSubfeatureItem5: string
  productSubfeatureItem6: string
  productSubfeatureItem7: string
  productSubfeatureItem8: string
  productSubfeatureItem9: string
  productSubfeatureItem10: string
}

export interface InstanceInventoryFormValues {
  date: string
  inventoryTransactionType: string
  note: string
  credit: number
  debit: number
}

/* Instances Form */
