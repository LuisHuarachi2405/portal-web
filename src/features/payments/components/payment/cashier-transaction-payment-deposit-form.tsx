import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  MenuItem,
  debounce,
  CircularProgress,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  FullEntityOutput,
  useFindFullEntityByIdQuery,
  useGetEntitiesQuery,
} from '@/shared/graphql/generated/entities-api'
import {
  useCreateDocumentMutation,
  useGetBankAccountsByIdOuQuery,
  useGetCurrencyExchangeRatesByDateAndIdOuLazyQuery,
} from '@/shared/graphql/generated/payments-api'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'

import { useBuildBreadcrumbCashierTransactionsPayments } from '../../utils/payment-breadcrumb-cashier-transaction-payments'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { GeneralParameterFormatter } from '../../types/general-parameter-formatter'
import {
  UsePaymentsFormExtraProps,
  usePaymentsForm,
} from '../../hooks/payments/use-payments-create-forms'
import { CreatePaymentsForm } from '../../types/create-paymets-form.types'
import { getDateCurrent } from '../../utils/date'
import { UploadS3 } from '../../../../shared/utils/s3/s3'
import { FilesTypes } from '../../../../shared/utils/s3/s3-type-file'
import { EntityInvoiceFactory } from '../../utils/Factory/entityInvoiceFactory'

interface PaymentsFormProps extends UsePaymentsFormExtraProps {
  isEditing?: boolean
}

const GENERAL_PARAMETERS_PAYMENTS = ['ACCTP', 'ACCCUR', 'ACCDST', 'ACCDT', 'EMSUNAT']

