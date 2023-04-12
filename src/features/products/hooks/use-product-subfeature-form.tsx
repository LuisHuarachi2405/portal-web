import { useFieldArray, useForm } from 'react-hook-form'

import { SubfeatureFormValues, SubfeatureItemFormValues } from '../types/products-forms.types'
import { productSubfeatureFormResolver } from '../utils/product-subfeature-form-resolver'

const productSubfeatureItemFormDefaultValues: SubfeatureItemFormValues = {
  id: null,
  code: '',
  name: '',
  shortName: '',
  value: '',
  productSubfeatureItemType: '',
}

const productSubfeatureFormDefaultValues: SubfeatureFormValues = {
  code: '',
  name: '',
  shortName: '',
  productSubfeatureType: '',
  items: [{ ...productSubfeatureItemFormDefaultValues }],
}

export const useProductSubfeatureForm = (initialValues?: SubfeatureFormValues) => {
  const subfeatureForm = useForm<SubfeatureFormValues>({
    resolver: productSubfeatureFormResolver,
    defaultValues: initialValues ?? productSubfeatureFormDefaultValues,
  })

  const subfeatureItemForm = useFieldArray({
    name: 'items',
    control: subfeatureForm.control,
  })

  const appendSubfeatureItemForm = () => {
    subfeatureItemForm.append({ ...productSubfeatureItemFormDefaultValues })
  }

  const removeSubfeatureItemForm = (index: number) => {
    subfeatureItemForm.remove(index)
  }

  return {
    subfeatureForm,
    subfeatureItemForm,
    appendSubfeatureItemForm,
    removeSubfeatureItemForm,
  }
}
