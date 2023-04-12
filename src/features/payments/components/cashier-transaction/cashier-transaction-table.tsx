import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import {
  useGetCashierTransactionsByParamsQuery,
  useGetAccountingPeriodsByIdOuQuery,
  useCreateAccountingPeriodAnioMutation,
  useCreateAccountingPeriodAnioMonthMutation,
  useCreateAccountingPeriodAnioMonthDayMutation,
  useGetDailyCashierOpenByIdOuAndDateQuery,
  useGetNumbersDailyCashierByDateAndIdOuQuery,
  useCreateCashierTransactionMutation,
} from '@/shared/graphql/generated/payments-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { useSearchTransactionParametersForm } from '../../hooks/cashier-transaction/use-search-transaction-form'
import { useBuildCashierTransactionColumns } from '../../hooks/cashier-transaction/use-build-cashier-transaction-columns'
import { useBuildBreadcrumbItems } from '../../utils/payment-breadcrumb-items'
import { SearchValue } from '../../types/search-transaction.types'
import { isNumber } from '../../utils/numbers'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { getDateCurrent } from '../../utils/date'

const TYPES_DOCUMENT_PAYMENTS = ['ACCDCT', 'ACCCTT', 'ACCDST', 'ACCCTIT', 'ACCAPT']

