import { GridColDef } from '@mui/x-data-grid'

import { GeneralParameterValue } from '@/shared/graphql/generated/general-parameters-api'

export const useBuildProductSelectColumns = ({
  listTypesProduct,
}: {
  listTypesProduct: GeneralParameterValue[]
}) => {
  const columnsProductSelect: GridColDef[] = [
    {
      field: 'code',
      headerName: 'Code',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'shortName',
      headerName: 'Short Name',
      flex: 1,
    },
    {
      field: 'idProductType',
      headerName: 'Product Type',
      flex: 1,
      renderCell: (params) => {
        const typeRateFeatureValue = listTypesProduct.find(
          (typeProduct) => typeProduct.idGeneralParameterValue === params.value
        )
        return <p>{typeRateFeatureValue?.name}</p>
      },
    },
  ]

  return { columnsProductSelect }
}
