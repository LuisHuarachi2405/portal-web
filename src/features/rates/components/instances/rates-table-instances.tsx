import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { GridRowModesModel } from '@mui/x-data-grid'

import { DataTable } from '@/shared/components/data-table/data-table'
import {
  GetRateInstancesByProductDocument,
  Rate,
  RateInstance,
  useGetRateInstancesByProductQuery,
  useGetRateSubFeatureItemsQuery,
  useGetRateSubFeaturesQuery,
  useUpdateRateInstanceMutation,
} from '@/shared/graphql/generated/rates-api'
import { Product, ProductInstance } from '@/shared/graphql/generated/products-api'

import { useBuildRatesInstancesColumns } from '../../hooks/use-build-rates-instance-columns'

interface RateInstancesTableProps {
  productSelected: Product
  productInstanceSelected: ProductInstance
  rateSelected: Rate
  dataGeneralParameters: Record<string, []>
}

interface RatesPricesValues {
  purchasePrice: number
  profitPercentage: number
  profitAmount: number
  taxesPercentage: number
}

const PAGE_SIZE = 10

export const RateInstancesTable: FC<RateInstancesTableProps> = (props) => {
  const { productInstanceSelected, productSelected, rateSelected, dataGeneralParameters } = props
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
  const [currentPage, setCurrentPage] = useState(0)

  const { data: dataRateSubfeatures } = useGetRateSubFeaturesQuery({
    fetchPolicy: 'cache-and-network',
  })

  const { data: dataRateSubfeaturesItems } = useGetRateSubFeatureItemsQuery({
    fetchPolicy: 'cache-and-network',
  })

  const listRatesSubfeature = dataRateSubfeatures?.getRateSubFeatures ?? []
  const listRatesSubfeatureItems = dataRateSubfeaturesItems?.getRateSubFeatureItems ?? []
  const listTaxes = dataGeneralParameters.taxes ?? []
  const listMarkets = dataGeneralParameters.market ?? []
  const listChannels = dataGeneralParameters.channel ?? []
  const listBusinessType = dataGeneralParameters.businessType ?? []

  function calculateValuesPrices({
    purchasePrice,
    profitPercentage,
    profitAmount,
    taxesPercentage,
  }: RatesPricesValues) {
    const purcharsePriceValue = purchasePrice
    const profitPercentageValue = profitPercentage
    const profitAmountValue = profitAmount
    const IGV = taxesPercentage / 100

    const profitValue = profitPercentageValue
      ? purcharsePriceValue * (profitPercentageValue / 100)
      : profitAmountValue

    const sellingValue = purcharsePriceValue + profitValue

    const taxesAmount = sellingValue * IGV
    const sellingPrice = sellingValue + taxesAmount

    return { sellingValue, taxesAmount, sellingPrice }
  }

  // eslint-disable-next-line consistent-return
  const processRowUpdate = async (newRow: RateInstance) => {
    try {
      const dataPrices = {
        purchasePrice: newRow.purchasePrice1 ?? 0,
        profitPercentage: newRow.profitPercentage1 ?? 0,
        profitAmount: newRow.profitAmount1 ?? 0,
        taxesPercentage: newRow.taxesPercentage ?? 0,
      }

      const dataPricesCalculated = calculateValuesPrices(dataPrices)

      const newRowUpdatedPrices: RateInstance = {
        ...newRow,
        sellingValue1: dataPricesCalculated.sellingValue,
        taxesAmount1: dataPricesCalculated.taxesAmount,
        sellingPrice1: dataPricesCalculated.sellingPrice,
      }

      if (newRow.profitAmount1 && newRow.profitPercentage1) {
        throw new Error('Choose only Profit Percentage or Profit Amount')
      }

      await updateRateInstance({
        variables: {
          createInstanceCreateInput: {
            idRateInstance: newRowUpdatedPrices.idRateInstance,
            idOu: newRowUpdatedPrices.idOu,
            idProduct: newRowUpdatedPrices.idProduct,
            idProductInstance: newRowUpdatedPrices.idProductInstance,
            idRate: newRowUpdatedPrices.idRate,
            startDate: newRowUpdatedPrices.startDate,
            endDate: newRowUpdatedPrices.endDate,
            idUserCreate: newRowUpdatedPrices.idUserCreate,
            idUserUpdate: newRowUpdatedPrices.idUserUpdate,
            taxesPercentage: newRowUpdatedPrices.taxesPercentage,
            purchasePrice1: newRowUpdatedPrices.purchasePrice1,
            profitPercentage1: newRowUpdatedPrices.profitPercentage1,
            profitAmount1: newRowUpdatedPrices.profitAmount1,
            sellingValue1: newRowUpdatedPrices.sellingValue1,
            taxesAmount1: newRowUpdatedPrices.taxesAmount1,
            sellingPrice1: newRowUpdatedPrices.sellingPrice1,
            purchasePrice2: newRowUpdatedPrices.purchasePrice2,
            profitPercentage2: newRowUpdatedPrices.profitPercentage2,
            profitAmount2: newRowUpdatedPrices.profitAmount2,
            sellingValue2: newRowUpdatedPrices.sellingValue2,
            taxesAmount2: newRowUpdatedPrices.taxesAmount2,
            sellingPrice2: newRowUpdatedPrices.sellingPrice2,
          },
        },
      })

      return newRowUpdatedPrices
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })

      return {} as RateInstance
    }
  }

  const [updateRateInstance, { loading: updateRateInstanceLoading }] =
    useUpdateRateInstanceMutation({
      refetchQueries: [GetRateInstancesByProductDocument],
      onCompleted: () => {
        toast.success('Rate Instance updated successfully', {
          position: 'top-right',
          duration: 2000,
        })
      },
    })

  const { data: dataInstancesRate, loading: loadingIntancesRate } =
    useGetRateInstancesByProductQuery({
      fetchPolicy: 'cache-and-network',
      variables: {
        idProduct: productSelected?.idProduct,
        idProductInstance: productInstanceSelected.idProductInstance,
        idRate: rateSelected.idRate,
        skip: currentPage * PAGE_SIZE,
        take: PAGE_SIZE,
      },
      skip: !rateSelected.idRate,
    })

  const rowsRatesInstances = dataInstancesRate?.getRateInstancesByProduct ?? []
  const { columnsRatesInstances } = useBuildRatesInstancesColumns({
    rowModesModel,
    setRowModesModel,
    listTaxes,
    listMarkets,
    listChannels,
    listBusinessType,
    listRatesSubfeature,
    listRatesSubfeatureItems,
  })

  const InstancesData = dataInstancesRate?.getRateInstancesByProduct.length
    ? dataInstancesRate?.getRateInstancesByProduct
    : [{} as RateInstance]

  const viewColumns: Record<string, any> = InstancesData.reduce((_acc, item) => ({
    ...item,
    idEntity: item.idEntity !== null,
    idChannel: item.idChannel !== null,
    idBusiness: item.idBusiness !== null,
    idMarket: item.idMarket !== null,
    idRateFeature1: item.idRateFeature1 !== null,
    idRateFeature2: item.idRateFeature2 !== null,
    idRateFeature3: item.idRateFeature3 !== null,
    idRateFeature4: item.idRateFeature4 !== null,
    idRateFeature5: item.idRateFeature5 !== null,
    idRateFeature6: item.idRateFeature6 !== null,
    idRateFeature7: item.idRateFeature7 !== null,
    idRateFeature8: item.idRateFeature8 !== null,
    idRateFeature9: item.idRateFeature9 !== null,
    idRateFeature10: item.idRateFeature10 !== null,
    idRateSubFeature1: item.idRateSubFeature1 !== null,
    idRateSubFeature2: item.idRateSubFeature2 !== null,
    idRateSubFeature3: item.idRateSubFeature3 !== null,
    idRateSubFeature4: item.idRateSubFeature4 !== null,
    idRateSubFeature5: item.idRateSubFeature5 !== null,
    idRateSubFeature6: item.idRateSubFeature6 !== null,
    idRateSubFeature7: item.idRateSubFeature7 !== null,
    idRateSubFeature8: item.idRateSubFeature8 !== null,
    idRateSubFeature9: item.idRateSubFeature9 !== null,
    idRateSubFeature10: item.idRateSubFeature10 !== null,
    idRateSubFeatureItem1: item.idRateSubFeatureItem1 !== null,
    idRateSubFeatureItem2: item.idRateSubFeatureItem2 !== null,
    idRateSubFeatureItem3: item.idRateSubFeatureItem3 !== null,
    idRateSubFeatureItem4: item.idRateSubFeatureItem4 !== null,
    idRateSubFeatureItem5: item.idRateSubFeatureItem5 !== null,
    idRateSubFeatureItem6: item.idRateSubFeatureItem6 !== null,
    idRateSubFeatureItem7: item.idRateSubFeatureItem7 !== null,
    idRateSubFeatureItem8: item.idRateSubFeatureItem8 !== null,
    idRateSubFeatureItem9: item.idRateSubFeatureItem9 !== null,
    idRateSubFeatureItem10: item.idRateSubFeatureItem10 !== null,
  }))

  return (
    <DataTable
      rows={rowsRatesInstances}
      columnVisibilityModel={{
        ...viewColumns,
        sellingPrice2: false,
        purchasePrice2: false,
        profitPercentage2: false,
        profitAmount2: false,
        sellingValue2: false,
        taxesAmount2: false,
      }}
      loading={loadingIntancesRate || updateRateInstanceLoading}
      getRowId={(row) => row.idRateInstance}
      columns={columnsRatesInstances}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
      processRowUpdate={processRowUpdate}
      onRowEditStart={(_params, event) => {
        // eslint-disable-next-line no-param-reassign
        event.defaultMuiPrevented = true
      }}
      onRowEditStop={(_params, event) => {
        // eslint-disable-next-line no-param-reassign
        event.defaultMuiPrevented = true
      }}
      experimentalFeatures={{ newEditingApi: true }}
      paginationMode="server"
      onPageChange={setCurrentPage}
      rowCount={dataInstancesRate?.getRateInstancesByProduct.length ?? 0}
      pageSize={PAGE_SIZE}
      rowsPerPageOptions={[PAGE_SIZE]}
    />
  )
}