const GeneralParametersForm: FC = () => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const items = useBuildBreadcrumbItems()

  const { searchTransactionParameters } = useSearchTransactionParametersForm()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = searchTransactionParameters

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: TYPES_DOCUMENT_PAYMENTS,
    },
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const currentDate = getDateCurrent()
  const currentDateYear = currentDate.slice(0, 4)
  const idOu = user?.idOu
  const idEntity = user?.idEntity
  const idUser = user?.idUser
  const idAccountingPeriodTypeDD =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCAPTDD')?.idValue ||
    ''
  const idAccountingPeriodTypeMM =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCAPTMM')?.idValue ||
    ''
  const idAccountingPeriodTypeYY =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCAPTYYYY')?.idValue ||
    ''
  const idDailyCashierType =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCDCTUSR')?.idValue ||
    ''
  const idCashierTransactionType =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCCTTPUS')?.idValue ||
    ''
  const idCashierTransactionTypeName =
    generalParametersFormattedGroup.searchByCodeInGeneralParametersFormats('ACCCTITPG')?.code || ''

  const [getSearchParamValueInput, setSearchParamValueInput] = useState<string>('')

  const {
    data,
    loading,
    error,
    refetch: refetchCashierTransactionsByParams,
  } = useGetCashierTransactionsByParamsQuery({
    variables: {
      note: getSearchParamValueInput,
      date: getSearchParamValueInput,
      amount: isNumber(getSearchParamValueInput) ? Number(getSearchParamValueInput) : 0,
    },
    fetchPolicy: 'network-only',
  })

  const { columns } = useBuildCashierTransactionColumns({
    refetch: refetchCashierTransactionsByParams,
  })

  const { data: dataAccountingPeriodsByParams } = useGetAccountingPeriodsByIdOuQuery({
    variables: {
      idOu,
    },
  })

  const { data: dataDailyCashierOpenByIdOuAndDate } = useGetDailyCashierOpenByIdOuAndDateQuery({
    variables: {
      idOu,
      date: currentDate,
    },
  })

  const { data: dataNumbersDailyCashierByDateAndIdOu } =
    useGetNumbersDailyCashierByDateAndIdOuQuery({
      variables: {
        idOu,
        date: currentDate,
      },
    })

  const [createAccountingPeriodAnio] = useCreateAccountingPeriodAnioMutation({
    onError: () => {
      toast.error(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.error-accounting-period-year-created-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
  })

  const [createAccountingPeriodAnioMonth] = useCreateAccountingPeriodAnioMonthMutation({
    onError: () => {
      toast.error(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.error-accounting-period-year-month-created-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
  })

  const [createAccountingPeriodAnioMonthDay] = useCreateAccountingPeriodAnioMonthDayMutation({
    onError: () => {
      toast.error(
        intl.formatMessage(
          'pages.payments.table.cashier-transaction.error-accounting-period-year-month-day-created-message'
        ),
        {
          position: 'top-right',
          duration: 2000,
        }
      )
    },
  })

  const [createCashierTransaction, { loading: createCashierTransactionLoading }] =
    useCreateCashierTransactionMutation({
      onError: () => {
        toast.error(
          intl.formatMessage(
            'pages.payments.table.cashier-transaction.error-cashier-transaction-created-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
      },
      onCompleted: (response) => {
        const { idCashierTransaction } = response.createCashierTransaction
        toast.success(
          intl.formatMessage(
            'pages.payments.table.cashier-transaction.success-cashier-transaction-created-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        router.push(paths.payments.edit(idCashierTransaction))
      },
    })

  const onSubmit = (formData: SearchValue) => {
    setSearchParamValueInput(formData.search)
  }

  const onClickGenerateCashierTransaction = async () => {
    // eslint-disable-next-line no-underscore-dangle
    if (dataAccountingPeriodsByParams?.getAccountingPeriodsByIdOu?._count! <= 0) {
      const periodoAnio = createAccountingPeriodAnio({
        variables: {
          accountingPeriodValueInput: {
            idOu,
            codeAnio: currentDateYear,
            idAccountingPeriodType: idAccountingPeriodTypeYY,
            idUserCreate: idEntity,
          },
        },
      })
      const periodoAnioMes = createAccountingPeriodAnioMonth({
        variables: {
          accountingPeriodValueInput: {
            idOu,
            codeAnio: currentDateYear,
            idAccountingPeriodType: idAccountingPeriodTypeMM,
            idUserCreate: idEntity,
          },
        },
      })
      const periodoAnioMesDay = createAccountingPeriodAnioMonthDay({
        variables: {
          createAccountingPeriodAnioMonthDay: {
            idOu,
            codeAnio: currentDateYear,
            idAccountingPeriodType: idAccountingPeriodTypeDD,
            idUserCreate: idEntity,
          },
        },
      })

      await Promise.all([periodoAnio, periodoAnioMes, periodoAnioMesDay])
    }

    let idDailyCashier: any = null

    // eslint-disable-next-line no-underscore-dangle
    if (dataNumbersDailyCashierByDateAndIdOu?.getNumbersDailyCashierByDateAndIdOu?._count! > 0) {
      const dailyCashierOpenCount =
        dataDailyCashierOpenByIdOuAndDate?.getDailyCashierOpenByIdOuAndDate?.length! > 1

      if (dailyCashierOpenCount) {
        throw new Error(
          intl.formatMessage(
            'pages.payments.table.cashier-transaction.error-open-daily-cashier-message'
          )
        )
      }

      idDailyCashier =
        dataDailyCashierOpenByIdOuAndDate?.getDailyCashierOpenByIdOuAndDate[0].idDailyCashier
    }

    await createCashierTransaction({
      variables: {
        createCashierTransactionValueInput: {
          idOu,
          idDailyCashier,
          idEntity,
          date: currentDate,
          note: 'Note of transaction',
          idCashierTransactionType,
          idCashierTransactionTypeName,
          idUser,
          idDailyCashierType,
        },
      },
    })
  }

  const rowsCashierTransactions = data?.getCashierTransactionsByParams || []

  if (error) return <p>Error</p>

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
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '2fr', md: '2fr 2fr', xl: '1.3fr 3fr' },
                gridTemplateRows: { xs: '1fr', sm: '2fr', md: '1fr' },
                gap: 1,
              }}
            >
              <Box
                sx={{ gridRow: { xs: '1', md: '1' }, gridColumn: { xs: 'span 1', md: '1' } }}
                display="flex"
                flexDirection="column"
              >
                <Typography>
                  {intl.formatMessage('pages.payments.form.search.transaction.label.name')}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>{errors.search && errors.search.message}</p>
                  <Box display="flex" flexDirection="row" gap="16px">
                    <Controller
                      name="search"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.payments.form.search.transaction.input.name'
                          )}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                    <Button variant="contained" startIcon={<Add />} type="submit">
                      {intl.formatMessage('pages.payments.form.search.transaction.button.name')}
                    </Button>
                  </Box>
                </form>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{ gridRow: { xs: '2', md: '1' }, gridColumn: { xs: 'span 1', md: '3' } }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<Add />}
                  disabled={createCashierTransactionLoading}
                  onClick={() => {
                    onClickGenerateCashierTransaction()
                  }}
                >
                  {intl.formatMessage('pages.payments.form.add.transaction.button.name')}
                </Button>
                {createCashierTransactionLoading && (
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
            </Box>
          </CardContent>
        </Card>

        <DataTable
          rows={rowsCashierTransactions}
          loading={loading}
          columns={columns}
          getRowId={(row) => row.idCashierTransaction}
          initialState={{
            sorting: {
              sortModel: [{ field: 'date', sort: 'desc' }],
            },
          }}
        />
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

export default GeneralParametersForm

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
