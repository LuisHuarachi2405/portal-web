import { useFieldArray, useForm } from 'react-hook-form'

import { FormDataGeneralParameters } from '../types/form.types'
import { generalParametersFormResolver } from '../utils/general-parameters-form-resolver'

export const defaultValues: FormDataGeneralParameters = {
  idGeneralParameter: '',
  name: '',
  shortName: '',
  code: '',
  parentParameter: { label: '', value: '' },
  generalParametersValues: [
    {
      idGeneralParameterValue: undefined,
      idOu: undefined,
      name: '',
      shortName: '',
      code: '',
      value: '',
    },
  ],
}

export type UseGeneralParameterFormExtraProps = {
  prevValues?: Partial<FormDataGeneralParameters>
}

export const useGeneralParametersForm = ({ prevValues }: UseGeneralParameterFormExtraProps) => {
  const generalParametersForm = useForm<FormDataGeneralParameters>({
    defaultValues: prevValues || defaultValues,
    resolver: generalParametersFormResolver,
    mode: 'onSubmit',
  })

  const generalParameterValuesForm = useFieldArray({
    control: generalParametersForm.control,
    name: 'generalParametersValues',
  })

  const addGeneralParameterValues = () => {
    generalParameterValuesForm.append({ ...defaultValues.generalParametersValues[0] })
  }

  const removeGeneralParameterValues = (index: number) => {
    generalParameterValuesForm.remove(index)
  }

  return {
    generalParametersForm,
    generalParameterValuesForm,
    addGeneralParameterValues,
    removeGeneralParameterValues,
  }
}
