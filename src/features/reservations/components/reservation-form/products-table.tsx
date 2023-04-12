import { FC, useEffect, useState } from 'react'
import { DateTime as LuxonDateTime } from 'luxon'
import { Add as AddIcon } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { TextField, Tooltip } from '@mui/material'

import { DataTable } from '@/shared/components/data-table/data-table'

import { Product } from '../../types/shared.types'

type Row = Product

export const ProductsTable: FC<{
  data: Product[]
  handleAddToItinerary: (item: Product, quantity: number) => void
}> = ({ data, handleAddToItinerary }) => {
  const [rows, setRows] = useState<Row[]>([])

  useEffect(() => {
    setRows(data)
  }, [data])

  return (
    <div>
      <h2>Products</h2>
      <DataTable
        disableColumnMenu
        disableColumnFilter
        components={undefined}
        rows={rows.map((item) => ({ ...item.product, id: item.id, quantity: item.quantity }))}
        columns={[
          {
            field: 'date',
            headerName: 'Date',
            width: 150,
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
            width: 150,
          },
          {
            field: 'name',
            headerName: 'Name',
            width: 300,
          },
          {
            field: 'productFeatures',
            headerName: 'Product Features',
            width: 350,
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
            width: 150,
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
            width: 150,
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
            width: 150,
            renderCell: ({ row }) => {
              const subfeatureItems = row.rateSubFeatureItems as (string | undefined)[]

              return subfeatureItems.length === 0
                ? '-'
                : subfeatureItems.filter((item) => item !== undefined).join(' / ')
            },
          },
          {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 150,
            renderCell: ({ row }) => row.sellingPrice?.toFixed(2),
          },
          {
            field: 'totalPrice',
            headerName: 'Total Price',
            width: 150,
            valueGetter: ({ row }) => {
              const total = row.sellingPrice * row.quantity
              return total.toFixed(2)
            },
          },
          {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150,
            renderCell: ({ row }) => (
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                error={Number.isNaN(parseInt(row.quantity, 10))}
                value={Number.isNaN(row.quantity) ? '' : row.quantity.toString()}
                onChange={(event) => {
                  setRows((prev) => {
                    const newRows = prev.map((item) => {
                      if (item.id === row.id) {
                        const sanitizedValue = event.target.value.replace(/\D/g, '')
                        return { ...item, quantity: parseInt(sanitizedValue, 10) }
                      }
                      return item
                    })
                    return newRows
                  })
                }}
              />
            ),
          },
          {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            getActions: ({ row }) => [
              <Tooltip title="Add">
                <GridActionsCellItem
                  icon={<AddIcon />}
                  label="Add"
                  onClick={() => {
                    const quantityIsInvalid = Number.isNaN(row.quantity)
                    if (quantityIsInvalid) {
                      // eslint-disable-next-line no-alert
                      window.alert('Quantity is invalid')
                    } else {
                      const item = rows.find((tupleItem) => tupleItem.id === row.id)
                      if (item) {
                        handleAddToItinerary(item, row.quantity)
                      }
                    }
                  }}
                />
              </Tooltip>,
            ],
          },
        ]}
      />
    </div>
  )
}
