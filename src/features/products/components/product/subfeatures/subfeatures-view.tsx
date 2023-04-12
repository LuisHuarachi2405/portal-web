import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import {
  useGetProductProductSubFeaturesQuery,
  GetProductProductSubFeaturesDocument,
  useDeleteProductProductSubFeatureMutation,
} from '@/shared/graphql/generated/products-api'

import { SubfeatureForm } from './subfeature-form'

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

  if (subproductId !== undefined) {
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
        name: 'Subfeatures',
        href: paths.products.product.subproducts.subproduct.subfeatures(productId, subproductId),
      },
    ])
  }

  return basePaths.concat([
    {
      name: 'Subfeatures',
      href: paths.products.product.subfeatures(productId),
    },
  ])
}

interface FormModalState {
  open: boolean
}

interface DeleteConfirmState {
  open: boolean
  itemToDelete: string | null
}

export const SubfeaturesView: FC = () => {
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const [deleteProductProductSubFeature] = useDeleteProductProductSubFeatureMutation({
    refetchQueries: [GetProductProductSubFeaturesDocument],
  })
  const { data, loading } = useGetProductProductSubFeaturesQuery({
    variables: {
      idProduct: subproductId ?? productId,
    },
    fetchPolicy: 'cache-and-network',
  })

  const [formModalState, setFormModalState] = useState<FormModalState>({
    open: false,
  })
  const [deleteConfirmState, setDeleteConfirmState] = useState<DeleteConfirmState>({
    open: false,
    itemToDelete: null,
  })

  const rows = data?.productProductSubFeatures ?? []

  return (
    <ViewLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            gap: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h1>Subfeatures</h1>
            <BreadCrumb items={getBreadCrumbItems(productId, subproductId)} />
          </div>

          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => {
              setFormModalState({
                open: true,
              })
            }}
          >
            Create
          </Button>
        </div>

        <DataTable
          rows={rows}
          loading={loading}
          getRowId={(row) => row.idProductProductSubFeature}
          columns={[
            {
              field: 'productName',
              headerName: 'Product',
              flex: 1,
            },
            {
              field: 'productSubFeature',
              headerName: 'Subfeature',
              flex: 1,
            },
            {
              field: 'actions',
              headerName: 'Actions',
              headerAlign: 'center',
              flex: 1,
              renderCell: ({ row }) => (
                <Box display="flex" gap="16px" width="100%" justifyContent="center">
                  <Tooltip arrow title="Delete">
                    <IconButton
                      onClick={() => {
                        setDeleteConfirmState({
                          open: true,
                          itemToDelete: row.idProductProductSubFeature,
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
      </div>

      <SubfeatureForm
        open={formModalState.open}
        handleClose={() => {
          setFormModalState({
            open: false,
          })
        }}
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
          await deleteProductProductSubFeature({
            variables: {
              deleteProductProductSubFeatureId: deleteConfirmState.itemToDelete,
            },
          })

          setDeleteConfirmState({
            open: false,
            itemToDelete: null,
          })
        }}
      />
    </ViewLayout>
  )
}
