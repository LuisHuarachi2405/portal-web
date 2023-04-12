import { GridColDef } from '@mui/x-data-grid'

import { GeneralParameterValue } from '@/shared/graphql/generated/rates-api'
import { ProductCategory } from '@/shared/graphql/generated/products-api'

import { RatesFeaturesTableActions } from '../components/features/rates-features-table-actions'

export const useBuildRatesFeaturesColumns = ({
  listTypesRateFeature,
  listCategories,
}: {
  listTypesRateFeature: GeneralParameterValue[]
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
      field: 'idRateFeatureType',
      headerName: 'Feature Type',
      renderCell: (params) => {
        const typeRateFeatureValue = listTypesRateFeature.find(
          (typeRateFeature) => typeRateFeature.idGeneralParameterValue === params.value
        )
        return <p>{typeRateFeatureValue?.name}</p>
      },
      flex: 1,
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
      renderCell: ({ row }) => <RatesFeaturesTableActions row={row} />,
    },
  ]

  return { columns }
}
