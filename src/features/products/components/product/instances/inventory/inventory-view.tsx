import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { DateTime as LuxonDateTime } from 'luxon'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetInventoryTransactionsQuery } from '@/shared/graphql/generated/products-api'

import { InventoryForm } from './inventory-form'

import { DeleteConfirm } from '../../../delete-confirm'

const getBreadCrumbItems = (productId: string, instanceId: string, subproductId?: string) => {
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
      {
        name: 'Inventory',
        href: paths.products.product.subproducts.subproduct.instances.inventory(
          productId,
          subproductId,
          instanceId
        ),
      },
    ])
  }

  return basePaths.concat([
    {
      name: 'Instances',
      href: paths.products.product.instances.root(productId),
    },
    {
      name: 'Inventory',
      href: paths.products.product.instances.inventory(productId, instanceId),
    },
  ])
}

interface FormModalState {
  open: boolean
  itemToEdit: unknown | null
}

interface DeleteConfirmState {
  open: boolean
  itemToDelete: string | null
}

export const InventoryView: FC = () => {
  const router = useRouter()
  const { productId, subproductId, instanceId } = router.query as {
    productId: string
    subproductId?: string
    instanceId: string
  }

  const { data, loading } = useGetInventoryTransactionsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      idProductInstance: instanceId,
    },
  })

  const rows = data?.inventoryTransactions ?? []

  const [formModalState, setFormModalState] = useState<FormModalState>({
    open: false,
    itemToEdit: null,
  })
  const [deleteConfirmState, setDeleteConfirmState] = useState<DeleteConfirmState>({
    open: false,
    itemToDelete: null,
  })

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
            <h1>Inventory Transactions</h1>
            <BreadCrumb items={getBreadCrumbItems(productId, instanceId, subproductId)} />
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
          getRowId={(row) => row.idInventoryTransaction}
          columns={[
            {
              field: 'date',
              headerName: 'Date',
              flex: 1,
              renderCell: ({ row }) =>
                LuxonDateTime.fromISO(row.date, { zone: 'utc' }).toFormat('dd-MM-yyyy'),
            },
            {
              field: 'note',
              headerName: 'Note',
              flex: 1,
            },
            {
              field: 'credit',
              headerName: 'Credit',
              flex: 1,
            },
            {
              field: 'debit',
              headerName: 'Debit',
              flex: 1,
            },
            {
              field: 'balance',
              headerName: 'Balance',
              flex: 1,
            },
            {
              field: 'actions',
              headerName: 'Actions',
              headerAlign: 'center',
              flex: 1,
              renderCell: ({ row }) => (
                <Box display="flex" gap="16px" width="100%" justifyContent="center">
                  {/* <Tooltip arrow title="Edit">
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
                  </Tooltip> */}

                  <Tooltip arrow title="Delete">
                    <IconButton
                      onClick={() => {
                        setDeleteConfirmState({
                          open: true,
                          itemToDelete: row.idProductProductFeature,
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

      <InventoryForm
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
          // TODO
          setDeleteConfirmState({
            open: false,
            itemToDelete: null,
          })
        }}
      />
    </ViewLayout>
  )
}
