import Link from 'next/link'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Shop2, RemoveRedEye, Add } from '@mui/icons-material'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { paths } from '@/shared/routes/paths'
import { ReservationItem } from '@/shared/graphql/generated/reservations-api'
import {
  useCreateCashierTransactionReservationItemMutation,
  useGetCurrencyExchangeRatesByDateAndIdOuQuery,
} from '@/shared/graphql/generated/payments-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'

import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { getDateCurrent } from '../../utils/date'
import { ReservationItemFactory } from '../../utils/Factory/reservationItemFactory'
import { sub } from '../../utils/numbers'
import { ReservationSearch } from '../../types/reservationSearch'

const GENERAL_PARAMETERS_PAYMENTS = ['ACCCUR']
interface CashierTransactionReservationsSearchTableActionsProps {
  row: ReservationItem
  reservation?: ReservationSearch
}

export const CashierTransactionReservationsSearchTableActions: FC<
  CashierTransactionReservationsSearchTableActionsProps
> = (props) => {
  const {
    row: { idReservation },
    reservation,
  } = props

  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)

  const { idCashierTransaction } = router.query as { idCashierTransaction?: string }

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const idCurrencyMN =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''

  const idCurrency1 =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('USD')?.idValue || ''

  const { data: currencyExchangeRatesData } = useGetCurrencyExchangeRatesByDateAndIdOuQuery({
    variables: {
      idOu: user?.idOu,
      date: getDateCurrent(),
      idCurrency1,
      idCurrency2: idCurrencyMN,
    },
  })

  const [createCashierTransactionReservationItem] =
    useCreateCashierTransactionReservationItemMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.payments.table.reservation.search.success-add-to-cart-payments-message'
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
            'pages.payments.table.reservation.search.error-add-to-cart-payments-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
      },
    })

  const handleOpen = () => {
    setOpen(!open)
  }

  const onAddConfirm = async () => {
    const rowsReservationByEntity = new ReservationItemFactory().create([reservation])

    const reservationItem = rowsReservationByEntity.filter(
      (items) => items.item.rateInstance.idRelatedRateInstance === null
    )

    const profit = rowsReservationByEntity.filter(
      (items) => items.item.rateInstance.idRelatedRateInstance != null
    )

    const selectedRows = reservationItem ?? []
    if (selectedRows.length <= 0) {
      toast.error(
        intl.formatMessage('pages.payments.form.cashier-transaction.errors.reservations.items'),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
      handleOpen()
      return
    }

    if (
      currencyExchangeRatesData &&
      currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu?.length <= 0
    ) {
      toast.error(
        intl.formatMessage('pages.payments.form.cashier-transaction.errors.payments.exchange'),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
      handleOpen()
      return
    }

    const requests: Promise<unknown>[] = []
    selectedRows.forEach((row) => {
      requests.push(
        createCashierTransactionReservationItem({
          variables: {
            createCashierTransactionReservationItem: {
              idCashierTransaction,
              idReservation: row.idReservation,
              idReservationItem: row.item.idReservationItem,
              idDocument: null,
              idDocumentItem: null,
              idOu: user?.idOu,
              idCurrency1,
              exchangeRate1:
                currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu[0].buyExchangeRate,
              idCurrency2: idCurrencyMN,
              idCurrency3: idCurrency1,
              amount3: Number(
                sub(String(row.item?.totalPriceUSD), String(row.item?.totalPayedUSD))
              ),
              amountTotal: row.item.totalPriceUSD,
              exchangeRate3:
                currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu[0].buyExchangeRate,
              idUser: user?.idUser,
              idCurrencyMN,
              isProfit: '0',
              taxesPercentage: row.item.rateInstance.taxesPercentage,
              purchasePrice1: row.item.rateInstance.purchasePrice1,
              profitPercentage1: row.item.rateInstance.profitPercentage1,
              sellingValue1: row.item.rateInstance.sellingValue1,
              taxesAmount1: row.item.rateInstance.taxesAmount1,
              sellingPrice1: row.item.rateInstance.sellingPrice1,
              IdRelatedProfit: row.item.idReservationItem,
              description: row.item.product.name,
            },
          },
        })
      )

      const dataProfit = profit.find(
        (itemProfit) =>
          (itemProfit.item.rateInstance.idRelatedRateInstance as unknown as string) ===
          (row.item.rateInstance.idRateInstance as string)
      )
      if (dataProfit) {
        requests.push(
          createCashierTransactionReservationItem({
            variables: {
              createCashierTransactionReservationItem: {
                idCashierTransaction,
                idReservation: dataProfit.idReservation,
                idReservationItem: dataProfit.item.idReservationItem,
                idDocument: null,
                idDocumentItem: null,
                idOu: user?.idOu,
                idCurrency1,
                exchangeRate1:
                  currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu[0]
                    .buyExchangeRate,
                idCurrency2: idCurrencyMN,
                idCurrency3: idCurrency1,
                amount3: Number(
                  sub(String(row.item?.totalPriceUSD), String(row.item?.totalPayedUSD))
                ),
                amountTotal: dataProfit.item?.totalPriceUSD,
                exchangeRate3:
                  currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu[0]
                    .buyExchangeRate,
                idUser: user?.idUser,
                idCurrencyMN,
                isProfit: '1',
                taxesPercentage: dataProfit.item.rateInstance.taxesPercentage,
                purchasePrice1: dataProfit.item.rateInstance.purchasePrice1,
                profitPercentage1: dataProfit.item.rateInstance.profitPercentage1,
                sellingValue1: dataProfit.item.rateInstance.sellingValue1,
                taxesAmount1: dataProfit.item.rateInstance.taxesAmount1,
                sellingPrice1: dataProfit.item.rateInstance.sellingPrice1,
                IdRelatedProfit: row.item.idReservationItem,
                description: row.item.product.name,
              },
            },
          })
        )
      }
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
          'pages.payments.form.cashier-transaction.reservation.dialog.content.question-add-payments'
        )}
        onConfirm={onAddConfirm}
        icon={<Shop2 />}
        dialogTitle={intl.formatMessage(
          'pages.payments.form.cashier-transaction.reservation.dialog.title.question-add-payments'
        )}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.payments.edit(idReservation)}>
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
