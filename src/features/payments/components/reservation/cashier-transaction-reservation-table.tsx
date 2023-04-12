import { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import { Box, Typography, Card, CardContent, TextField, Button, Grid } from '@mui/material'
import { Controller } from 'react-hook-form'
import { DataGrid } from '@mui/x-data-grid'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { ViewLayout } from '@/shared/components/view-layout'
import {
  useReservationsByFilterLazyQuery,
  useReservationsByFilterQuery,
} from '@/shared/graphql/generated/reservations-api'

import { useSearchReservationsParametersForm } from '../../hooks/reservation/use-search-reservations'
import { useBuildCashierTransactionReservationSearchColumns } from '../../hooks/reservation/use-build-cashier-transaction-reservation-search-columns'
import { useBuildReservationGenerateRows } from '../../hooks/reservation/use-build-reservation-generate-rows'
import { useBuildBreadcrumbCashierTransactionsReservations } from '../../utils/payment-breadcrumb-cashier-transaction-reservations'
import { SearchReservations } from '../../types/search-reservation'
import { useBuildCashierTransactionReservationItemsSearchColumns } from '../../hooks/reservation/use-build-cashier-transaction-reservation-items-search-columns'

const CashierTransactionReservation: FC = () => {
  const intl = useIntl()
  const items = useBuildBreadcrumbCashierTransactionsReservations()

  const { searchReservationsParameters } = useSearchReservationsParametersForm()
  const { control, handleSubmit } = searchReservationsParameters

  const [reservationSelected, setReservationSelected] = useState()
  const [reservationFilter, setReservationFilter] = useState({
    entity: '',
    reservationCode: '',
  })

  const [getReservations, { loading: searchLoading, data: reservationByEntityData }] =
    useReservationsByFilterLazyQuery({ fetchPolicy: 'network-only' })

  const { loading: searchItemsLoading, data: reservationItemsByEntityData } =
    useReservationsByFilterQuery({
      variables: {
        reservationQueryInput: {
          skip: 0,
          take: 15,
          entity: reservationFilter.entity,
          reservationCode: reservationFilter.reservationCode,
        },
      },
    })

  const { reservationItem: rowsReservationItems, profit } = useBuildReservationGenerateRows(
    reservationItemsByEntityData
  )

  const { reservations: rowsReservations } =
    useBuildReservationGenerateRows(reservationByEntityData)

  const { columns: columnsReservation } = useBuildCashierTransactionReservationSearchColumns({
    reservation: reservationSelected,
  })

  const { columns: columnsReservationsItems } =
    useBuildCashierTransactionReservationItemsSearchColumns({
      profit,
    })

  const onSearchReservations = async (searchReservations: SearchReservations) => {
    setReservationFilter((prevState) => ({
      ...prevState,
      entity: '',
      reservationCode: '',
    }))

    const searchParameters: SearchReservations = {
      take: 15,
      skip: 0,
    }

    if (searchReservations.date) {
      searchParameters.date = searchReservations.date
    }

    if (searchReservations.reservationCode) {
      searchParameters.reservationCode = searchReservations.reservationCode
    }

    if (searchReservations.fileNumber) {
      searchParameters.fileNumber = searchReservations.fileNumber
    }

    if (searchReservations.reservationID) {
      searchParameters.reservationID = searchReservations.reservationID
    }

    if (Object.keys(searchParameters).length === 0) {
      searchParameters.reservationCode = ''
    }

    await getReservations({
      variables: {
        reservationQueryInput: {
          entity: '0eb40cd8653711edbb510a54081e669b',
          ...searchParameters,
        },
      },
    })
  }

  useEffect(() => {
    getReservations({
      variables: {
        reservationQueryInput: {
          skip: 0,
          take: 15,
          entity: '0eb40cd8653711edbb510a54081e669b',
          reservationCode: '',
        },
      },
    })
  }, [getReservations])

  return (
    <ViewLayout>
      <StyledFormHeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.payments.reservation.title')}
          </Typography>
          <BreadCrumb items={items} />
        </Box>
      </StyledFormHeaderContainer>

      <StyledFormContentContainer>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSearchReservations)}>
              <Grid
                container
                display="flex"
                flexDirection="row"
                columns={{ xs: 12, sm: 12, md: 12 }}
                spacing={{ xs: 2, md: 3 }}
                marginBottom={1}
              >
                <Grid item display="flex" flexDirection="column" md={3} sm={12} xs={12}>
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.reservation.label.code'
                    )}
                  </Typography>
                  <Box display="flex" flexDirection="row" gap="16px">
                    <Controller
                      name="reservationCode"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.payments.form.cashier-transaction.reservation.label.code'
                          )}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item display="flex" flexDirection="column" md={3} sm={12} xs={12}>
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.reservation.label.date'
                    )}
                  </Typography>
                  <Box display="flex" flexDirection="row" gap="16px">
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
                </Grid>
              </Grid>
              <Grid
                container
                display="flex"
                flexDirection="row"
                columns={{ xs: 12, sm: 12, md: 12 }}
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid item display="flex" flexDirection="column" md={3} sm={12} xs={12}>
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.reservation.label.file-number'
                    )}
                  </Typography>
                  <Box display="flex" flexDirection="row" gap="16px">
                    <Controller
                      name="fileNumber"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.payments.form.cashier-transaction.reservation.label.file-number'
                          )}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item display="flex" flexDirection="column" md={3} sm={12} xs={12}>
                  <Typography>
                    {intl.formatMessage(
                      'pages.payments.form.cashier-transaction.reservation.label.entity'
                    )}
                  </Typography>
                  <Box display="flex" flexDirection="row" gap="16px">
                    <Controller
                      name="entity"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.payments.form.cashier-transaction.reservation.label.entity'
                          )}
                          variant="outlined"
                          size="small"
                          fullWidth
                          disabled
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  justifySelf="flex-end"
                  justifyContent="flex-end"
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifySelf={{ xs: 'center', sm: 'center', md: 'flex-end' }}
                    justifyContent={{ xs: 'center', sm: 'center', md: 'flex-end' }}
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
                        'pages.payments.form.cashier-transaction.reservation.button.find-reservation'
                      )}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
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
                    'pages.payments.form.cashier-transaction.reservation.label.find-reservation'
                  )}
                </Typography>
              </Grid>
            </Grid>
            <DataGrid
              autoHeight
              rows={rowsReservations}
              columns={columnsReservation}
              getRowId={(row) => row.code}
              onSelectionModelChange={async (code) => {
                setReservationSelected(undefined)
                const resReservationSelected = rowsReservations.find(
                  (reservation: { code: string }) => reservation?.code === code[0]
                )
                if (resReservationSelected) {
                  setReservationSelected(resReservationSelected)
                  setReservationFilter((prevState) => ({
                    ...prevState,
                    entity: '0eb40cd8653711edbb510a54081e669b',
                    reservationCode: String(code[0]),
                  }))
                }
              }}
              loading={searchLoading}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'entryDate', sort: 'desc' }],
                },
              }}
            />

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1, mt: 2 }}
            >
              <Grid item>
                <Typography variant="h5" fontWeight={700}>
                  {intl.formatMessage(
                    'pages.payments.form.cashier-transaction.reservation.label.find-reservation-items'
                  )}
                </Typography>
              </Grid>
            </Grid>
            <DataGrid
              disableSelectionOnClick
              checkboxSelection
              autoHeight
              rows={rowsReservationItems}
              columns={columnsReservationsItems}
              getRowId={(row) => `${row.idReservation} - ${row.item.idReservationItem}`}
              loading={searchItemsLoading}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'entryDate', sort: 'desc' }],
                },
              }}
            />
          </CardContent>
        </Card>
      </StyledFormContentContainer>
    </ViewLayout>
  )
}

export default CashierTransactionReservation

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
