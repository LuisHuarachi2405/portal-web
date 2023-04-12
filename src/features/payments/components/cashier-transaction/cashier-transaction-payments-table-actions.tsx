import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { RemoveRedEye, ErrorOutline, Delete } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { CashierTransaction } from '@/shared/graphql/generated/payments-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { UploadS3 } from '../../../../shared/utils/s3/s3'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'

interface CashierTransactionActionsProps {
  row: CashierTransaction & { DocumentTypeTrx: string; idDocument: string }
}
const GENERAL_PARAMETERS_PAYMENTS = ['ACCDT', 'ACCCTIT', 'ACCTP', 'ACCCUR', 'ACCDST']

export const CashierTransactionPaymentsTableActions: FC<CashierTransactionActionsProps> = (
  props
) => {
  const {
    row: { idCashierTransaction },
    row: { DocumentTypeTrx },
    row: { idDocument },
  } = props

  const intl = useIntl()
  const [open, setOpen] = useState<boolean>(false)
  const { user } = useAuth()
  let s3Process: UploadS3
  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
  })
  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const paymentsTypes =
    generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(DocumentTypeTrx)?.code ||
    ''

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => idCashierTransaction

  const openFile = async () => {
    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const pdfFile = await s3Process.getS3File(`${idDocument}.pdf`)
      s3Process.blobPartToFile(pdfFile as BlobPart)
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
        {paymentsTypes === 'ACCDTFAC' && (
          <IconButton color="primary" onClick={openFile}>
            <RemoveRedEye fontSize="small" />
          </IconButton>
        )}

        <IconButton>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
