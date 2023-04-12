import Link from 'next/link'
import type { FC } from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'

import { products } from '../data/products.data'
import { useBuildProductsColumns } from '../hooks/use-build-products-columns'
import { productsTableBreadcrumbItems } from '../utils/products-breadcrumb-items'

export const ProductsTable: FC = () => {
  const intl = useIntl()

  const { columns } = useBuildProductsColumns()

  const rows = products

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.products.title')}
            </Typography>
            <BreadCrumb items={productsTableBreadcrumbItems} />
          </Box>
          <div>
            <Link href={paths.products.create}>
              <Button
                component="a"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Add />}
              >
                {intl.formatMessage('pages.products.add-product-button')}
              </Button>
            </Link>
          </div>
        </Box>

        <DataTable
          rows={rows}
          columns={columns}
          // loading={loading}
          getRowId={(row) => row.idProduct}
        />
      </Box>
    </ViewLayout>
  )
}
