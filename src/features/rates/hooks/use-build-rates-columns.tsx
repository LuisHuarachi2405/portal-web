import { GridColDef } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'

import { GeneralParameterValue } from '@/shared/graphql/generated/general-parameters-api'

import { RatesTableActions } from '../components/rates-table-actions'
import { FormModalState } from '../types/shared.types'

export const useBuildRatesColumns = ({
  listTypesRate,
  setFormModalState,
}: {
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
  listTypesRate: GeneralParameterValue[]
}) => {
  const columnsRates: GridColDef[] = [
    {
      field: 'code',
      editable: true,
      headerName: 'Code',
      flex: 1,
    },
    {
      field: 'idRateType',
      editable: true,
      headerName: 'Rate Type',
      flex: 1,
      renderCell: (params) => {
        const productCategoryValue = listTypesRate.find(
          (typeRate) => typeRate.idGeneralParameterValue === params.value
        )
        return <p>{productCategoryValue?.name}</p>
      },
    },
    {
      field: 'description',
      editable: true,
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <RatesTableActions setFormModalState={setFormModalState} row={row} />
      ),
    },
  ]
  return { columnsRates }
}
