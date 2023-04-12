import { FC } from 'react'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetProductCategoriesQuery } from '@/shared/graphql/generated/products-api'

import { useBuildProductCategoriesColumns } from '../../hooks/use-build-product-categories-columns'
import { productCategoriesTableBreadcrumbItems } from '../../utils/product-categories-breadcrumb-items'

export const ProductCategoriesTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildProductCategoriesColumns()
  const { data, loading, error } = useGetProductCategoriesQuery({
    fetchPolicy: 'cache-and-network',
  })

  const rows = data?.productCategories.data ?? []

  if (error) return <p>Error</p>

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.products.categories.title')}
            </Typography>
            <BreadCrumb items={productCategoriesTableBreadcrumbItems} />
          </Box>
          <div>
            <Link href={paths.products.categories.create}>
              <Button
                component="a"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Add />}
              >
                {intl.formatMessage('pages.products.categories.add-category-button')}
              </Button>
            </Link>
          </div>
        </Box>

        <DataTable
          rows={rows}
          columns={columns}
          loading={loading}
          getRowId={(row) => row.idProductCategory}
        />
      </Box>
    </ViewLayout>
  )
}
