import { FC } from 'react'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetProductFeaturesQuery } from '@/shared/graphql/generated/products-api'

import { useBuildProductFeaturesColumns } from '../../hooks/use-build-product-features-columns'
import { productFeaturesTableBreadcrumbItems } from '../../utils/product-features-breadcrumb-items'

export const ProductFeaturesTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildProductFeaturesColumns()
  const { data, loading, error } = useGetProductFeaturesQuery({ fetchPolicy: 'cache-and-network' })

  const rows = data?.productFeatures ?? []

  if (error) return <p>Error</p>

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.products.features.title')}
            </Typography>
            <BreadCrumb items={productFeaturesTableBreadcrumbItems} />
          </Box>
          <div>
            <Link href={paths.products.features.create}>
              <Button
                component="a"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Add />}
              >
                {intl.formatMessage('pages.products.features.add-feature-button')}
              </Button>
            </Link>
          </div>
        </Box>

        <DataTable
          rows={rows}
          columns={columns}
          loading={loading}
          getRowId={(row) => row.idProductFeature}
        />
      </Box>
    </ViewLayout>
  )
}
