interface GeneralParametersValue {
  idGeneralParameterValue?: string
  idOu?: string
  name: string
  shortName: string
  code: string
  value?: string | null | undefined
  type?: string | null | undefined
}

export interface GeneralParameterValueParent {
  label: string
  value: string
}

export interface FormDataGeneralParameters {
  name: string
  shortName: string
  code: string
  parentParameter: GeneralParameterValueParent
  generalParametersValues: GeneralParametersValue[]
  idGeneralParameter?: string
  idOu?: string
}
