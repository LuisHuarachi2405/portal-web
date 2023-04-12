import { GridColDef, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'

import { GeneralParameterValue } from '@/shared/graphql/generated/general-parameters-api'
import { RateSubFeature, RateSubFeatureItem } from '@/shared/graphql/generated/rates-api'

import { RateInstancesTableActions } from '../components/instances/rates-table-rate-instances-actions'
import { renderSelectEditInputCell } from '../components/instances/rates-instances-select-row'

export const useBuildRatesInstancesColumns = ({
  setRowModesModel,
  rowModesModel,
  listTaxes,
  listMarkets,
  listChannels,
  listBusinessType,
  listRatesSubfeature,
  listRatesSubfeatureItems,
}: {
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>
  rowModesModel: GridRowModesModel
  listTaxes: GeneralParameterValue[]
  listMarkets: GeneralParameterValue[]
  listChannels: GeneralParameterValue[]
  listBusinessType: GeneralParameterValue[]
  listRatesSubfeature: RateSubFeature[]
  listRatesSubfeatureItems: RateSubFeatureItem[]
}) => {
  const columnsRatesInstances: GridColDef[] = [
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 150,
      type: 'dateTime',
      renderCell: (params) => {
        const date = new Date(params.value)
        return <p>{date.toLocaleDateString('en-US') ?? ''}</p>
      },
    },
    {
      field: 'endDate',
      type: 'date',
      headerName: 'End Date',
      width: 150,
      renderCell: (params) => {
        const date = new Date(params.value)
        return <p>{date.toLocaleDateString('en-US') ?? ''}</p>
      },
    },
    {
      field: 'idEntity',
      headerName: 'Entity',
      width: 170,
    },
    {
      field: 'idChannel',
      headerName: 'Channel',
      width: 170,
      renderCell: (params) => {
        const channelValue = listChannels.find(
          (channel) => channel.idGeneralParameterValue === params.value
        )
        return <p>{channelValue?.name}</p>
      },
    },
    {
      field: 'idBusiness',
      headerName: 'Business Type',
      width: 170,
      renderCell: (params) => {
        const businessTypeValue = listBusinessType.find(
          (businessType) => businessType.idGeneralParameterValue === params.value
        )
        return <p>{businessTypeValue?.name}</p>
      },
    },
    {
      field: 'idMarket',
      headerName: 'Market',
      width: 170,
      renderCell: (params) => {
        const marketValue = listMarkets.find(
          (market) => market.idGeneralParameterValue === params.value
        )
        return <p>{marketValue?.name}</p>
      },
    },
    {
      field: 'idRateFeature1',
      headerName: 'Rate Feature 1',
      width: 170,
    },
    {
      field: 'idRateFeature2',
      headerName: 'Rate Feature 2',
      width: 150,
    },
    {
      field: 'idRateFeature3',
      headerName: 'Rate Feature 3',
      width: 150,
    },
    {
      field: 'idRateFeature4',
      headerName: 'Rate Feature 4',
      width: 150,
    },
    {
      field: 'idRateFeature5',
      headerName: 'Rate Feature 5',
      width: 150,
    },
    {
      field: 'idRateFeature6',
      headerName: 'Rate Feature 6',
      width: 150,
    },
    {
      field: 'idRateFeature7',
      headerName: 'Rate Feature 7',
      width: 150,
    },
    {
      field: 'idRateFeature8',
      headerName: 'Rate Feature 8',
      width: 150,
    },
    {
      field: 'idRateFeature9',
      headerName: 'Rate Feature 9',
      width: 150,
    },
    {
      field: 'idRateFeature10',
      headerName: 'Rate Feature 10',
      width: 170,
    },
    {
      field: 'idRateSubFeature1',
      headerName: 'Rate SubFeature 1',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem1',
      headerName: 'Rate SubFeature Item 1',
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature2',
      headerName: 'Rate SubFeature 2',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem2',
      headerName: 'Rate SubFeature Item 2',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature3',
      headerName: 'Rate SubFeature 3',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem3',
      headerName: 'Rate SubFeature Item 3',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature4',
      headerName: 'Rate SubFeature 4',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem4',
      headerName: 'Rate SubFeature Item 4',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature5',
      headerName: 'Rate SubFeature 5',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem5',
      headerName: 'Rate SubFeature Item 5',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature6',
      headerName: 'Rate SubFeature 6',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem6',
      headerName: 'Rate SubFeature Item 6',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature7',
      headerName: 'Rate SubFeature 7',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem7',
      headerName: 'Rate SubFeature Item 7',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature8',
      headerName: 'Rate SubFeature 8',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem8',
      headerName: 'Rate SubFeature Item 8',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature9',
      headerName: 'Rate SubFeature 9',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem9',
      headerName: 'Rate SubFeature Item 9',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeature10',
      headerName: 'Rate SubFeature 10',
      width: 170,
      renderCell: (params) => {
        const rateSubfeatureValue = listRatesSubfeature.find(
          (rateSubfeature) => rateSubfeature.idRateSubFeature === params.value
        )
        return <p>{rateSubfeatureValue?.name}</p>
      },
    },
    {
      field: 'idRateSubFeatureItem10',
      headerName: 'Rate SubFeature 10',
      width: 150,
      renderCell: (params) => {
        const rateSubfeatureItemValue = listRatesSubfeatureItems.find(
          (rateSubfeatureItem) => rateSubfeatureItem.idRateSubFeatureItem === params.value
        )
        return <p>{rateSubfeatureItemValue?.name}</p>
      },
    },
    {
      field: 'taxesPercentage',
      headerName: 'Taxes Percentage',
      width: 150,
      editable: true,
      type: 'number',
      renderCell: (params) => <p>{params.value}</p>,
      renderEditCell: (params) => renderSelectEditInputCell({ params, listTaxes }),
    },
    {
      field: 'purchasePrice1',
      headerName: 'Purcharse Price USD',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'profitPercentage1',
      headerName: 'Profit % USD',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'profitAmount1',
      headerName: 'Profit USD',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'sellingValue1',
      headerName: 'Selling Value USD',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'taxesAmount1',
      headerName: 'Taxes USD',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'sellingPrice1',
      headerName: 'Selling Price USD',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'sellingPrice2',
      headerName: 'Selling Price SOL',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'purchasePrice2',
      headerName: 'Purchase Price 2',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'profitPercentage2',
      headerName: 'Profit % SOL',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'profitAmount2',
      headerName: 'Profit SOL',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'sellingValue2',
      headerName: 'Selling Value SOL',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'taxesAmount2',
      headerName: 'Taxes SOL',
      type: 'number',
      width: 130,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      width: 180,
      renderCell: ({ row }) => {
        const isInEditMode = rowModesModel[row.idRateInstance]?.mode === GridRowModes.Edit

        return (
          <RateInstancesTableActions
            row={row}
            isInEditMode={isInEditMode}
            setRowModesModel={setRowModesModel}
            rowModesModel={rowModesModel}
          />
        )
      },
    },
  ]
  return { columnsRatesInstances }
}
