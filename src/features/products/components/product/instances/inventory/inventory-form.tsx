import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { DateTime as LuxonDateTime } from 'luxon'
import { Controller, SubmitHandler } from 'react-hook-form'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Box, Button, Dialog, MenuItem, TextField } from '@mui/material'

import { useIntl } from '@/shared/hooks/use-intl'
import { InstanceInventoryFormValues } from '@/features/products/types/products-forms.types'
import { useInstanceInventoryForm } from '@/features/products/hooks/use-instance-inventory-form'
import {
  GetInventoryTransactionsDocument,
  useGetInventoryTransactionTypesQuery,
  useCreateInstanceInventoryTransactionMutation,
} from '@/shared/graphql/generated/products-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

interface InventoryFormProps {
  open: boolean
  handleClose: () => void
  itemToEdit: unknown | null
}

// TODO: Add integration for reservation and reservation item fields in form

export const InventoryForm: FC<InventoryFormProps> = ({ open, handleClose, itemToEdit }) => {
  const router = useRouter()
  const { user } = useAuth()
  const { instanceId } = router.query as { instanceId: string }

  const intl = useIntl()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useInstanceInventoryForm()

  const { data: inventoryTransactionTypesData } = useGetInventoryTransactionTypesQuery()
  const [createInventoryTransaction] = useCreateInstanceInventoryTransactionMutation({
    refetchQueries: [GetInventoryTransactionsDocument],
  })

  const onSubmit: SubmitHandler<InstanceInventoryFormValues> = async (formData) => {
    // const date = LuxonDateTime.fromISO(formData.date).toISODate()

    try {
      await createInventoryTransaction({
        variables: {
          createInventoryTransactionInput: {
            idOu: user?.idOu,
            date: formData.date,
            credit: formData.credit,
            debit: formData.debit,
            note: formData.note,
            idProductInstance: instanceId,
            idReservation: '',
            idReservationItem: '',
            idInventoryTransactionType: formData.inventoryTransactionType,
            idUserCreate: user?.idUser,
          },
        },
      })
      handleClose()
    } catch {
      // eslint-disable-next-line no-alert
      window.alert('Error creating inventory transaction')
    }
  }

  useEffect(() => {
    if (!open) {
      reset({
        date: '',
        inventoryTransactionType: '',
        note: '',
        credit: 0,
        debit: 0,
      })
    }
  }, [reset, open])

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <Box display="flex" flexDirection="column" gap="16px" padding="32px">
          <h2>{itemToEdit === null ? 'Add Transaction' : 'Edit Transaction'}</h2>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap="16px"
          >
            {/* <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={(date: LuxonDateTime | null) => {
                    field.onChange(date?.toISO() ?? '')
                  }}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      fullWidth
                      size="small"
                      error={errors.date !== undefined}
                      helperText={errors.date?.message && intl.formatMessage(errors.date.message)}
                      label="Departure Date"
                    />
                  )}
                />
              )}
            /> */}
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type="date"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={errors.date !== undefined}
                  helperText={errors.date?.message && intl.formatMessage(errors.date.message)}
                  label="Date"
                />
              )}
            />

            <Controller
              control={control}
              name="inventoryTransactionType"
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  size="small"
                  inputRef={field.ref}
                  error={errors.inventoryTransactionType !== undefined}
                  helperText={
                    errors.inventoryTransactionType?.message &&
                    intl.formatMessage(errors.inventoryTransactionType.message)
                  }
                  label="Transaction Type"
                >
                  <MenuItem value="">Select a type</MenuItem>
                  {inventoryTransactionTypesData?.getGeneralParametersByCode.generalParameterValue.map(
                    (type) => (
                      <MenuItem
                        key={type.idGeneralParameterValue}
                        value={type.idGeneralParameterValue}
                      >
                        {type.name}
                      </MenuItem>
                    )
                  )}
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="note"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  size="small"
                  error={errors.note !== undefined}
                  helperText={errors.note?.message && intl.formatMessage(errors.note.message)}
                  label="Note"
                />
              )}
            />

            <Controller
              control={control}
              name="credit"
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(event) => {
                    field.onChange(parseInt(event.target.value, 10))
                  }}
                  fullWidth
                  type="number"
                  size="small"
                  error={errors.credit !== undefined}
                  helperText={errors.credit?.message && intl.formatMessage(errors.credit.message)}
                  label="Credit"
                />
              )}
            />

            <Controller
              control={control}
              name="debit"
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(event) => {
                    field.onChange(parseInt(event.target.value, 10))
                  }}
                  fullWidth
                  type="number"
                  size="small"
                  error={errors.debit !== undefined}
                  helperText={errors.debit?.message && intl.formatMessage(errors.debit.message)}
                  label="Debit"
                />
              )}
            />

            <Box display="flex" justifyContent="flex-end" gap="16px">
              <Button type="button" variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </LocalizationProvider>
  )
}
