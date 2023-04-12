/* eslint-disable no-plusplus */
import { FC, useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  debounce,
} from '@mui/material'
import { Add, Logout } from '@mui/icons-material'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import styled from '@emotion/styled'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import {
  useGetCashierTransactionByIdQuery,
  useGetcashierTransactionReservationItemsByParamsQuery,
  useGetCashierTransactionDocumentsPymentsQuery,
  useGetCurrencyExchangeRatesByDateAndIdOuQuery,
  useCreatePaymentMutation,
  useGetCashierTransactionItemsViewByParamsQuery,
  CreateCartReservationItemValueInput,
  CreateDocumentItemValueInput,
} from '@/shared/graphql/generated/payments-api'
import { Spinner } from '@/shared/components/spinner'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useReservationsQuery } from '@/shared/graphql/generated/reservations-api'
import {
  FullEntityOutput,
  useFindFullEntityByIdQuery,
} from '@/shared/graphql/generated/entities-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { useBuildCashierTransactionReservationColumns } from '../../hooks/cashier-transaction/use-build-cashier-transaction-reservation-columns'
import { useBuildCashierTransactionPaymentsColumns } from '../../hooks/cashier-transaction/use-build-cashier-transaction-payments-columns'
import { useBuildCashierTransactionDocumentsColumns } from '../../hooks/cashier-transaction/use-build-cashier-transaction-documents-columns'
import { useApiRef } from '../../hooks/cashier-transaction/use-api-ref-data-grid'
import { useBuildReservationGenerateRows } from '../../hooks/reservation/use-build-reservation-generate-rows'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { DocumentsPaymentsFactory } from '../../utils/Factory/documentsPayments'
import { ReservationsPaymentsFactory } from '../../utils/Factory/reservationPayments'
import { sub } from '../../utils/numbers'
import { getDateCurrent } from '../../utils/date'
import { useBuildBreadcrumbCashierTransactions } from '../../utils/payment-breadcrumb-cashier-transaction'
import { CashierTransactionValue } from '../../types/cashier-transaction-forms.types'
import { IReservationItems } from '../../types/reservationItems'
import { UploadS3 } from '../../../../shared/utils/s3/s3'
import { FilesTypes } from '../../../../shared/utils/s3/s3-type-file'
import { EntityInvoiceFactory } from '../../utils/Factory/entityInvoiceFactory'

interface CashierTransactionFormProps {
  initialValues?: CashierTransactionValue
}

const GENERAL_PARAMETERS_PAYMENTS = ['ACCDT', 'ACCCTIT', 'ACCTP', 'ACCCUR', 'ACCDST', 'EMSUNAT']

