import { FC, useEffect, SetStateAction, Dispatch } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, CircularProgress, Dialog, MenuItem, TextField } from '@mui/material'
import { DateTime as LuxonDateTime } from 'luxon'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import toast from 'react-hot-toast'

import { useIntl } from '@/shared/hooks/use-intl'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import { Product, ProductInstance } from '@/shared/graphql/generated/products-api'
import {
  GetRateInstancesByProductDocument,
  GetRatesByProductDocument,
  Rate,
  useCreateRateInstanceMutation,
  useCreateRateMutation,
  useUpdateRateMutation,
} from '@/shared/graphql/generated/rates-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { useRateForm } from '../hooks/use-rates-form'
import { RateFormValues } from '../types/rates-forms.types'

interface RateFormProps {
  open: boolean
  handleClose: () => void
  itemToEdit: Rate | null
  productSelected: Product
  productInstanceSelected: ProductInstance
  setRateSelected: Dispatch<SetStateAction<Rate>>
}

export const RateForm: FC<RateFormProps> = (props) => {
  const {
    itemToEdit,
    open,
    handleClose,
    productSelected,
    productInstanceSelected,
    setRateSelected,
  } = props
  const intl = useIntl()
  const { user } = useAuth()

  const { data: dataTypeRate } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATRT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const listTypesRate = dataTypeRate?.getGeneralParametersByCode.generalParameterValue ?? []

  const [createRate, { loading: createRateLoading }] = useCreateRateMutation({
    refetchQueries: [GetRatesByProductDocument, GetRateInstancesByProductDocument],
    onCompleted: () => {
      toast.success('Rate Created', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const [createRateInstances, { loading: createRateInstancesLoading }] =
    useCreateRateInstanceMutation({
      refetchQueries: [GetRateInstancesByProductDocument, GetRatesByProductDocument],
      onCompleted: () => {
        toast.success('Rate Instances Created', {
          position: 'top-right',
          duration: 2000,
        })
      },
    })

  const [updateRate, { loading: updateRateLoading }] = useUpdateRateMutation({
    refetchQueries: [GetRatesByProductDocument],
    onCompleted: () => {
      toast.success('Rate Updated', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useRateForm()

  const onSubmit: SubmitHandler<RateFormValues> = async (formData) => {
    try {
      if (itemToEdit !== null) {
        await updateRate({
          variables: {
            rate: {
              idRate: itemToEdit.idRate,
              idOu: user?.idOu,
              idRateType: formData.idRateType,
              code: formData.code,
              description: formData.description,
              idUserCreate: user?.idUser,
              idUserUpdate: user?.idUser,
            },
          },
        })
        handleClose()

        return
      }

      const rateCreate = await createRate({
        variables: {
          rate: {
            idRate: null,
            idOu: user?.idOu,
            idRateType: formData.idRateType,
            code: formData.code,
            description: formData.description,
            idUserCreate: user?.idUser,
            idUserUpdate: user?.idUser,
          },
        },
      })

      await createRateInstances({
        variables: {
          createRateInstanceInput: {
            endDate: formData.endDate,
            startDate: formData.startDate,
            idRate: rateCreate.data?.createRate.idRate,
            idOu: user?.idOu,
            idProduct: productSelected.idProduct,
            idProductInstance: productInstanceSelected.idProductInstance,
            idUserCreate: user?.idUser,
            idUserUpdate: user?.idUser,
          },
        },
      })

      setRateSelected(rateCreate as Rate)
      handleClose()
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  useEffect(() => {
    if (open === true && itemToEdit !== null) {
      const startDate = itemToEdit.rateInstance?.find((rateInstance) => rateInstance.startDate)
      const endDate = itemToEdit.rateInstance?.find((rateInstance) => rateInstance.endDate)

      reset({
        code: itemToEdit.code,
        description: itemToEdit.description,
        idRateType: itemToEdit.idRateType,
        startDate: startDate?.startDate,
        endDate: endDate?.endDate,
      })
    }
  }, [reset, open, itemToEdit])

  useEffect(() => {
    if (open === false) {
      reset({
        code: '',
        description: '',
        startDate: '',
        endDate: '',
        idRateType: '',
      })
    }
  }, [reset, open])

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" disableEscapeKeyDown fullWidth>
        <Box display="flex" flexDirection="column" gap="16px" padding="32px">
          <h2>{itemToEdit === null ? 'Add Rate' : 'Edit Rate'}</h2>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap="16px"
          >
            <Controller
              control={control}
              name="code"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  error={!!errors.code}
                  helperText={errors.code?.message && intl.formatMessage(errors.code?.message)}
                  label="Code"
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  error={!!errors.description}
                  helperText={
                    errors.description?.message && intl.formatMessage(errors.description?.message)
                  }
                  label="description"
                />
              )}
            />

            {itemToEdit === null && (
              <>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={(date: LuxonDateTime | null) => {
                        field.onChange(date?.toISO() ?? '')
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          size="small"
                          error={!!errors.startDate}
                          helperText={
                            errors.startDate?.message &&
                            intl.formatMessage(errors.startDate?.message)
                          }
                          label="Start Date"
                        />
                      )}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="endDate"
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={(date: LuxonDateTime | null) => {
                        field.onChange(date?.toISO() ?? '')
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          size="small"
                          error={!!errors.endDate}
                          helperText={
                            errors.endDate?.message && intl.formatMessage(errors.endDate?.message)
                          }
                          label="End Date"
                        />
                      )}
                    />
                  )}
                />
              </>
            )}

            <Controller
              name="idRateType"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Type Rate"
                  fullWidth
                  {...field}
                  select
                  size="small"
                  error={!!errors.idRateType}
                  helperText={
                    errors.idRateType?.message && intl.formatMessage(errors.idRateType?.message)
                  }
                >
                  {listTypesRate.map((typeRate) => (
                    <MenuItem
                      key={typeRate.idGeneralParameterValue}
                      value={typeRate.idGeneralParameterValue}
                    >
                      {typeRate.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Box display="flex" justifyContent="flex-end" gap="16px">
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={handleClose}
                  disabled={createRateLoading || updateRateLoading || createRateInstancesLoading}
                >
                  Cancel
                </Button>
                {(createRateLoading || updateRateLoading || createRateInstancesLoading) && (
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
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={createRateLoading || updateRateLoading || createRateInstancesLoading}
                >
                  Submit
                </Button>
                {(createRateLoading || updateRateLoading || createRateInstancesLoading) && (
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
          </Box>
        </Box>
      </Dialog>
    </LocalizationProvider>
  )
}
