import { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import { useRouter } from 'next/router'
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  MenuItem,
} from '@mui/material'
import { Controller } from 'react-hook-form'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetDocumentsPymentsLazyQuery } from '@/shared/graphql/generated/payments-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { useSearchCashierTransactionPaymentsParametersForm } from '../../hooks/payments/use-search-cashier-transaction-payments'
import { useBuildCashierTransactionPaymentsSearchColumns } from '../../hooks/payments/use-build-cashier-transaction-payments-search-columns'
import { useBuildBreadcrumbItems } from '../../utils/payment-breadcrumb-items'
import { SearchCashierTransactionPayments } from '../../types/search-cashier-transaction-payments'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { GeneralParameterFormatter } from '../../types/general-parameter-formatter'

const GENERAL_PARAMETERS_PAYMENTS = ['ACCDT', 'ACCCTIT', 'ACCTP', 'ACCCUR', 'ACCDST']

const CashierTransactionTable: FC = () => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()

  const items = useBuildBreadcrumbItems()

  const { columns: columnsPayments } = useBuildCashierTransactionPaymentsSearchColumns()

  const { searchCashierTransactionPaymentsParameters } =
    useSearchCashierTransactionPaymentsParametersForm()
  const { control, handleSubmit } = searchCashierTransactionPaymentsParameters
  const { idCashierTransaction } = router.query as { idCashierTransaction?: string }

  const [getDocumentsPayments, { loading: searchLoading, data }] = useGetDocumentsPymentsLazyQuery()

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
    fetchPolicy: 'network-only',
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const onSearchPayments = async (searchPayments: SearchCashierTransactionPayments) => {
    await getDocumentsPayments({
      variables: {
        date: searchPayments.date!,
        idDocumentTypeName: searchPayments.DocumentTypeTrx!,
        numDocumento: searchPayments.numDocumento!,
        status: 'ACTIVO',
        idOu: user?.idOu,
        idEntity: user?.idEntity,
      },
    })
  }

  const paymentsTypes =
    generalParametersFormattedGroup.searchByCodeParentInGeneralParametersFormats('ACCTP')

  const rowsDocumentsPayments = (data?.getDocumentsPyments || []).map((DocumentItemPayment) => ({
    ...DocumentItemPayment,
    typeDocumentGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        DocumentItemPayment.idDocumentType as string
      ),
    typePaymentsGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        DocumentItemPayment.idRelatedDocumentTypePayment as string
      ),
    idCashierTransaction,
  }))

  useEffect(() => {
    getDocumentsPayments({
      variables: {
        date: '',
        idDocumentTypeName: '',
        numDocumento: '',
        status: 'ACTIVO',
        idOu: user?.idOu,
        idEntity: user?.idEntity,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ViewLayout>
      <StyledFormHeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.payments.payments.title')}
          </Typography>
          <BreadCrumb items={items} />
        </Box>
      </StyledFormHeaderContainer>

      <StyledFormContentContainer>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSearchPayments)}>
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                  gap: { xs: '0px', md: '16px', lg: '16px' },
                }}
                gap="16px"
              >
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
                      width: { xs: '100%', md: '400px', lg: '400px' },
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Controller
                      name="DocumentTypeTrx"
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
                              onChange: (e) => {
                                field.onChange(e.target.value)
                              },
                            }}
                          >
                            <MenuItem value="" key="">
                              All payment type
                            </MenuItem>
                            {paymentsTypes.map((e: GeneralParameterFormatter) => (
                              <MenuItem value={e.idValue} key={e.idValue}>
                                {e.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>
                      )}
                    />
                  </Box>
                </Box>
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
                      width: { xs: '100%', md: '400px', lg: '400px' },
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
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                  gap: { xs: '0px', md: '16px', lg: '16px' },
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.payments.label.document-number'
                    )}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      width: { xs: '100%', md: '400px', lg: '400px' },
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Controller
                      name="numDocumento"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.payments.form.cashier-transaction.payments.label.document-number'
                          )}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifySelf="flex-end"
                  justifyContent="flex-end"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="16px"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                      startIcon={<Add />}
                      disabled={searchLoading}
                    >
                      {intl.formatMessage(
                        'pages.payments.form.cashier-transaction.payments.button.find-payment'
                      )}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
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
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.payments.label.find-payment'
                  )}
                </Typography>
              </Grid>
            </Grid>
            <DataTable
              rows={rowsDocumentsPayments}
              columns={columnsPayments}
              getRowId={(row) => row.idDocument}
              checkboxSelection
              initialState={{
                sorting: {
                  sortModel: [{ field: 'date', sort: 'desc' }],
                },
              }}
            />
          </CardContent>
        </Card>
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

export default CashierTransactionTable

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