export const CashierTransactionForm: FC<CashierTransactionFormProps> = () => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const items = useBuildBreadcrumbCashierTransactions()
  let s3Process: UploadS3
  const { idCashierTransaction } = router.query as { idCashierTransaction?: string }

  const [noteTransaction, setNoteTransaction] = useState<string>('')

  const [createPayment, { loading: createPaymentLoading }] = useCreatePaymentMutation({
    onCompleted: () => {
      toast.success(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.success-document-item-transaction-add-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
  })

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const idCurrency1 =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('USD')?.idValue || ''
  const idCurrency2 =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''
  const idCurrencyMN =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''
  const entityEmisorSunat =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('EMISORSUNATID')
      ?.value || ''

  const {
    data: cashierTransactionData,
    loading: cashierTransactionLoading,
    error: cashierTransactionDataError,
  } = useGetCashierTransactionByIdQuery({
    variables: {
      getCashierTransactionByIdId: idCashierTransaction,
    },
    fetchPolicy: 'cache-and-network',
    skip: !idCashierTransaction,
  })
  const { data: transactionReservationItemData, refetch: refetchTransactionReservation } =
    useGetcashierTransactionReservationItemsByParamsQuery({
      variables: {
        idCashierTransaction,
      },
      fetchPolicy: 'cache-and-network',
      skip: !idCashierTransaction,
    })
  const { data: cashierTransactionDocumentsData } = useGetCashierTransactionItemsViewByParamsQuery({
    variables: {
      idOu: user?.idOu,
      idCashierTransaction,
    },
    fetchPolicy: 'cache-and-network',
    skip: !idCashierTransaction,
  })
  const { data: transactionDocumentsPaymentsData } = useGetCashierTransactionDocumentsPymentsQuery({
    variables: {
      idCashierTransaction,
      idOu: user?.idOu,
      idEntity: user?.idEntity,
      status: 'ACTIVO',
    },
    fetchPolicy: 'cache-and-network',
    skip: !idCashierTransaction,
  })
  const { data: reservationByEntityData } = useReservationsQuery({
    variables: {
      idEntity: user?.idEntity,
      skip: 0,
      take: 10000,
    },
    fetchPolicy: 'cache-and-network',
  })
  const { data: currencyExchangeRatesData } = useGetCurrencyExchangeRatesByDateAndIdOuQuery({
    variables: {
      idOu: user?.idOu,
      date: getDateCurrent(),
      idCurrency1,
      idCurrency2: idCurrencyMN,
    },
    fetchPolicy: 'cache-and-network',
  })
  const { reservationItem } = useBuildReservationGenerateRows(reservationByEntityData)

  const { columns: columnsReservation } = useBuildCashierTransactionReservationColumns({
    refetch: refetchTransactionReservation,
  })
  const { columns: columnsPayments } = useBuildCashierTransactionPaymentsColumns()
  const { columns: columnsDocuments } = useBuildCashierTransactionDocumentsColumns()
  const { columns: columnsPaymentsDisplay, apiRef: refPayments } = useApiRef(columnsPayments)
  const { columns: columnsReservationDisplay, apiRef: refReservations } =
    useApiRef(columnsReservation)

  const transactionReservationItem =
    transactionReservationItemData?.getcashierTransactionReservationItemsByParams || []

  const idDocumentStatementTypeBalIniDoc =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDSTDOC')?.idValue ||
    ''
  const idDocumentStatementTypeBalIniMon =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDSTMM')?.idValue ||
    ''
  const idDocumentStatementTypeBalIniDay =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDSTDD')?.idValue ||
    ''
  const idDocumentStatementTypeBalIniYear =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDSTYYYY')?.idValue ||
    ''
  const idCreditNote =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTNCR')?.idValue ||
    ''
  const idCreditNoteName =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTNCR')?.value || ''

  const idInvoice =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTFAC')?.idValue ||
    ''

  const idSaleNote =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTNTV')?.idValue ||
    ''
  const typeDocumentPyment = 'DOCANDNTV' // DOCANDNTV
  const idSaleNoteName =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTNTV')?.value || ''

  const rowsCashierTransactionDocumentsPayments = (
    cashierTransactionDocumentsData?.getCashierTransactionItemsViewByParams || []
  ).map((CashierTransactionDocumentItem) => ({
    ...CashierTransactionDocumentItem,
    typeDocumentGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        CashierTransactionDocumentItem.idCashierTransactionItemType
      ),
  }))

  const rowsTransactionReservationItem = reservationItem.reduce<IReservationItems[]>(
    (previous, current) => {
      const resReservationItem = transactionReservationItem.find(
        (transactionReservation) =>
          current.idReservation === transactionReservation.idReservation &&
          current.item.idReservationItem === transactionReservation.idReservationItem
      )
      if (resReservationItem) {
        previous.push({
          ...current,
          TOTAL_TO_PAY:
            sub(String(current.item?.totalPriceUSD), String(current.item?.totalPayedUSD)) || 0,
          idCashierTransaction: String(idCashierTransaction),
        })
      }
      return previous
    },
    []
  )

  const { data: entityInvoiceEmisor } = useFindFullEntityByIdQuery({
    variables: {
      idEntity: entityEmisorSunat,
    },
    skip: !entityEmisorSunat,
  })

  const { data: entityInvoiceCliente } = useFindFullEntityByIdQuery({
    variables: {
      idEntity: rowsTransactionReservationItem[0]?.idEntity,
    },
    skip: !rowsTransactionReservationItem[0]?.idEntity,
  })

  const dataFacturacion = new EntityInvoiceFactory().create(
    entityInvoiceEmisor?.findFullEntityById as FullEntityOutput,
    entityInvoiceCliente?.findFullEntityById as FullEntityOutput
  )

  const rowsTransactionDocumentsPayments = (
    transactionDocumentsPaymentsData?.getCashierTransactionDocumentsPyments || []
  ).map((CashierTransactionDocumentItem) => ({
    ...CashierTransactionDocumentItem,
    TOTAL_TO_PAY: 0,
    typeDocumentGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        CashierTransactionDocumentItem.idDocumentType
      ),
    typePaymentsGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        CashierTransactionDocumentItem.idRelatedDocumentTypePayment
      ),
  }))

  const currencyExchangeRate =
    currencyExchangeRatesData?.getCurrencyExchangeRatesByDateAndIdOu[0] || {}

  const registerPayment = async () => {
    const paymentsToPay = refPayments.current.getSelectedRows() ?? []
    const reservationsToPay = refReservations.current.getSelectedRows() ?? []
    const itemsReservations: Array<CreateCartReservationItemValueInput> = []
    let ri = 1
    reservationsToPay.forEach((element: {}) => {
      const data = new ReservationsPaymentsFactory().create({ ...element, itemNumber: ri })
      itemsReservations.push({
        idReservation: data.idReservation,
        idReservationItem: data.idReservationItem,
        amountTotal: 0,
        item: Number(data.item),
        pendingPayment: data.pendingPayment,
        idPaymentPercent: data.idReservation,
        valuePaymentPercent: 0,
        paymentAmount: Number(data.paymentAmount),
        description: '',
      })
      ri++
    })

    const itemsPayments: Array<CreateDocumentItemValueInput> = []
    let pi = 1
    paymentsToPay.forEach((element: {}) => {
      const data = new DocumentsPaymentsFactory().create({
        ...element,
        idCurrency1,
        idCurrency2,
        currencyExchangeRate,
        idCurrencyMN,
        itemNumber: pi,
      })
      itemsPayments.push({
        idDocument: data.idDocument,
        idDocumentItem: data.idDocumentItem,
        item: data.item,
        idPaymentDocumentType: data.idPaymentDocumentType,
        idPaymentDocumentTypeName: data.idPaymentDocumentTypeName,
        numberDocumentTransaction: data.numberDocumentTransaction,
        datePayment: data.idCurrency1,
        idCurrency1: data.idCurrency1,
        idCurrency2: data.idCurrency2,
        idCurrency3: data.idCurrency3,
        paymentAmount: data.paymentAmount,
        paymentGlosaAndNumber: data.paymentGlosaAndNumber,
        exchangeRate1: data.exchangeRate1,
        exchangeRate2: data.exchangeRate2,
        exchangeRate3: data.exchangeRate3,
        idCurrencyMN: data.idCurrencyMN,
        idCashierTransactionItemType: data.idCashierTransactionItemType,
        idCashierTransactionItemTypeName: data.idCashierTransactionItemTypeName,
      })
      pi++
    })

    if (itemsReservations.length <= 0) {
      toast.error(
        intl.formatMessage('pages.payments.form.cashier-transaction.errors.reservations'),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
      return
    }

    if (itemsPayments.length <= 0) {
      toast.error(intl.formatMessage('pages.payments.form.cashier-transaction.errors.payments'), {
        position: 'top-right',
        duration: 2000,
      })
      return
    }

    const validReservations = itemsReservations.filter((item) => item.paymentAmount <= 0).length > 0
    if (validReservations) {
      toast.error(
        intl.formatMessage('pages.payments.form.cashier-transaction.errors.reservations.amount'),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
      return
    }

    const validPayments = itemsPayments.filter((item) => item.paymentAmount <= 0).length > 0
    if (validPayments) {
      toast.error(
        intl.formatMessage('pages.payments.form.cashier-transaction.errors.payments.amount'),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
      return
    }

    const facturacionData = { ...dataFacturacion }

    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const newDocumentsPayments = await createPayment({
        variables: {
          createPayment: {
            idCashierTransaction,
            idOu: user?.idOu,
            idUser: user?.idUser,
            datePayment: getDateCurrent(),
            idEntity: user?.idEntity,
            idCurrency1,
            idCurrency2,
            idCurrency3: idCurrency1,
            idCurrencyMN,
            note: noteTransaction,
            reservationItem: itemsReservations,
            paymentItem: itemsPayments,
            idDocumentStatementTypeBalIniDoc,
            idDocumentStatementTypeBalIniMon,
            idDocumentStatementTypeBalIniDay,
            idDocumentStatementTypeBalIniYear,
            idCreditNote,
            idCreditNoteName,
            idInvoice,
            idInvoiceName: '01',
            typeDocumentPyment,
            idSaleNoteName,
            idSaleNote,
            CLIENTE_DIRECCION: facturacionData.CLIENTE_DIRECCION,
            CLIENTE_NOMBRE_RAZON_SOCIAL: facturacionData.CLIENTE_NOMBRE_RAZON_SOCIAL,
            CLIENTE_NUMERO_DOCUNENTO: facturacionData.CLIENTE_NUMERO_DOCUNENTO,
            CLIENTE_TIPO_DOCUMENTO: facturacionData.CLIENTE_TIPO_DOCUMENTO,
            EMISOR_DIRECCION: facturacionData.EMISOR_DIRECCION,
            EMISOR_RAZON_SOCIAL: facturacionData.EMISOR_RAZON_SOCIAL,
            EMISOR_RUC: facturacionData.EMISOR_RUC,
          },
        },
      })
      if (newDocumentsPayments.data?.createPayment) {
        const documentsPdf = newDocumentsPayments.data?.createPayment
        const s3Request: Promise<unknown>[] = []
        documentsPdf.forEach((e) => {
          s3Request.push(
            s3Process.uploadS3File(String(e.PDF), `${String(e.idDocument)}.pdf`, FilesTypes.PDF)
          )
        })
        await Promise.all(s3Request)
      }
      debounce(() => router.push(paths.payments.root), 3000)()
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  if (cashierTransactionLoading) return <Spinner />
  if (cashierTransactionDataError) return <p>Error</p>

  return (
    <ViewLayout>
      <StyledFormHeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.payments.transaction.title')}
          </Typography>
          <BreadCrumb items={items} />
        </Box>
      </StyledFormHeaderContainer>
      <StyledFormContentContainer>
        <Card>
          <CardContent>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }} spacing={{ xs: 2, md: 3 }}>
              <Grid item md={3} sm={12} xs={12}>
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.transaction.label.date'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <TextField
                      disabled
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={cashierTransactionData?.getCashierTransactionById.date.slice(0, 10)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.transaction.label.status'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <TextField
                      disabled
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={cashierTransactionData?.getCashierTransactionById.idStatus}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }} spacing={{ xs: 2, md: 3 }}>
              <Grid item md={3} sm={12} xs={12}>
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.transaction.label.note'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <TextField
                      onChange={(e) => {
                        setNoteTransaction(e.target.value)
                      }}
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={noteTransaction}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Grid item>
                <Typography variant="h5" fontWeight={700}>
                  {intl.formatMessage('pages.payments.table.cashier-transaction.reservation.title')}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                  onClick={() => {
                    router.push(paths.payments.reservation(idCashierTransaction!))
                  }}
                >
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.reservation.button.name'
                  )}
                </Button>
              </Grid>
            </Grid>
            <DataTable
              checkboxSelection
              rows={rowsTransactionReservationItem}
              columns={columnsReservationDisplay}
              getRowId={(row) => `${row.idReservation} - ${row.item.idReservationItem}`}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'createdAt', sort: 'desc' }],
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Grid item>
                <Typography variant="h5" fontWeight={700}>
                  {intl.formatMessage('pages.payments.table.cashier-transaction.payments.title')}
                </Typography>
              </Grid>
              <Grid display="flex" item gap="16px">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                >
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.payments.button.cancel'
                  )}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                  onClick={() => {
                    router.push(paths.payments.paymentsadd(idCashierTransaction!))
                  }}
                >
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.payments.button.record'
                  )}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                  onClick={() => {
                    router.push(paths.payments.payments(idCashierTransaction!))
                  }}
                >
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.payments.button.add'
                  )}
                </Button>
              </Grid>
            </Grid>
            <DataTable
              checkboxSelection
              autoHeight
              rows={rowsTransactionDocumentsPayments}
              columns={columnsPaymentsDisplay}
              getRowId={(row) => row.idDocument}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'date', sort: 'desc' }],
                },
              }}
            />
            <Grid display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                startIcon={<Add />}
                disabled={createPaymentLoading}
                onClick={registerPayment}
              >
                {intl.formatMessage(
                  'pages.payments.form.cashier-transaction.payments.button.to-pay'
                )}
              </Button>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Grid item>
                <Typography variant="h5" fontWeight={700}>
                  {intl.formatMessage('pages.payments.table.cashier-transaction.documents.title')}
                </Typography>
              </Grid>
            </Grid>
            <DataTable
              rows={rowsCashierTransactionDocumentsPayments}
              columns={columnsDocuments}
              getRowId={(row) => row.iddocument}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'date', sort: 'desc' }],
                },
              }}
            />
            <Grid display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                startIcon={<Logout />}
              >
                {intl.formatMessage('pages.payments.form.cashier-transaction.payments.button.exit')}
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

const StyledFormHeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`
const StyledFormContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & .MuiFormHelperText-root {
    margin-left: 0px;
  }
`
