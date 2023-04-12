import Link from 'next/link'
import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import {
  CategoryOutlined as CategoriesIcon,
  InventoryOutlined as InventoryIcon,
  BadgeOutlined as IdentificationIcon,
  SvgIconComponent,
  ShoppingCartOutlined as SubproductIcon,
  SellOutlined as FeatureIcon,
  DataObjectOutlined as InstanceIcon,
} from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, Divider, Grid, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import {
  GetProductsDocument,
  useDeleteProductMutation,
  useGetProductQuery,
} from '@/shared/graphql/generated/products-api'

import { DeleteConfirm } from '../delete-confirm'

const getBreadCrumbItems = (productId: string, subproductId?: string) => {
  const basePaths = [
    {
      name: 'components.sidebar.item.home',
      href: paths.home,
    },
    {
      name: 'components.sidebar.item.products',
      href: paths.products.root,
    },
    {
      name: 'Product',
      href: paths.products.product.root(productId),
    },
  ]

  if (subproductId) {
    return basePaths.concat([
      {
        name: 'Subproducts',
        href: paths.products.product.subproducts.root(productId),
      },
      {
        name: 'Subproduct',
        href: paths.products.product.subproducts.subproduct.root(productId, subproductId),
      },
    ])
  }

  return basePaths
}

export const ProductView: FC = () => {
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const [deleteProduct] = useDeleteProductMutation({
    refetchQueries: [GetProductsDocument],
  })
  const { data, loading, error } = useGetProductQuery({
    variables: {
      productId: subproductId ?? productId,
    },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <ViewLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box display="flex" justifyContent="space-between" gap="16px">
          <Box display="flex" flexDirection="column" justifyContent="center" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {subproductId ? 'Subproduct:' : 'Product:'} {data?.product.name}
            </Typography>
            <BreadCrumb items={getBreadCrumbItems(productId, subproductId)} />
          </Box>

          <Box display="flex" flexDirection="column" justifyContent="center" gap="16px">
            <Link
              href={
                subproductId
                  ? paths.products.product.subproducts.subproduct.edit(productId, subproductId)
                  : paths.products.product.edit(productId)
              }
              passHref
            >
              <Button LinkComponent="a" variant="contained">
                Edit
              </Button>
            </Link>

            <Button
              variant="outlined"
              onClick={() => {
                setOpenDeleteDialog(true)
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>

        <InfoCard variant="outlined">
          <p style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <span>
              <strong>Code</strong>
            </span>
            <span>{data?.product.code}</span>
          </p>
          <Divider />
          <p style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <span>
              <strong>Name</strong>
            </span>
            <span>{data?.product.name}</span>
          </p>
          <Divider />
          <p style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <span>
              <strong>Short Name</strong>
            </span>
            <span>{data?.product.shortName}</span>
          </p>
        </InfoCard>

        <Grid container spacing={2}>
          <ProductMenuCard
            title="Categories"
            href={
              subproductId
                ? paths.products.product.subproducts.subproduct.categories(productId, subproductId)
                : paths.products.product.categories(productId)
            }
            icon={CategoriesIcon}
          />
          <ProductMenuCard
            title="Features"
            href={
              subproductId
                ? paths.products.product.subproducts.subproduct.features(productId, subproductId)
                : paths.products.product.features(productId)
            }
            icon={FeatureIcon}
          />
          <ProductMenuCard
            title="Identifications"
            href={
              subproductId
                ? paths.products.product.subproducts.subproduct.identifications(
                    productId,
                    subproductId
                  )
                : paths.products.product.identifications(productId)
            }
            icon={IdentificationIcon}
          />
          <ProductMenuCard
            title="Subfeatures"
            href={
              subproductId
                ? paths.products.product.subproducts.subproduct.subfeatures(productId, subproductId)
                : paths.products.product.subfeatures(productId)
            }
            icon={InventoryIcon}
          />
          <ProductMenuCard
            title="Instances"
            href={
              subproductId
                ? paths.products.product.subproducts.subproduct.instances.root(
                    productId,
                    subproductId
                  )
                : paths.products.product.instances.root(productId)
            }
            icon={InstanceIcon}
          />
          {subproductId === undefined && (
            <ProductMenuCard
              title="Subproducts"
              href={paths.products.product.subproducts.root(productId)}
              icon={SubproductIcon}
            />
          )}
        </Grid>
      </div>

      <DeleteConfirm
        open={openDeleteDialog}
        handleOpen={() => setOpenDeleteDialog((prev) => !prev)}
        dialogTitle="Delete"
        dialogContent="Are you sure you want to delete this item?"
        onConfirm={async () => {
          await deleteProduct({
            variables: {
              deleteProductId: subproductId ?? productId,
              inactiveFlag: false,
            },
          })
          if (subproductId) {
            router.push(paths.products.product.subproducts.root(productId))
          } else {
            router.push(paths.products.root)
          }
        }}
      />
    </ViewLayout>
  )
}

interface ProductMenuCardProps {
  title: string
  href: string
  icon: SvgIconComponent
}

interface ProductMenuCardProps {
  title: string
  icon: SvgIconComponent
  href: string
}

const ProductMenuCard: FC<ProductMenuCardProps> = ({ title, href, icon: Icon }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card variant="outlined" sx={{ borderRadius: '8px', backgroundColor: '#556dd613' }}>
      <Link href={href}>
        <CardActionArea LinkComponent="a" sx={{ padding: '16px' }}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box sx={{ padding: '16px' }}>
              <Icon sx={{ fontSize: '80px' }} />
            </Box>
            <Typography variant="h5" fontWeight={700} sx={{ padding: '16px' }}>
              {title}
            </Typography>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  </Grid>
)

const InfoCard = styled(Card)`
  border-radius: 8px;
  padding: 8px 16px;
`
