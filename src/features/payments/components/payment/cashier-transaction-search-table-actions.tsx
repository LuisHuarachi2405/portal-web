import Link from 'next/link'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { ErrorOutline, RemoveRedEye, Add } from '@mui/icons-material'
import toast from 'react-hot-toast'
import { useGridApiContext } from '@mui/x-data-grid'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import {
  DocumentItemPayment,
  useCreateCashierTransactionDocumentItemMutation,
} from '@/shared/graphql/generated/payments-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'

import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'

const TYPES_DOCUMENT_PAYMENTS = ['ACCCUR', 'ACCDST', 'ACCCUR']

interface CashierTransactionPaymentsSearchTableActionsProps {
  row: DocumentItemPayment
}

export const CashierTransactionPaymentsSearchTableActions: FC<
  CashierTransactionPaymentsSearchTableActionsProps
> = (props) => {
  const {
    row: { idDocument },
  } = props

  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const apiGrid = useGridApiContext()

  const [open, setOpen] = useState<boolean>(false)

  const { idCashierTransaction } = router.query as { idCashierTransaction?: string }

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: TYPES_DOCUMENT_PAYMENTS,
    },
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const idCurrencyMN =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''

  const handleOpen = () => {
    setOpen(!open)
  }

  const [createDocumentItem] = useCreateCashierTransactionDocumentItemMutation({
    onCompleted: () => {
      toast.success(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.success-document-item-transaction-created-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
    onError: () => {
      toast.error(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.error-document-item-transaction-created-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
  })

  const onAddConfirm = async () => {
    const selectedRows = apiGrid.current.getSelectedRows() ?? []
    if (selectedRows.size <= 0) {
      alert('Select items')
      handleOpen()
      return
    }
    const requests: Promise<any>[] = []
    selectedRows.forEach((row) => {
      requests.push(
        createDocumentItem({
          variables: {
            createCashierTransactionDocumentItem: {
              idUser: user?.idEntity,
              idOu: user?.idOu,
              idCashierTransaction: row.idCashierTransaction,
              idEntity: user?.idEntity,
              idDocumentStatementTypeDoc: row.idDocumentStatementTypeDoc,
              idDocumentItem: row.idDocumentItem,
              idDocument: row.idDocument,
              idCurrencyMN,
              idCurrency1: row.idCurrency1,
              idCurrency2: idCurrencyMN,
              idCurrency3: row.idCurrency3,
              exchangeRate3: row.exchangeRate3,
              exchangeRate1: row.exchangeRate1,
              amount1: row.balance1,
            },
          },
        })
      )
    })

    await Promise.all(requests)

    router.push(paths.payments.edit(idCashierTransaction!))

    handleOpen()
  }

  return (
    <>
      <AlertDialog
        open={open}
        maxWidth="sm"
        handleOpen={handleOpen}
        dialogContent={intl.formatMessage(
          'pages.payments.form.cashier-transaction.payments.dialog.content.question-add-payments'
        )}
        onConfirm={onAddConfirm}
        icon={<ErrorOutline />}
        dialogTitle={intl.formatMessage(
          'pages.payments.form.cashier-transaction.reservation.dialog.title.question-add-payments'
        )}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.payments.edit(idDocument)}>
          <IconButton color="primary">
            <RemoveRedEye fontSize="small" />
          </IconButton>
        </Link>

        <IconButton onClick={handleOpen}>
          <Add fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
