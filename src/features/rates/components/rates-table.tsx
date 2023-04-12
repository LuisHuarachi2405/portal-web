import { ChangeEvent, FC, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import styled from '@emotion/styled'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { paths } from '@/shared/routes/paths'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useIntl } from '@/shared/hooks/use-intl'
import {
  Rate,
  useGetRatesByProductQuery,
  useProductInstancesQuery,
} from '@/shared/graphql/generated/rates-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  Product,
  ProductInstance,
  useProductsByFilterLazyQuery,
} from '@/shared/graphql/generated/products-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { RateForm } from './rates-form'
import { RateInstancesTable } from './instances/rates-table-instances'

import { useBuildProductsColumns } from '../hooks/use-build-products-columns'
import { useBuildProductSelectColumns } from '../hooks/use-build-product-select-columns'
import { useBuildRatesColumns } from '../hooks/use-build-rates-columns'
import { useBuildProductIntancesColumns } from '../hooks/use-build-product-intances-columns'
import { FormModalState } from '../types/shared.types'

const PAGE_SIZE = 10

const codeGeneralParameters = [
  { code: 'PROPRO', value: 'typeProduct' },
  { code: 'RATRT', value: 'typeRate' },
  { code: 'ACCIMP', value: 'taxes' },
  { code: 'ENTMKT', value: 'market' },
  { code: 'ENTCNL', value: 'channel' },
  { code: 'ENTNEG', value: 'businessType' },
]

