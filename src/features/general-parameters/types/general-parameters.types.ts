export interface GeneralParameterValue {
  idGeneralParameterValue?: string
  idOu: string
  name: string
  shortname: string
  code: string
  value?: string
  type?: string
  idUserCreate?: string
  idUserUpdate?: string
  createdAt: string
  updatedAt: string
}

export interface GeneralParameters {
  idGeneralParameter: string
  name: string
  shortname: string
  code: string
  generalParameterValue: GeneralParameterValue[]
  idUserCreate?: string
  idUserUpdate?: string
  idOu?: string
}

export interface GetGeneralParametersQueryData {
  generalParameters: GeneralParameters[]
}

export interface GerGeneralParameterByIdQueryData {
  generalParameter: GeneralParameters
}
