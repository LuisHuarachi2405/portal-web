import { FC } from 'react'
import styled from '@emotion/styled'
import { IconButton, Tooltip } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { useGetProductsQuery } from '@/shared/graphql/generated/products-api'

export const AddProductAsSubproductTable: FC = () => {
  const {
    data: productsData,
    loading: productsDataLoading,
    error: productsDataError,
  } = useGetProductsQuery({
    variables: {
      productsId: '',
    },
  })

  const rows = productsData?.products ?? []

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAddProductAsSubproduct = (selectedProductId: string) => {}

  if (productsDataError) {
    return <div>Error</div>
  }

  return (
    <ViewLayout>
      <h2>Add product as subproduct</h2>
      <DataTable
        getRowId={(row) => row.idProduct}
        loading={productsDataLoading}
        rows={rows}
        columns={[
          {
            field: 'code',
            headerName: 'Code',
            flex: 1,
          },
          {
            field: 'name',
            headerName: 'Name',
            flex: 1,
          },
          {
            field: 'shortName',
            headerName: 'Short Name',
            flex: 1,
          },
          {
            field: 'productType',
            headerName: 'Product Type',
            flex: 1,
          },
          {
            field: 'supplierName',
            headerName: 'Supplier',
            flex: 1,
          },
          {
            field: 'inventoryFlag',
            headerName: 'Has Inventory',
            flex: 1,
            renderCell: ({ row }) => (row.inventoryFlag === '1' ? 'Yes' : 'No'),
          },
          {
            field: 'actions',
            headerName: 'Actions',
            headerAlign: 'center',

            flex: 1,
            renderCell: ({ row }) => (
              <ActionsContainer>
                <Tooltip arrow title="Add">
                  <IconButton
                    onClick={() => {
                      handleAddProductAsSubproduct(row.idProduct)
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </ActionsContainer>
            ),
          },
        ]}
      />
    </ViewLayout>
  )
}

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`
