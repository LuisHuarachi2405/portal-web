import { useForm, useFieldArray } from 'react-hook-form'

import { productFormResolver } from '../utils/product-form-resolver'
import {
  ProductCategoryFormValues,
  ProductFeatureFormValues,
  ProductFormValues,
  ProductIdentificationFormValues,
} from '../types/products-forms.types'

const categoryFormDefaultValues: ProductCategoryFormValues = {
  productCategory: '',
}

const featureFormDefaultValues: ProductFeatureFormValues = {
  productFeature: '',
  isInventory: '',
}

const identificationFormDefaultValues: ProductIdentificationFormValues = {
  value: '',
  identificationType: '',
}

const productFormDefaultValues: ProductFormValues = {
  code: '',
  name: '',
  shortName: '',
  productType: '',
  supplier: '',
  categories: [{ ...categoryFormDefaultValues }],
  features: [{ ...featureFormDefaultValues }],
  identifications: [{ ...identificationFormDefaultValues }],
}

export const useProductForm = () => {
  const productForm = useForm<ProductFormValues>({
    defaultValues: productFormDefaultValues,
    resolver: productFormResolver,
  })

  const categoryForm = useFieldArray({
    name: 'categories',
    control: productForm.control,
  })

  const featureForm = useFieldArray({
    name: 'features',
    control: productForm.control,
  })

  const identificationForm = useFieldArray({
    name: 'identifications',
    control: productForm.control,
  })

  const appendCategoryForm = () => {
    categoryForm.append({ ...categoryFormDefaultValues })
  }

  const removeCategoryForm = (index: number) => {
    categoryForm.remove(index)
  }

  const appendFeatureForm = () => {
    featureForm.append({ ...featureFormDefaultValues })
  }

  const removeFeatureForm = (index: number) => {
    featureForm.remove(index)
  }

  const appendIdentificationForm = () => {
    identificationForm.append({ ...identificationFormDefaultValues })
  }

  const removeIdentificationForm = (index: number) => {
    identificationForm.remove(index)
  }

  return {
    productForm,
    categoryForm,
    featureForm,
    identificationForm,
    appendCategoryForm,
    appendFeatureForm,
    removeCategoryForm,
    removeFeatureForm,
    appendIdentificationForm,
    removeIdentificationForm,
  }
}
