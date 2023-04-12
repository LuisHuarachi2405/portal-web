/* eslint-disable class-methods-use-this */
import { GeneralParameterFormatter } from '../types/general-parameter-formatter'

export class GeneralParametersFormatters {
  private generalParametersFormatter: any

  constructor(private resultGeneralParameters: Array<any>) {
    this.mergeGeneralParameterArray()
  }

  mergeGeneralParameterArray = () => {
    this.generalParametersFormatter =
      this.resultGeneralParameters.reduce(
        (current: any, next: any) => [...current, ...this.formatDataGeneralParameters(next)],
        []
      ) || []
  }

  getGeneralParameters() {
    return this.generalParametersFormatter
  }

  formatDataGeneralParameters = (next: any) =>
    (next.generalParameterValue.map(
      (e: any) =>
        ({
          id: next?.idGeneralParameter,
          idValue: e.idGeneralParameterValue,
          name: e.name,
          shortName: e.shortName,
          code: e.code,
          codeParent: next?.code,
          value: e.value,
        } as GeneralParameterFormatterParent)
    ) as Array<GeneralParameterFormatterParent>) || []

  searchByCodeInGeneralParametersFormats = (columnName: string) =>
    (this.getGeneralParameters()?.find(
      (a: { code: string }) => a.code === columnName
    ) as GeneralParameterFormatterParent) || null

  searchByIdInGeneralParametersFormats = (columnName: string) =>
    this.getGeneralParameters()?.find((a: { idValue: string }) => a.idValue === columnName)

  searchByCodeParentInGeneralParametersFormats = (columnName: string) =>
    (this.getGeneralParameters()?.filter(
      (a: { codeParent: string }) => a.codeParent === columnName
    ) as Array<GeneralParameterFormatterParent>) || []

  searchByCodeArrayInGeneralParametersFormats = (columnNameArray: Array<string>) =>
    (this.getGeneralParameters()?.filter((a: { code: string }) =>
      columnNameArray.includes(a.code)
    ) as Array<GeneralParameterFormatterParent>) || []
}

export interface GeneralParameterFormatterParent extends GeneralParameterFormatter {
  idParent?: string
  codeParent?: string
  value?: string
}
