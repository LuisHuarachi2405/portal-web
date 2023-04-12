import { FC } from 'react'
import styled from '@emotion/styled'
import { DateTime as LuxonDateTime } from 'luxon'
import { IconButton, Tooltip } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'

import { DataTable } from '@/shared/components/data-table/data-table'

import { ItineraryItem } from '../../types/shared.types'

export const ItineraryTable: FC<{
  data: ItineraryItem[]
  handleRemoveFromItinerary: (itemId: string) => void
}> = ({ data, handleRemoveFromItinerary }) => (
  <div>
    <h2>Itinerary</h2>

    <DataTable
      disableColumnMenu
      disableColumnFilter
      components={undefined}
      rows={data
        .filter((item) => item.product.relatedRateInstanceId === null)
        .map((item) => ({ ...item.product, id: item.id, quantity: item.quantity }))}
      columns={[
        {
          field: 'date',
          headerName: 'Date',
          flex: 1,
          renderCell: ({ row }) =>
            LuxonDateTime.fromISO(row.date, { zone: 'utc' }).toFormat('dd-MM-yyyy'),
        },
        // {
        //   field: 'idProductType',
        //   headerName: 'ProductType',
        //   flex: 1,
        //   renderCell: () => '-',
        // },
        // {
        //   field: 'idProductCategory',
        //   headerName: 'Category',
        //   flex: 1,
        //   renderCell: () => '-',
        // },
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
          field: 'productFeatures',
          headerName: 'Product Features',
          flex: 1,
          renderCell: ({ row }) => {
            const features = row.productFeatures as (string | undefined)[]
            return features.length === 0
              ? '-'
              : features.filter((item) => item !== undefined).join(' / ')
          },
        },
        {
          field: 'productSubfeatures',
          headerName: 'Product Subfeature Items',
          flex: 1,
          renderCell: ({ row }) => {
            const subfeatureItems = row.productSubfeatureItems as (string | undefined)[]

            return subfeatureItems.length === 0
              ? '-'
              : subfeatureItems.filter((item) => item !== undefined).join(' / ')
          },
        },
        {
          field: 'rateFeatures',
          headerName: 'Rate Features',
          flex: 1,
          renderCell: ({ row }) => {
            const features = row.rateFeatures as (string | undefined)[]
            return features.length === 0
              ? '-'
              : features.filter((item) => item !== undefined).join(' / ')
          },
        },
        {
          field: 'rateSubfeatures',
          headerName: 'Rate Subfeature Items',
          flex: 1,
          renderCell: ({ row }) => {
            const subfeatureItems = row.rateSubFeatureItems as (string | undefined)[]

            return subfeatureItems.length === 0
              ? '-'
              : subfeatureItems.filter((item) => item !== undefined).join(' / ')
          },
        },
        {
          field: 'sellingPrice',
          headerName: 'Selling Price',
          flex: 1,
          renderCell: ({ row }) => row.sellingPrice.toFixed(2),
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          flex: 1,
        },
        {
          field: 'totalPrice',
          headerName: 'Total Price',
          flex: 1,
          renderCell: ({ row }) => (row.quantity * row.sellingPrice).toFixed(2),
        },
        {
          field: 'actions',
          headerName: 'Actions',
          align: 'center',
          headerAlign: 'center',
          flex: 1,
          renderCell: ({ row }) => (
            <ActionsContainer>
              <Tooltip arrow title="Delete">
                <IconButton
                  onClick={() => {
                    handleRemoveFromItinerary(row.id)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ActionsContainer>
          ),
        },
      ]}
    />
  </div>
)

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
