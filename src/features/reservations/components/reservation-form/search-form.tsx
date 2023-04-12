import { FC } from 'react'
import styled from '@emotion/styled'
import ShortUniqueId from 'short-unique-id'
import { Controller } from 'react-hook-form'
import { DateTime as LuxonDateTime } from 'luxon'
import { Search as SearchIcon } from '@mui/icons-material'
import { Button, MenuItem, TextField } from '@mui/material'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { LocalizationProvider } from '@mui/x-date-pickers'

import {
  useFindProductsForReservationLazyQuery,
  useGetRateInstancesByDateProductsLazyQuery,
} from '@/shared/graphql/generated/reservations-api'
import {
  useSearchProductsForm,
  SearchProductsFormValues,
  SearchProductsFormDataValues,
} from '@/features/reservations/hooks/use-search-products-form'

import { Product, ProductData, ProfitData } from '../../types/shared.types'

const createUniqueId = new ShortUniqueId({ length: 16 })

export const SearchForm: FC<{
  quantity: number
  setProducts: (products: Product[]) => void
}> = ({ quantity, setProducts }) => {
  const [findProductsForReservations] = useFindProductsForReservationLazyQuery()
  const [findRatesForReservations] = useGetRateInstancesByDateProductsLazyQuery()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useSearchProductsForm()

  const onSubmit = async (values: SearchProductsFormValues) => {
    try {
      const formData = values as SearchProductsFormDataValues
      // const startDate = LuxonDateTime.fromISO(formData.startDate).toISODate()
      // const endDate = LuxonDateTime.fromISO(formData.endDate).toISODate()
      // eslint-disable-next-line no-console

      const productsResponse = await findProductsForReservations({
        variables: {
          searchInput: {
            start: formData.startDate,
            end: formData.endDate,
            query: formData.query,
            quantity,
            skip: 0,
            take: 10,
          },
        },
      })

      if (productsResponse.data === undefined) {
        throw new Error('An error happened while searching products')
      }

      const productData = productsResponse.data.findForReservations.data.map((item) => ({
        date: LuxonDateTime.fromISO(item.date, { zone: 'utc' }).toFormat('yyyy-MM-dd'),
        idProduct: item.productInstance.product.idProduct,
        idProductInstance: item.productInstance.idProductInstance,
      }))

      const ratesResponse = await findRatesForReservations({
        variables: {
          idProducts: productData,
        },
      })

      if (ratesResponse.data === undefined) {
        throw new Error('An error happened while searching rates')
      }

      const products: Product[] = []
      const productsData = productsResponse.data
      const ratesData = ratesResponse.data

      type Rate = typeof ratesData.getRateInstancesByDateProducts[number]

      const rates: { price: Rate; profit: Rate }[] = []

      const prices: Rate[] = []
      const profits: Rate[] = []

      ratesData.getRateInstancesByDateProducts.forEach((item) => {
        if (item.idRelatedRateInstance === null) {
          prices.push(item)
        } else {
          profits.push(item)
        }
      })

      prices.forEach((price) => {
        const profit = profits.find((item) => item.idRelatedRateInstance === price.idRateInstance)

        if (profit === undefined) {
          return
        }

        rates.push({
          price,
          profit,
        })
      })

      rates.forEach((rate) => {
        const rateProduct = productsData.findForReservations.data.find(
          (instance) =>
            instance.productInstance.idProductInstance === rate.price.idProductInstance &&
            new Date(instance.date) >= new Date(rate.price.startDate) &&
            new Date(instance.date) <= new Date(rate.price.endDate)
        )

        if (rateProduct === undefined) {
          return
        }

        if (rate.price.sellingPrice1 === null) {
          return
        }

        const productFeatures = {
          feature1: rateProduct.productInstance.product.feature1,
          feature2: rateProduct.productInstance.product.feature2,
          feature3: rateProduct.productInstance.product.feature3,
          feature4: rateProduct.productInstance.product.feature4,
          feature5: rateProduct.productInstance.product.feature5,
          feature6: rateProduct.productInstance.product.feature6,
          feature7: rateProduct.productInstance.product.feature7,
          feature8: rateProduct.productInstance.product.feature8,
          feature9: rateProduct.productInstance.product.feature9,
          feature10: rateProduct.productInstance.product.feature10,
        }

        const product: ProductData = {
          rateInstanceId: rate.price.idRateInstance as string,
          relatedRateInstanceId: rate.price.idRelatedRateInstance ?? null,
          rateId: rate.price.idRate as string,
          sellingPrice: rate.price.sellingPrice1 as number,
          inventoryId: rateProduct.idInventory,
          productId: rateProduct.productInstance.product.idProduct,
          productInstanceId: rateProduct.productInstance.idProductInstance,
          date: rateProduct.date,
          code: rateProduct.productInstance.product.code,
          name: rateProduct.productInstance.product.name,
          productFeatures: [
            productFeatures.feature1
              ? `${productFeatures.feature1.productFeature.name}: ${productFeatures.feature1.value}`
              : undefined,
            productFeatures.feature2
              ? `${productFeatures.feature2.productFeature.name}: ${productFeatures.feature2.value}`
              : undefined,
            productFeatures.feature3
              ? `${productFeatures.feature3.productFeature.name}: ${productFeatures.feature3.value}`
              : undefined,
            productFeatures.feature4
              ? `${productFeatures.feature4.productFeature.name}: ${productFeatures.feature4.value}`
              : undefined,
            productFeatures.feature5
              ? `${productFeatures.feature5.productFeature.name}: ${productFeatures.feature5.value}`
              : undefined,
            productFeatures.feature6
              ? `${productFeatures.feature6.productFeature.name}: ${productFeatures.feature6.value}`
              : undefined,
            productFeatures.feature7
              ? `${productFeatures.feature7.productFeature.name}: ${productFeatures.feature7.value}`
              : undefined,
            productFeatures.feature8
              ? `${productFeatures.feature8.productFeature.name}: ${productFeatures.feature8.value}`
              : undefined,
            productFeatures.feature9
              ? `${productFeatures.feature9.productFeature.name}: ${productFeatures.feature9.value}`
              : undefined,
            productFeatures.feature10
              ? `${productFeatures.feature10.productFeature.name}: ${productFeatures.feature10.value}`
              : undefined,
          ],
          productSubfeatureItems: [
            rateProduct.productInstance.subfeatureItem1?.name,
            rateProduct.productInstance.subfeatureItem2?.name,
            rateProduct.productInstance.subfeatureItem3?.name,
            rateProduct.productInstance.subfeatureItem4?.name,
            rateProduct.productInstance.subfeatureItem5?.name,
            rateProduct.productInstance.subfeatureItem6?.name,
            rateProduct.productInstance.subfeatureItem7?.name,
            rateProduct.productInstance.subfeatureItem8?.name,
            rateProduct.productInstance.subfeatureItem9?.name,
            rateProduct.productInstance.subfeatureItem10?.name,
          ],
          rateFeatures: [
            rate.price.rateFeature1?.name,
            rate.price.rateFeature2?.name,
            rate.price.rateFeature3?.name,
            rate.price.rateFeature4?.name,
            rate.price.rateFeature5?.name,
            rate.price.rateFeature6?.name,
            rate.price.rateFeature7?.name,
            rate.price.rateFeature8?.name,
            rate.price.rateFeature9?.name,
            rate.price.rateFeature10?.name,
          ],
          rateSubFeatureItems: [
            rate.price.rateSubFeatureItem1?.name,
            rate.price.rateSubFeatureItem2?.name,
            rate.price.rateSubFeatureItem3?.name,
            rate.price.rateSubFeatureItem4?.name,
            rate.price.rateSubFeatureItem5?.name,
            rate.price.rateSubFeatureItem6?.name,
            rate.price.rateSubFeatureItem7?.name,
            rate.price.rateSubFeatureItem8?.name,
            rate.price.rateSubFeatureItem9?.name,
            rate.price.rateSubFeatureItem10?.name,
          ],
        }

        const profit: ProfitData = {
          rateInstanceId: rate.profit.idRateInstance as string,
          relatedRateInstanceId: rate.profit.idRelatedRateInstance ?? null,
          rateId: rate.profit.idRate as string,
          sellingPrice: rate.profit.sellingPrice1 as number,
          inventoryId: rateProduct.idInventory,
          productId: rateProduct.productInstance.product.idProduct,
          productInstanceId: rateProduct.productInstance.idProductInstance,
          date: rateProduct.date,
        }

        products.push({
          id: createUniqueId(),
          product,
          profit,
          quantity: 1,
        })
      })

      setProducts(products)

      if (products.length === 0) {
        // eslint-disable-next-line no-alert
        window.alert('No products found')
      }
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-alert
        window.alert(error.message)
      } else {
        // eslint-disable-next-line no-alert
        window.alert('An unknown error happened while searching products')
      }
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <div>
        <h2>Packages / Products / Services Search</h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            {/* <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  disableMaskedInput
                  inputFormat="dd-MM-yyyy"
                  value={field.value}
                  onChange={(newDate: LuxonDateTime | null) => {
                    field.onChange(newDate?.toISO() ?? null)
                  }}
                  maxDate={
                    watch('endDate') !== null
                      ? LuxonDateTime.fromISO(watch('endDate') as string)
                      : undefined
                  }
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      size="small"
                      label="Start Date"
                      error={errors.startDate !== undefined}
                      helperText={errors.startDate?.message}
                    />
                  )}
                />
              )}
            /> */}
            {/* <Controller
              control={control}
              name="endDate"
              render={({ field }) => (
                <DatePicker
                  disableMaskedInput
                  inputFormat="dd-MM-yyyy"
                  value={field.value}
                  onChange={(newDate: LuxonDateTime | null) => {
                    field.onChange(newDate?.toISO() ?? null)
                  }}
                  minDate={
                    watch('startDate') !== null
                      ? LuxonDateTime.fromISO(watch('startDate') as string)
                      : undefined
                  }
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      size="small"
                      label="End Date"
                      error={errors.endDate !== undefined}
                      helperText={errors.endDate?.message}
                    />
                  )}
                />
              )}
            /> */}
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  type="date"
                  label="Start Date"
                  error={errors.startDate !== undefined}
                  helperText={errors.startDate?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="endDate"
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  type="date"
                  label="End Date"
                  error={errors.endDate !== undefined}
                  helperText={errors.endDate?.message}
                />
              )}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="origin"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="From"
                  size="small"
                  select
                  fullWidth
                  error={errors.origin !== undefined}
                  helperText={errors.origin?.message}
                >
                  <MenuItem value="">Select departure location</MenuItem>
                  <MenuItem value="1">Option 1</MenuItem>
                  <MenuItem value="2">Option 2</MenuItem>
                  <MenuItem value="3">Option 3</MenuItem>
                </TextField>
              )}
            />
            <Controller
              control={control}
              name="destination"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="To"
                  size="small"
                  select
                  fullWidth
                  error={errors.destination !== undefined}
                  helperText={errors.destination?.message}
                >
                  <MenuItem value="">Select arrival location</MenuItem>
                  <MenuItem value="1">Option 1</MenuItem>
                  <MenuItem value="2">Option 2</MenuItem>
                  <MenuItem value="3">Option 3</MenuItem>
                </TextField>
              )}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            <TextField
              label="Quantity"
              size="small"
              value={quantity}
              InputProps={{ readOnly: true }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
            }}
          >
            <Controller
              control={control}
              name="query"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Search..."
                  size="small"
                  error={errors.query !== undefined}
                  helperText={errors.query?.message}
                />
              )}
            />

            <Button type="submit" startIcon={<SearchIcon />} variant="contained">
              Search
            </Button>
          </div>
        </Form>
      </div>
    </LocalizationProvider>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
