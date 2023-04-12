import { FC } from 'react'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetRateSubFeaturesQuery } from '@/shared/graphql/generated/rates-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  ProductCategory,
  useGetProductCategoriesQuery,
} from '@/shared/graphql/generated/products-api'

import { useBuildRatesSubfeaturesColumns } from '../../hooks/use-build-rates-subfeatures-columns'

export const RatesSubfeaturesTable: FC = () => {
  const intl = useIntl()

  const { data: dataTypeRateSubFeature } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATSFT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const { data: dataCategories } = useGetProductCategoriesQuery()

  const { data, loading, error, refetch } = useGetRateSubFeaturesQuery({
    fetchPolicy: 'cache-and-network',
  })

  const listTypesRateSubFeature =
    dataTypeRateSubFeature?.getGeneralParametersByCode.generalParameterValue ?? []
  const listCategories = (dataCategories?.productCategories.data as ProductCategory[]) ?? []

  const { columns } = useBuildRatesSubfeaturesColumns({ listTypesRateSubFeature, listCategories })

  const rows = data?.getRateSubFeatures ?? []

  if (error) return <ErrorBoundary retry={refetch} />

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.rates.subfeatures.title')}
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
                  name: 'pages.rates.create.entity.breadcrumb.rates.subfeatures.pathname',
                  href: paths.rates.subfeatures.root,
                },
              ]}
            />
          </Box>

          <Link href={paths.rates.subfeatures.new} passHref>
            <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
              {intl.formatMessage('pages.rates.subfeatures.add-feature-button')}
            </Button>
          </Link>
        </Box>

        <DataTable
          rows={rows}
          columns={columns}
          loading={loading}
          getRowId={(row) => row.idRateSubFeature}
        />
      </Box>
    </ViewLayout>
  )
}
