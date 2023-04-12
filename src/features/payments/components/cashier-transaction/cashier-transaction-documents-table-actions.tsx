import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { ErrorOutline, RemoveRedEye, LocalPrintshop, ForwardToInbox } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { useIntl } from '@/shared/hooks/use-intl'
import { AlertDialog } from '@/shared/components/alert-dialog'
import { CashierTransaction } from '@/shared/graphql/generated/payments-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { UploadS3 } from '../../../../shared/utils/s3/s3'

interface CashierTransactionDocumentsTable {
  row: CashierTransaction & { iddocument: string }
}

export const CashierTransactionDocumentsTableActions: FC<CashierTransactionDocumentsTable> = (
  props
) => {
  const {
    row: { idCashierTransaction },
    row: { iddocument },
  } = props

  const intl = useIntl()
  const { user } = useAuth()
  let s3Process: UploadS3
  const [open, setOpen] = useState<boolean>(false)

  const onDeleteConfirm = async () => idCashierTransaction

  const handleOpen = () => {
    setOpen(!open)
  }

  const openFile = async () => {
    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const pdfFile = await s3Process.getS3File(`${iddocument}.pdf`)
      s3Process.blobPartToFile(pdfFile as BlobPart)
    } catch (error) {
      toast.error(String(error), {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const printFile = async () => {
    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const pdfFile = await s3Process.getS3File(`${iddocument}.pdf`)
      s3Process.printPdf(pdfFile as BlobPart)
    } catch (error) {
      toast.error(intl.formatMessage('pages.payments.form.cashier-transaction.documents'), {
        position: 'top-right',
        duration: 2000,
      })
    }
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
        <IconButton onClick={openFile}>
          <RemoveRedEye fontSize="small" />
        </IconButton>
        <IconButton onClick={printFile}>
          <LocalPrintshop fontSize="small" />
        </IconButton>
        <IconButton>
          <ForwardToInbox fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