export const RatesTable: FC = () => {
  const intl = useIntl()
  const { user } = useAuth()
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const [productSelected, setProductSelected] = useState<Product>({ idProduct: '' } as Product)
  const [productInstanceSelected, setProductInstanceSelected] = useState<ProductInstance>(
    {} as ProductInstance
  )
  const [rateSelected, setRateSelected] = useState<Rate>({} as Rate)
  const [formModalState, setFormModalState] = useState<FormModalState>({
    open: false,
    itemToEdit: null,
  })

  const { data: dataGeneralParameters } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: codeGeneralParameters.map((code) => code.code),
    },
    fetchPolicy: 'cache-and-network',
  })

  const DataGeneralParameters: Record<string, []> = {}

  dataGeneralParameters?.getGeneralParametersByCodeArray.forEach((generalParameter) => {
    let propertyName = ''

    codeGeneralParameters.forEach((code) => {
      if (generalParameter.code === code.code) {
        propertyName = code.value
      }
    })

    DataGeneralParameters[propertyName] = generalParameter.generalParameterValue as []
  })

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const listTypesRate = DataGeneralParameters.typeRate ?? []
  const listTypesProduct = DataGeneralParameters.typeProduct ?? []

  const { data: dataRate, loading: loadingRate } = useGetRatesByProductQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      idProduct: productSelected?.idProduct,
      idProductInstance: productInstanceSelected.idProductInstance,
    },
  })

  const { data: dataIntancesProduct, loading: loadingIntancesProduct } = useProductInstancesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      createProductInstanceInput: {
        idOu: user?.idOu,
        idUserCreate: user?.idUser,
        idProduct: productSelected?.idProduct,
      },
    },
    skip: !productSelected?.idProduct,
  })

  const dataInstancesProductList =
    dataIntancesProduct?.productInstances.map((productInstance) => ({
      ...productInstance,
      productSubFeatureItem1:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem2:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem3:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem4:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem5:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem6:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem7:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem8:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem9:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem
          ?.name || null,
      productSubFeatureItem10:
        productInstance
          .productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem
          ?.name || null,
    })) ?? []

  const dataProductSubFeatureItem1 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem1 === null
  )
  const dataProductSubFeatureItem2 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem2 === null
  )
  const dataProductSubFeatureItem3 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem3 === null
  )
  const dataProductSubFeatureItem4 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem4 === null
  )
  const dataProductSubFeatureItem5 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem5 === null
  )
  const dataProductSubFeatureItem6 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem6 === null
  )
  const dataProductSubFeatureItem7 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem7 === null
  )
  const dataProductSubFeatureItem8 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem8 === null
  )
  const dataProductSubFeatureItem9 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem9 === null
  )
  const dataProductSubFeatureItem10 = dataInstancesProductList?.some(
    (rateInstance) => rateInstance.productSubFeatureItem10 === null
  )

  const [getProductsSearch, { data, loading }] = useProductsByFilterLazyQuery({
    variables: {
      productQueryInput: {
        skip: currentPage * PAGE_SIZE,
        take: PAGE_SIZE,
        name: search,
        code: search,
        shortName: search,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  const handleSearch = () => {
    getProductsSearch()
  }

  const rowsRates = dataRate?.getRatesByProduct ?? []
  const rowsProducts = data?.productsByFilter.data ?? []

  const { columnsProducts } = useBuildProductsColumns()
  const { columnsProductSelect } = useBuildProductSelectColumns({ listTypesProduct })
  const { columnsProductIntances } = useBuildProductIntancesColumns({
    setProductInstanceSelected,
    setFormModalState,
  })

  const { columnsRates } = useBuildRatesColumns({ setFormModalState, listTypesRate })

  return (
    <ViewLayout>
      <HeaderContainer>
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight={700} gutterBottom mb={2}>
            {intl.formatMessage('pages.rates.create.rates.header.title')}
          </Typography>
          <BreadCrumb
            items={[
              { name: 'pages.rates.create.entity.breadcrumb.home.pathname', href: paths.home },
              {
                name: 'pages.rates.create.entity.breadcrumb.rates.pathname',
                href: paths.entities.root,
              },
            ]}
          />
        </Box>
      </HeaderContainer>

      <Box display="flex" gap="10px" mb={4}>
        <TextField
          value={search}
          onChange={handleInputSearch}
          label="Search Product"
          variant="outlined"
          size="small"
        />

        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSearch}
          startIcon={<Search />}
        >
          Search
        </Button>
      </Box>

      <DataTable
        rows={rowsProducts}
        columns={columnsProducts}
        loading={loading}
        getRowId={(row) => row.idProduct}
        paginationMode="server"
        rowCount={data?.productsByFilter.count ?? 0}
        page={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page)
        }}
        onCellClick={(row) => {
          setProductSelected(row.row)
        }}
        pageSize={PAGE_SIZE}
        rowsPerPageOptions={[PAGE_SIZE]}
      />

      <Box mt={6}>
        <HeaderContainer>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Product
            </Typography>
          </Box>
        </HeaderContainer>

        <DataTable
          components={{ Toolbar: null }}
          rows={[productSelected]}
          getRowId={(row) => row.idProduct}
          columns={columnsProductSelect}
        />
      </Box>

      <Box mt={6}>
        <HeaderContainer>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Add Rate by Product instance
            </Typography>
          </Box>
        </HeaderContainer>

        <DataTable
          rows={dataInstancesProductList}
          loading={loadingIntancesProduct}
          getRowId={(row) => row.idProductInstance}
          columns={columnsProductIntances}
          columnVisibilityModel={{
            productSubFeatureItem1: !dataProductSubFeatureItem1,
            productSubFeatureItem2: !dataProductSubFeatureItem2,
            productSubFeatureItem3: !dataProductSubFeatureItem3,
            productSubFeatureItem4: !dataProductSubFeatureItem4,
            productSubFeatureItem5: !dataProductSubFeatureItem5,
            productSubFeatureItem6: !dataProductSubFeatureItem6,
            productSubFeatureItem7: !dataProductSubFeatureItem7,
            productSubFeatureItem8: !dataProductSubFeatureItem8,
            productSubFeatureItem9: !dataProductSubFeatureItem9,
            productSubFeatureItem10: !dataProductSubFeatureItem10,
            subFeatures:
              (!dataProductSubFeatureItem1 ||
                !dataProductSubFeatureItem2 ||
                !dataProductSubFeatureItem3 ||
                !dataProductSubFeatureItem4 ||
                !dataProductSubFeatureItem5 ||
                !dataProductSubFeatureItem6 ||
                !dataProductSubFeatureItem7 ||
                !dataProductSubFeatureItem8 ||
                !dataProductSubFeatureItem9 ||
                !dataProductSubFeatureItem10) === false && true,
          }}
          onCellClick={(row) => {
            setProductInstanceSelected(row.row)
          }}
        />
      </Box>

      <Box mt={6}>
        <HeaderContainer>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Rates
            </Typography>
          </Box>
        </HeaderContainer>

        <DataTable
          rows={rowsRates}
          getRowId={(row) => row.idRate}
          columns={columnsRates}
          loading={loadingRate}
          onCellClick={(row) => {
            setRateSelected(row.row)
          }}
        />
      </Box>

      <Box mt={6}>
        <HeaderContainer>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Rates Instances
            </Typography>
          </Box>
        </HeaderContainer>

        <RateInstancesTable
          productSelected={productSelected}
          productInstanceSelected={productInstanceSelected}
          rateSelected={rateSelected}
          dataGeneralParameters={DataGeneralParameters}
        />
      </Box>

      <RateForm
        open={formModalState.open}
        handleClose={() => {
          setFormModalState({
            open: false,
            itemToEdit: null,
          })
        }}
        itemToEdit={formModalState.itemToEdit}
        setRateSelected={setRateSelected}
        productSelected={productSelected}
        productInstanceSelected={productInstanceSelected}
      />
    </ViewLayout>
  )
}

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`
