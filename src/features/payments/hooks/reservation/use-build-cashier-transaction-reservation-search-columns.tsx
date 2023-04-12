import { GridColDef } from '@mui/x-data-grid'

import { CashierTransactionReservationsSearchTableActions } from '../../components/reservation/cashier-transaction-reservation-search-table-actions'
import { priceFormatter } from '../../utils/numbers'

interface BuildCashierTransactionReservationSearchColumnsProps {
  reservation: any
}

export const useBuildCashierTransactionReservationSearchColumns = ({
  reservation,
}: BuildCashierTransactionReservationSearchColumnsProps) => {
  const columns: GridColDef[] = [
    {
      field: 'code',
      headerName: 'Reservation code',
      flex: 2,
    },
    {
      field: 'entryDate',
      headerName: 'Date',
      flex: 1,
      valueGetter: ({ value }) => value && value.slice(0, 10),
    },
    {
      field: 'quantity',
      headerName: 'Passengers Quantity',
      flex: 1,
      valueGetter: (params) => params?.row?.passengersQuantity || 0,
    },
    {
      field: 'idStatus',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'totalPriceUSD',
      headerName: 'Amount',
      flex: 1,
      valueGetter: (params) => priceFormatter(params.row?.totalPriceUSD) || 0,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => (
        <CashierTransactionReservationsSearchTableActions row={row} reservation={reservation} />
      ),
    },
  ]

  return { columns }
}
