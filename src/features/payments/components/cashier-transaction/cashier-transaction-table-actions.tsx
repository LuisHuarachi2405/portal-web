import Link from 'next/link'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  CashierTransaction,
  useDeleteCashierTransactionMutation,
} from '@/shared/graphql/generated/payments-api'

interface CashierTransactionActionsProps {
  row: CashierTransaction
  refetch: any
}

export const CashierTransactionTableActions: FC<CashierTransactionActionsProps> = (props) => {
  const {
    row: { idCashierTransaction },
  } = props

  const intl = useIntl()
  const { user } = useAuth()
  const [open, setOpen] = useState<boolean>(false)

  const [deleteCashierTransaction] = useDeleteCashierTransactionMutation({
    onCompleted: () => {
      toast.success('Success delete Cashier Transaction', {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`, {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    const { refetch } = props
    await deleteCashierTransaction({
      variables: {
        deleteCashierTransaction: {
          idOu: user?.idOu,
          idCashierTransaction,
          idUser: user?.idEntity,
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
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
        dialogTitle="Do you want to delete Transaction?"
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.payments.edit(idCashierTransaction)}>
          <IconButton color="primary">
            <Edit fontSize="small" />
          </IconButton>
        </Link>

        <IconButton onClick={handleOpen}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
