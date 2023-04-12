import { FC, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import {
  Cached as GenerateIcon,
  Widgets as InventoryIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import {
  GetProductInstancesDocument,
  useGetProductInstancesQuery,
  useDeleteProductInstanceMutation,
  useCreateProductInstancesMutation,
} from '@/shared/graphql/generated/products-api'

import { DeleteConfirm } from '../../delete-confirm'

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
      {
        name: 'Instances',
        href: paths.products.product.subproducts.subproduct.instances.root(productId, subproductId),
      },
    ])
  }

  return basePaths.concat([
    {
      name: 'Instances',
      href: paths.products.product.instances.root(productId),
    },
  ])
}

interface DeleteConfirmState {
  open: boolean
  itemToDelete: string | null
}

export const InstancesView: FC = () => {
  const router = useRouter()
  const { productId, subproductId } = router.query as {
    productId: string
    subproductId?: string
  }

  const [generateProductInstances, { loading: generateProductInstancesLoading }] =
    useCreateProductInstancesMutation({
      refetchQueries: [GetProductInstancesDocument],
    })
  const [deleteProductInstance] = useDeleteProductInstanceMutation({
    refetchQueries: [GetProductInstancesDocument],
  })
  const { data, loading, error } = useGetProductInstancesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      createProductInstanceInput: {
        idOu: '11111111110000000000111111111100',
        idUserCreate: '11111111110000000000111111111100',
        idProduct: subproductId ?? productId,
      },
    },
  })

  const [deleteConfirmState, setDeleteConfirmState] = useState<DeleteConfirmState>({
    open: false,
    itemToDelete: null,
  })

  const rows = data?.productInstances ?? []

  if (error) return <p>Error</p>

  return (
    <ViewLayout>
      <Box display="grid" gap="32px">
        <div
          style={{
            gap: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              Product Instances
            </Typography>
            <BreadCrumb items={getBreadCrumbItems(productId, subproductId)} />
          </Box>

          <Button
            startIcon={<GenerateIcon />}
            variant="contained"
            disabled={generateProductInstancesLoading}
            onClick={() => {
              generateProductInstances({
                variables: {
                  createProductInstanceInput: {
                    idOu: '11111111110000000000111111111100',
                    idProduct: subproductId ?? productId,
                    idUserCreate: '11111111110000000000111111111100',
                  },
                },
              })
            }}
          >
            Generate Instances
          </Button>
        </div>

        <DataTable
          rows={rows}
          loading={loading}
          getRowId={(row) => row.idProductInstance}
          columns={[
            {
              field: 'idProductInstance',
              headerName: 'Instance ID',
              flex: 1,
            },

            {
              field: 'actions',
              headerName: 'Actions',
              headerAlign: 'center',
              flex: 1,
              renderCell: ({ row }) => (
                <Box display="flex" gap="16px" width="100%" justifyContent="center">
                  <Link
                    href={
                      subproductId
                        ? paths.products.product.subproducts.subproduct.instances.inventory(
                            productId,
                            subproductId,
                            row.idProductInstance
                          )
                        : paths.products.product.instances.inventory(
                            productId,
                            row.idProductInstance
                          )
                    }
                  >
                    <Tooltip arrow title="Inventory">
                      <IconButton>
                        <InventoryIcon />
                      </IconButton>
                    </Tooltip>
                  </Link>

                  <Tooltip arrow title="Delete">
                    <IconButton
                      onClick={() => {
                        setDeleteConfirmState({
                          open: true,
                          itemToDelete: row.idProductInstance,
                        })
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              ),
            },
          ]}
        />

        <DeleteConfirm
          open={deleteConfirmState.open}
          dialogTitle="Delete"
          dialogContent="Are you sure you want to delete this item?"
          handleOpen={() => {
            setDeleteConfirmState({
              open: false,
              itemToDelete: null,
            })
          }}
          onConfirm={async () => {
            await deleteProductInstance({
              variables: {
                deleteProductInstanceId: deleteConfirmState.itemToDelete,
              },
            })
            setDeleteConfirmState({
              open: false,
              itemToDelete: null,
            })
          }}
        />
      </Box>
    </ViewLayout>
  )
}
