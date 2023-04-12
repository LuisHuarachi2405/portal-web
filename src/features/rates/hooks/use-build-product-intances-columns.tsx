import { GridColDef } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'

import { ProductInstance } from '@/shared/graphql/generated/products-api'

import { RatesProductInstanceTableActions } from '../components/rates-table-product-instances-actions'
import { FormModalState } from '../types/shared.types'

export const useBuildProductIntancesColumns = ({
  setProductInstanceSelected,
  setFormModalState,
}: {
  setProductInstanceSelected: Dispatch<SetStateAction<ProductInstance>>
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
}) => {
  const columnsProductIntances: GridColDef[] = [
    {
      field: 'productSubFeatureItem1',
      headerName: 'Subfeature Item 1',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem2',
      headerName: 'Subfeature Item 2',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem3',
      headerName: 'Subfeature Item 3',
      flex: 1,
    },

    {
      field: 'productSubFeatureItem4',
      headerName: 'Subfeature Item 4',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem5',
      headerName: 'Subfeature Item 5',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem6',
      headerName: 'Subfeature Item 6',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem7',
      headerName: 'Subfeature Item 7',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem8',
      headerName: 'Subfeature Item 8',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem9',
      headerName: 'Subfeature Item 9',
      flex: 1,
    },
    {
      field: 'productSubFeatureItem10',
      headerName: 'Subfeature Item 10',
      flex: 1,
    },
    {
      field: 'subFeatures',
      headerName: 'Subfeatures',
      valueGetter: () => 'Not Subfeatures Items',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <RatesProductInstanceTableActions
          setProductInstanceSelected={setProductInstanceSelected}
          setFormModalState={setFormModalState}
          row={row}
        />
      ),
    },
  ]

  return { columnsProductIntances }
}
