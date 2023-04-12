import { TextField } from '@mui/material'
import { GridColDef, useGridApiContext } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import { CashierTransactionPaymentsTableActions } from '../../components/cashier-transaction/cashier-transaction-payments-table-actions'
import { priceFormatter } from '../../utils/numbers'

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
      InputProps={{ inputProps: { min: 0, max: row.balance1 } }}
    />
  )
}

export const useBuildCashierTransactionPaymentsColumns = () => {
  const columns: GridColDef[] = [
    {
      field: 'DocumentTypeTrx',
      headerName: 'Payment type',
      flex: 1,
      valueGetter: (params) =>
        params.row.typePaymentsGeneralParameters?.shortName || params.row.idDocumentTypeName,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      valueGetter: (params) => params.row.date.slice(0, 10),
    },
    {
      field: 'idDocumentTypeName',
      headerName: 'Doc Type / Trx',
      flex: 1,
      valueGetter: (params) =>
        params.row.typeDocumentGeneralParameters?.shortName || params.row.idDocumentTypeName,
    },
    {
      field: 'number',
      headerName: 'Nro / Trx',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'balance1',
      headerName: 'Amount available',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row.balance1) || 0,
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
      renderCell: ({ row }) => <CashierTransactionPaymentsTableActions row={row} />,
    },
  ]

  return { columns }
}