const CashierTransactionDepositForm: FC<PaymentsFormProps> = (props) => {
  const { prevValues } = props

  const intl = useIntl()
  const { user } = useAuth()
  const items = useBuildBreadcrumbCashierTransactionsPayments()
  const router = useRouter()
  let s3Process: UploadS3
  const [selectedTypePayments, setSelectedTypePayments] = useState('')

  const { idCashierTransaction } = router.query as { idCashierTransaction?: string }

  const methods = usePaymentsForm({
    prevValues,
    type: selectedTypePayments,
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
  })

  const { data: bankAccountsData } = useGetBankAccountsByIdOuQuery({
    variables: {
      idOu: user?.idOu,
    },
  })

  const { data: entitiesData } = useGetEntitiesQuery({
    variables: {
      filter: {
        page: 1,
      },
    },
  })

  const [getCurrencyExchangeRatesByDateAndIdOu, { loading: searchCurrencyLoading }] =
    useGetCurrencyExchangeRatesByDateAndIdOuLazyQuery()

  const [createDocument, { loading: createDocumentLoading }] = useCreateDocumentMutation({
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

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const entityEmisorSunat =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('EMISORSUNATID')
      ?.value || ''
  const paymentsTypes =
    generalParametersFormattedGroup.searchByCodeParentInGeneralParametersFormats('ACCTP')
  const idCurrencyMN =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''
  const idCurrency1 =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('USD')?.idValue || ''
  const idCurrency2 =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('SOL')?.idValue || ''
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
  let idDocumentTypeCPECOD = ''
  let idDocumentTypeCPEName =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTFAC')?.value || ''
  let idDocumentTypeRel = ''
  let idDocumentTypeRelCod = ''

  const typesCurrency =
    generalParametersFormattedGroup.searchByCodeParentInGeneralParametersFormats('ACCCUR')

  const { data: entityInvoiceEmisor } = useFindFullEntityByIdQuery({
    variables: {
      idEntity: entityEmisorSunat,
    },
    skip: !entityEmisorSunat,
  })

  const { data: entityInvoiceCliente } = useFindFullEntityByIdQuery({
    variables: {
      idEntity: user?.idEntity,
    },
    skip: !user?.idEntity,
  })

  const dataFacturacion = new EntityInvoiceFactory().create(
    entityInvoiceEmisor?.findFullEntityById as FullEntityOutput,
    entityInvoiceCliente?.findFullEntityById as FullEntityOutput
  )

  const onSubmit = async (data: CreatePaymentsForm) => {
    const idDocumentTypeName =
      paymentsTypes.find((types) => types.code === data.idDocumentType)?.code || ''
    const idDocumentType =
      paymentsTypes.find((types) => types.code === data.idDocumentType)?.idValue || ''
    let idCurrency3 = ''
    let description = ''
    let number = ''
    let exchangeRate1 = 0
    let exchangeRate3 = 0
    let facturacionData = { ...dataFacturacion }

    if (idDocumentTypeName === 'ACCCTITANT') {
      idCurrency3 =
        bankAccountsData?.getBankAccountsByIdOu.find(
          (bankAccount) => bankAccount.idBankAccount === data.idBankAccount
        )?.idCurrency || ''
      idDocumentTypeRelCod =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTPDEP')?.code ||
        ''
      idDocumentTypeRel =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTPDEP')
          ?.idValue || ''
      description = data.note
      number = data.number

      const dataFetchCurrency1 = await getCurrencyExchangeRatesByDateAndIdOu({
        variables: {
          idOu: user?.idOu,
          date: getDateCurrent(),
          idCurrency1,
          idCurrency2: idCurrencyMN,
        },
      })
      exchangeRate1 = getCurrencySelected(dataFetchCurrency1)

      const dataFetchCurrency3 = await getCurrencyExchangeRatesByDateAndIdOu({
        variables: {
          idOu: user?.idOu,
          date: getDateCurrent(),
          idCurrency1: idCurrency3,
          idCurrency2: idCurrencyMN,
        },
      })

      exchangeRate3 = getCurrencySelected(dataFetchCurrency3)

      idDocumentTypeCPEName =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTFAC')?.value ||
        ''
      idDocumentTypeCPECOD =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTFAC')
          ?.idValue || ''
    } else {
      idCurrency3 = data.typeCurrency
      idDocumentTypeRelCod =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCTPEFE')?.code ||
        ''
      idDocumentTypeRel =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTPE')
          ?.idValue || ''
      description = 'EFECTIVO'
      number = ''

      idDocumentTypeCPEName =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTPE')?.value ||
        ''
      idDocumentTypeCPECOD =
        generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDTPE')
          ?.idValue || ''

      const dataFetchCurrency1 = await getCurrencyExchangeRatesByDateAndIdOu({
        variables: {
          idOu: user?.idOu,
          date: getDateCurrent(),
          idCurrency1,
          idCurrency2: idCurrencyMN,
        },
      })
      exchangeRate1 = getCurrencySelected(dataFetchCurrency1)

      const dataFetchCurrency3 = await getCurrencyExchangeRatesByDateAndIdOu({
        variables: {
          idOu: user?.idOu,
          date: getDateCurrent(),
          idCurrency1: idCurrency3,
          idCurrency2: idCurrencyMN,
        },
      })
      exchangeRate3 = getCurrencySelected(dataFetchCurrency3)

      facturacionData = {
        EMISOR_RAZON_SOCIAL: '',
        EMISOR_DIRECCION: '',
        CLIENTE_TIPO_DOCUMENTO: '',
        CLIENTE_NUMERO_DOCUNENTO: '',
        CLIENTE_NOMBRE_RAZON_SOCIAL: '',
        CLIENTE_DIRECCION: '',
        EMISOR_RUC: '',
      }
    }

    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const newPaymentes = await createDocument({
        variables: {
          createDocumentValueInput: {
            idOu: user?.idOu,
            idDocumentType,
            idBankAccount: data.idBankAccount || null,
            idPaymentGateway: null,
            number,
            date: data.date,
            description,
            idEntity: user?.idEntity,
            idCurrency1,
            exchangeRate3,
            idCurrency2,
            idCurrency3,
            amount3: Number(data.amount),
            exchangeRate1,
            idUser: user?.idEntity,
            idCurrencyMN,
            idDocumentStatementTypeBalIniDoc,
            idDocumentStatementTypeBalIniMon,
            idDocumentStatementTypeBalIniDay,
            idDocumentStatementTypeBalIniYear,
            idDocumentTypeName,
            idDocumentTypeCPECOD,
            idDocumentTypeCPEName,
            idDocumentTypeRel,
            idDocumentTypeRelCod,
            ...facturacionData,
            idCashierTransaction,
          },
        },
      })

      if (newPaymentes.data?.createDocument) {
        if (newPaymentes.data?.createDocument.TYPE === '01') {
          const { PDF, idDocument } = newPaymentes.data?.createDocument || {}
          await s3Process.uploadS3File(String(PDF), `${String(idDocument)}.pdf`, FilesTypes.PDF)
        }
        debounce(() => router.push(paths.payments.edit(idCashierTransaction!)), 0)()
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const accountingBankData = bankAccountsData?.getBankAccountsByIdOu || []
  const rowsEntitiesData = entitiesData?.getEntities.results || []

  const rowsAccountingBankData = accountingBankData.map((accountingBank) => ({
    ...accountingBank,
    bank: rowsEntitiesData.find((entity) => entity.idEntity === accountingBank.idEntity),
    currency: generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
      accountingBank.idCurrency
    ),
  }))

  const getCurrencySelected = (dataFetchCurrency: any) => {
    if (
      dataFetchCurrency &&
      dataFetchCurrency.data &&
      dataFetchCurrency.data.getCurrencyExchangeRatesByDateAndIdOu.length > 0
    ) {
      return dataFetchCurrency.data.getCurrencyExchangeRatesByDateAndIdOu[0].buyExchangeRate
    }
    return 0
  }

  return (
    <ViewLayout>
      <StyledFormHeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.payments.payments.register.title')}
          </Typography>
          <BreadCrumb items={items} />
        </Box>
      </StyledFormHeaderContainer>
      <StyledFormContentContainer>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display="flex" flexDirection="column" gap="16px">
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.payments.label.date'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      width: 400,
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          fullWidth
                          type="date"
                          error={!!errors.date}
                          helperText={
                            errors.date?.message && intl.formatMessage(errors.date.message)
                          }
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap="16px">
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.payments.label.payment-type'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      width: 400,
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Controller
                      name="idDocumentType"
                      control={control}
                      render={({ field }) => (
                        <Box width="100%">
                          <TextField
                            {...field}
                            variant="outlined"
                            size="small"
                            select
                            fullWidth
                            value={field.value}
                            defaultValue="default"
                            SelectProps={{
                              value: field.value,
                              onChange: (e) => {
                                field.onChange(e.target.value)
                                setSelectedTypePayments(e?.target?.value as string)
                              },
                            }}
                            error={!!errors.idDocumentType}
                            helperText={
                              errors.idDocumentType?.message &&
                              intl.formatMessage(errors.idDocumentType.message)
                            }
                          >
                            <MenuItem value="" disabled>
                              Choose payment type
                            </MenuItem>
                            {paymentsTypes.map((e: GeneralParameterFormatter) => (
                              <MenuItem value={e.code} key={e.code}>
                                {e.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>
                      )}
                    />
                  </Box>
                </Box>
              </Box>

              {selectedTypePayments === 'ACCCTITANT' && (
                <>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.label.bank'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="idBankAccount"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              id="demo-simple-select"
                              variant="outlined"
                              size="small"
                              select
                              fullWidth
                              value={field.value}
                              defaultValue="default"
                              SelectProps={{
                                value: field.value,
                                onChange: (e) => {
                                  field.onChange(e.target.value)
                                },
                              }}
                              error={!!errors.idBankAccount}
                              helperText={
                                errors.idBankAccount?.message &&
                                intl.formatMessage(errors.idBankAccount.message)
                              }
                            >
                              {rowsAccountingBankData?.map((e) => (
                                <MenuItem value={e.idBankAccount} key={e.idBankAccount}>
                                  {e.currency.name} / {e.bank?.commercialName} / {e.number}
                                </MenuItem>
                              ))}
                            </TextField>
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.label.transaction-number'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="number"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="outlined"
                              size="small"
                              fullWidth
                              error={!!errors.number}
                              helperText={
                                errors.number?.message && intl.formatMessage(errors.number.message)
                              }
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.label.note'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="note"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="outlined"
                              size="small"
                              fullWidth
                              error={!!errors.note}
                              helperText={
                                errors.note?.message && intl.formatMessage(errors.note.message)
                              }
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.label.amount'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="amount"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="outlined"
                              size="small"
                              fullWidth
                              error={!!errors.amount}
                              helperText={
                                errors.amount?.message && intl.formatMessage(errors.amount.message)
                              }
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>
                </>
              )}

              {selectedTypePayments === 'ACCTPEFE' && (
                <>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.deposit.form.type-currency'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="typeCurrency"
                          control={control}
                          render={({ field }) => (
                            <Box width="100%">
                              <TextField
                                {...field}
                                variant="outlined"
                                size="small"
                                select
                                fullWidth
                                value={field.value}
                                defaultValue=""
                                SelectProps={{
                                  value: field.value,
                                  onChange: async (e) => {
                                    field.onChange(e.target.value)
                                    const dataCurrency =
                                      await getCurrencyExchangeRatesByDateAndIdOu({
                                        variables: {
                                          idOu: user?.idOu,
                                          date: getDateCurrent(),
                                          idCurrency1: e.target.value,
                                          idCurrency2: idCurrencyMN,
                                        },
                                      })
                                    if (dataCurrency) {
                                      setValue(
                                        'exchangeRate',
                                        String(getCurrencySelected(dataCurrency))
                                      )
                                      return
                                    }
                                    setValue('exchangeRate', String(0))
                                  },
                                }}
                                error={!!errors.typeCurrency}
                                helperText={
                                  errors.typeCurrency?.message &&
                                  intl.formatMessage(errors.typeCurrency.message)
                                }
                              >
                                <MenuItem value="" disabled>
                                  Choose type currency
                                </MenuItem>
                                {typesCurrency.map((e: any) => (
                                  <MenuItem value={e.idValue} key={e.code}>
                                    {e.name}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Box>
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.deposit.form.exchange-rate'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="exchangeRate"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="outlined"
                              size="small"
                              disabled
                              fullWidth
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {intl.formatMessage(
                          'pages.payments.form.cashier-transaction.payments.label.amount'
                        )}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="16px"
                        sx={{
                          width: 400,
                          paddingBottom: 1,
                          paddingTop: 1,
                        }}
                      >
                        <Controller
                          name="amount"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="outlined"
                              size="small"
                              fullWidth
                              error={!!errors.amount}
                              helperText={
                                errors.amount?.message && intl.formatMessage(errors.amount.message)
                              }
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                  disabled={createDocumentLoading}
                >
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.payments.button.add-payment'
                  )}
                </Button>
                {createDocumentLoading && searchCurrencyLoading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Box>
            </form>
          </CardContent>
        </Card>
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

export default CashierTransactionDepositForm

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
