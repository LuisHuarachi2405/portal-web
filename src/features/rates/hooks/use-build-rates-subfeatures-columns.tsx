import { GridColDef } from '@mui/x-data-grid'

import { GeneralParameterValue } from '@/shared/graphql/generated/general-parameters-api'
import { ProductCategory } from '@/shared/graphql/generated/products-api'

import { RatesSubfeaturesTableActions } from '../components/subfeatures/rates-subfeatures-table-actions'

export const useBuildRatesSubfeaturesColumns = ({
  listTypesRateSubFeature,
  listCategories,
}: {
  listTypesRateSubFeature: GeneralParameterValue[]
  listCategories: ProductCategory[]
}) => {
  const columns: GridColDef[] = [
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
      field: 'idRateSubFeatureType',
      headerName: 'Subfeature Type',
      flex: 1,
      renderCell: (params) => {
        const typeRateSubFeatureValue = listTypesRateSubFeature.find(
          (typeRateSubFeature) => typeRateSubFeature.idGeneralParameterValue === params.value
        )
        return <p>{typeRateSubFeatureValue?.name}</p>
      },
    },
    {
      field: 'idProductCategory',
      headerName: 'Product Category',
      renderCell: (params) => {
        const productCategoryValue = listCategories.find(
          (productCategory) => productCategory.idProductCategory === params.value
        )
        return <p>{productCategoryValue?.name}</p>
      },
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => <RatesSubfeaturesTableActions row={row} />,
    },
  ]

  return { columns }
}
