import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetProductsQuery } from '@/shared/graphql/generated/products-api'

import { useBuildProductsColumns } from '../hooks/use-build-products-columns'

const getBreadcrumbItems = (productId?: string) => {
  const basePaths = [
    {
      name: 'components.sidebar.item.home',
      href: paths.home,
    },
    {
      name: 'components.sidebar.item.products',
      href: paths.products.root,
    },
  ]

  if (productId) {
    return basePaths.concat([
      {
        name: 'Product',
        href: paths.products.product.root(productId),
      },
      {
        name: 'Subproducts',
        href: paths.products.product.subproducts.root(productId),
      },
    ])
  }

  return basePaths
}

export const ProductsTable: FC = () => {
  const intl = useIntl()
  const router = useRouter()
  const { productId } = router.query as { productId: string | undefined }

  const { columns } = useBuildProductsColumns()
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      productsId: productId ?? '',
    },
    fetchPolicy: 'cache-and-network',
  })

  const rows = data?.products ?? []

  if (error) return <p>Error</p>

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {productId ? 'Subproducts' : 'Products'}
            </Typography>
            <BreadCrumb items={getBreadcrumbItems(productId)} />
          </Box>
          <div>
            <Link
              href={
                productId
                  ? paths.products.product.subproducts.create(productId)
                  : paths.products.create
              }
            >
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
          loading={loading}
          getRowId={(row) => row.idProduct}
        />
      </Box>
    </ViewLayout>
  )
}
