import { FC } from 'react'
import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import { Box, Typography, Card, CardContent, TextField, Button, Grid } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useRouter } from 'next/router'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useGetDocumentsPymentsAllQuery } from '@/shared/graphql/generated/payments-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { paths } from '@/shared/routes/paths'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { useBuildBreadcrumbAdvances } from '../../utils/payment-breadcrumb-advances'
import { useBuildPaymentsAdvancesColumns } from '../../hooks/advances/use-build-payments-advances-columns'
import { GeneralParametersFormatters } from '../../utils/general-parameters-formatter'
import { useSearchAdvancesParametersForm } from '../../hooks/advances/use-search-advances'

const GENERAL_PARAMETERS_PAYMENTS = ['ACCTP', 'ACCCUR', 'ACCDST', 'ACCDT', 'EMSUNAT']

const AdvancesForm: FC = () => {
  const intl = useIntl()
  const router = useRouter()
  const items = useBuildBreadcrumbAdvances()
  const { user } = useAuth()

  const { searchAdvancesParameters } = useSearchAdvancesParametersForm()
  const { control, handleSubmit } = searchAdvancesParameters

  const { columns: columnsAdvances } = useBuildPaymentsAdvancesColumns()

  const { data: dataDocumentsAll, loading: searchLoading } = useGetDocumentsPymentsAllQuery({
    variables: {
      date: '',
      numDocumento: '',
      idOu: user?.idOu,
    },
    nextFetchPolicy: 'network-only',
  })

  const { data: typesDocumentGeneralParameter } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: GENERAL_PARAMETERS_PAYMENTS,
    },
  })

  const generalParametersFormattedGroup = new GeneralParametersFormatters(
    typesDocumentGeneralParameter?.getGeneralParametersByCodeArray || []
  )

  const rowsDocumentsAll = (dataDocumentsAll?.getDocumentsPymentsAll || []).map((documents) => ({
    ...documents,
    TOTAL_TO_PAY: 0,
    typeDocumentGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        documents.idDocumentType
      ),
    typePaymentsGeneralParameters:
      generalParametersFormattedGroup.searchByIdInGeneralParametersFormats(
        documents.idRelatedDocumentTypePayment
      ),
  }))

  const searchDocumentsAll = () => {}

  return (
    <ViewLayout>
      <StyledFormHeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.payments.advances.title')}
          </Typography>
          <BreadCrumb items={items} />
        </Box>
      </StyledFormHeaderContainer>

      <StyledFormContentContainer>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(searchDocumentsAll)}>
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
                        <TextField {...field} variant="outlined" size="small" fullWidth />
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
                      {intl.formatMessage('pages.payments.form.advances.button.find-advances')}
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
                  {intl.formatMessage('pages.payments.table.advances.title')}
                </Typography>
              </Grid>
              <Grid display="flex" item gap="16px">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  startIcon={<Add />}
                  onClick={() => {
                    router.push(paths.payments.advances.new)
                  }}
                >
                  {intl.formatMessage('pages.payments.form.advances.payments.button.add')}
                </Button>
              </Grid>
            </Grid>
            <DataTable
              rows={rowsDocumentsAll}
              columns={columnsAdvances}
              getRowId={(row) => row.idDocument}
            />
          </CardContent>
        </Card>
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

export default AdvancesForm

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
