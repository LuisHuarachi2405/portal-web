/* eslint-disable spaced-comment */
import { TextField } from '@mui/material'
import { GridColDef, useGridApiContext } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import { CashierTransactionReservationTableActions } from '../../components/cashier-transaction/cashier-transaction-reservation-table-actions'
import { priceFormatter, sub } from '../../utils/numbers'

const AmountPayment = (props: any) => {
  const { id, value: valueProp, field, row } = props
  const [value, setValue] = useState(valueProp)
  const apiRef = useGridApiContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: valueAmount, min, max } = event.target
    const newValue = Math.max(Number(min), Math.min(Number(max), Number(valueAmount)))
    apiRef.current.setEditCellValue({ id, field, value: newValue, debounceMs: 50 })
    setValue(newValue)
  }

  useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      placeholder="Monto a pagar"
      type="number"
      value={value || 0}
      onChange={handleChange}
      InputProps={{
        inputProps: { min: 0, max: sub(row.item?.totalPriceUSD, row.item?.totalPayedUSD) },
      }}
    />
  )
}

interface BuildCashierTransactionReservationColumns {
  refetch: any
}

export const useBuildCashierTransactionReservationColumns = ({
  refetch,
}: BuildCashierTransactionReservationColumns) => {
  const columns: GridColDef[] = [
    {
      field: 'idReservation',
      headerName: 'Reservation code',
      flex: 1,
      valueGetter: (params) => params?.row?.code || '',
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      valueGetter: (params) => params?.row?.item?.dateStart.slice(0, 10),
      flex: 1,
    },
    {
      field: 'note',
      headerName: 'Item',
      flex: 1,
      valueGetter: (params) => params?.row?.item?.quantity || '',
    },
    {
      field: 'productName',
      headerName: 'Product',
      flex: 2,
      valueGetter: (params) => params?.row?.item?.product?.name || '',
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'amount1',
      headerName: 'Total amount',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row.item?.totalPriceUSD) || 0,
    },
    {
      field: 'amount2',
      headerName: 'Outstanding amount',
      flex: 1,
      valueGetter: (params) =>
        priceFormatter(sub(params.row.item?.totalPriceUSD, params.row.item?.totalPayedUSD)) || 0,
    },
    {
      field: 'TOTAL_TO_PAY',
      headerName: 'Amount payable',
      flex: 1,
      editable: true,
      renderEditCell: (props) => <AmountPayment {...props} />,
      renderCell: (params) => <p>{priceFormatter(params.row?.TOTAL_TO_PAY) || 0}</p>,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <CashierTransactionReservationTableActions row={row} refetch={refetch} />
      ),
    },
  ]

  return { columns }
}
