/* eslint-disable react/destructuring-assignment */
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, ErrorOutline } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { useDeleteCashierTransactionReservationItemMutation } from '@/shared/graphql/generated/payments-api'

interface CashierTransactionReservationItemActionsProps {
  row: any
  refetch: any
}

export const CashierTransactionReservationTableActions: FC<
  CashierTransactionReservationItemActionsProps
> = (props) => {
  const intl = useIntl()
  const { user } = useAuth()
  const [open, setOpen] = useState<boolean>(false)

  const [deleteCashierTransactionReservationItem] =
    useDeleteCashierTransactionReservationItemMutation({
      onCompleted: () => {
        toast.success('Success delete reservation items', {
          position: 'top-right',
          duration: 2000,
        })
      },
      onError: (e) => {
        toast.error(`Error: ${e.message}`, {
          position: 'top-right',
          duration: 2000,
        })
      },
    })

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    const { idReservationItem } = props.row.item
    const { idCashierTransaction } = props.row
    const { refetch } = props

    await deleteCashierTransactionReservationItem({
      variables: {
        deleteCashierTransactionReservationItem: {
          idCashierTransaction,
          idUser: user?.idEntity,
          idReservationItem,
        },
      },
    })
    await refetch()
    handleOpen()
  }

  return (
    <>
      <AlertDialog
        open={open}
        maxWidth="sm"
        handleOpen={handleOpen}
        dialogContent={intl.formatMessage(
          'pages.payments.form.cashier-transaction.reservation.dialog.content.question-remove-reservation'
        )}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
        dialogTitle={intl.formatMessage(
          'pages.payments.form.cashier-transaction.reservation.dialog.title.question-remove-reservation'
        )}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <IconButton onClick={handleOpen}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
