import { FC } from 'react'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetProductSubFeaturesQuery } from '@/shared/graphql/generated/products-api'

import { productSubfeaturesBreadcrumbItems } from '../../utils/product-subfeatures-breadcrumb-items'
import { useBuildProductSubfeaturesColumns } from '../../hooks/use-build-product-subfeatures-columns'

export const ProductSubfeaturesTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildProductSubfeaturesColumns()
  const {
    data: productSubfeatures,
    loading,
    error,
  } = useGetProductSubFeaturesQuery({ fetchPolicy: 'cache-and-network' })

  const rows = productSubfeatures?.productSubFeatures ?? []

  if (error) return <p>Error</p>

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.products.subfeatures.table.title')}
            </Typography>
            <BreadCrumb items={productSubfeaturesBreadcrumbItems} />
          </Box>
          <div>
            <Link href={paths.products.subfeatures.create}>
              <Button
                component="a"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Add />}
              >
                {intl.formatMessage('pages.products.subfeatures.table.add-subfeature-button')}
              </Button>
            </Link>
          </div>
        </Box>

        <DataTable
          rows={rows}
          columns={columns}
          loading={loading}
          getRowId={(row) => row.idProductSubFeature}
        />
      </Box>
    </ViewLayout>
  )
}
