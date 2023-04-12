/* Products Form */

export interface ProductCategoryFormValues {
  productCategory: string
}

export interface ProductFeatureFormValues {
  productFeature: string
  isInventory: string
}

export interface ProductIdentificationFormValues {
  value: string
  identificationType: string
}

export interface ProductFormValues {
  code: string
  name: string
  shortName: string
  productType: string
  supplier: string
  categories: ProductCategoryFormValues[]
  features: ProductFeatureFormValues[]
  identifications: ProductIdentificationFormValues[]
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
  productSubfeatureType: string
  items: SubfeatureItemFormValues[]
}
/* Product Subfeature Form */
