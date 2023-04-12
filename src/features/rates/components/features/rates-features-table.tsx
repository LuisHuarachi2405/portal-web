import { FC } from 'react'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  ProductCategory,
  useGetProductCategoriesQuery,
} from '@/shared/graphql/generated/products-api'
import { useGetRateFeaturesQuery } from '@/shared/graphql/generated/rates-api'

import { useBuildRatesFeaturesColumns } from '../../hooks/use-build-product-features-columns'

export const RatesFeaturesTable: FC = () => {
  const intl = useIntl()

  const { data: dataTypeRateFeature } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATRFT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const { data: dataCategories } = useGetProductCategoriesQuery()

  const listTypesRateFeature =
    dataTypeRateFeature?.getGeneralParametersByCode.generalParameterValue ?? []
  const listCategories = (dataCategories?.productCategories.data as ProductCategory[]) ?? []

  const { columns } = useBuildRatesFeaturesColumns({ listTypesRateFeature, listCategories })

  const { data, loading, error, refetch } = useGetRateFeaturesQuery({
    fetchPolicy: 'cache-and-network',
  })

  const rows = data?.getRateFeatures ?? []

  if (error) return <ErrorBoundary retry={refetch} />

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.rates.features.title')}
            </Typography>
            <BreadCrumb
              items={[
                {
                  name: 'components.sidebar.item.home',
                  href: paths.home,
                },
                {
                  name: 'components.sidebar.item.rates',
                  href: paths.rates.root,
                },
                {
                  name: 'pages.rates.create.entity.breadcrumb.rates.features.pathname',
                  href: paths.rates.features.root,
                },
              ]}
            />
          </Box>

          <Link href={paths.rates.features.new} passHref>
            <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
              {intl.formatMessage('pages.rates.features.add-feature-button')}
            </Button>
          </Link>
        </Box>

        <DataTable
          rows={rows}
          loading={loading}
          columns={columns}
          getRowId={(row) => row.idRateFeature}
        />
      </Box>
    </ViewLayout>
  )
}
