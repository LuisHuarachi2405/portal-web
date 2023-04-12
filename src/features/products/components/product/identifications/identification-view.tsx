import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import {
  GetProductIdentificationsDocument,
  ProductIdentification,
  useDeleteProductIdentificationMutation,
  useGetProductIdentificationsQuery,
} from '@/shared/graphql/generated/products-api'

import { IdentificationForm } from './identification-form'

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
        name: 'Identifications',
        href: paths.products.product.subproducts.subproduct.identifications(
          productId,
          subproductId
        ),
      },
    ])
  }

  return basePaths.concat([
    {
      name: 'Identifications',
      href: paths.products.product.identifications(productId),
    },
  ])
}

interface FormModalState {
  open: boolean
  itemToEdit: ProductIdentification | null
}

interface DeleteConfirmState {
  open: boolean
  itemToDelete: string | null
}

export const IdentificationView: FC = () => {
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const [formModalState, setFormModalState] = useState<FormModalState>({
    open: false,
    itemToEdit: null,
  })
  const [deleteConfirmState, setDeleteConfirmState] = useState<DeleteConfirmState>({
    open: false,
    itemToDelete: null,
  })

  const [deleteProductIdentification] = useDeleteProductIdentificationMutation({
    refetchQueries: [GetProductIdentificationsDocument],
  })
  const { data, loading } = useGetProductIdentificationsQuery({
    variables: {
      idProduct: subproductId ?? productId,
    },
  })

  const rows = data?.productIdentifications ?? []

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
            {/* <h2>Product: {rows[0].productName} - Identification</h2> */}
            <BreadCrumb items={getBreadCrumbItems(productId, subproductId)} />
          </div>

          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => {
              setFormModalState({
                open: true,
                itemToEdit: null,
              })
            }}
          >
            Create
          </Button>
        </div>

        <DataTable
          rows={rows}
          loading={loading}
          getRowId={(row) => row.idProductIdentification}
          columns={[
            {
              field: 'productIdentificationType',
              headerName: 'Identification Type',
              flex: 1,
            },
            {
              field: 'value',
              headerName: 'Value',
              flex: 1,
            },
            {
              field: 'actions',
              headerName: 'Actions',
              headerAlign: 'center',
              flex: 1,
              renderCell: ({ row }) => (
                <Box display="flex" gap="16px" width="100%" justifyContent="center">
                  <Tooltip arrow title="Edit">
                    <IconButton
                      onClick={() => {
                        setFormModalState({
                          open: true,
                          itemToEdit: row,
                        })
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip arrow title="Delete">
                    <IconButton
                      onClick={() => {
                        setDeleteConfirmState({
                          open: true,
                          itemToDelete: row.idProductIdentification,
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

      <IdentificationForm
        open={formModalState.open}
        itemToEdit={formModalState.itemToEdit}
        handleClose={() => {
          setFormModalState({
            open: false,
            itemToEdit: null,
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
          await deleteProductIdentification({
            variables: {
              deleteProductIdentificationId: deleteConfirmState.itemToDelete,
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
