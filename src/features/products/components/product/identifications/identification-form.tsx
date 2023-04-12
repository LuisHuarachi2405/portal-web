import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, Dialog, MenuItem, TextField } from '@mui/material'

import { useIntl } from '@/shared/hooks/use-intl'
import { ProductIdentificationFormValues } from '@/features/products/types/products-forms.types'
import { useProductIdentificationForm } from '@/features/products/hooks/use-product-identification-form'
import {
  ProductIdentification,
  GetProductIdentificationsDocument,
  useCreateProductIdentificationMutation,
  useGetProductIdentificationTypesQuery,
  useUpdateProductIdentificationMutation,
} from '@/shared/graphql/generated/products-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

interface IdentificationFormProps {
  open: boolean
  handleClose: () => void
  itemToEdit: ProductIdentification | null
}

export const IdentificationForm: FC<IdentificationFormProps> = ({
  itemToEdit,
  open,
  handleClose,
}) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useProductIdentificationForm()

  const { data: productIdentificationTypesData } = useGetProductIdentificationTypesQuery()
  const [createProductIdentification, { loading: createLoading }] =
    useCreateProductIdentificationMutation({
      refetchQueries: [GetProductIdentificationsDocument],
    })
  const [updateProductIdentification, { loading: updateLoading }] =
    useUpdateProductIdentificationMutation({
      refetchQueries: [GetProductIdentificationsDocument],
    })

  const onSubmit: SubmitHandler<ProductIdentificationFormValues> = async (formData) => {
    if (itemToEdit === null) {
      await createProductIdentification({
        variables: {
          createProductIdentificationInput: {
            idOu: user?.idOu,
            idProduct: subproductId ?? productId,
            value: formData.value,
            idProductIdentificationType: formData.identificationType,
            idUserCreate: user?.idUser,
          },
        },
      })
    } else {
      await updateProductIdentification({
        variables: {
          updateProductIdentificationInput: {
            idOu: user?.idOu,
            idProductIdentification: itemToEdit.idProductIdentification,
            value: formData.value,
            idProductIdentificationType: formData.identificationType,
            idUserUpdate: user?.idUser,
          },
        },
      })
    }
    handleClose()
  }

  useEffect(() => {
    if (open && itemToEdit !== null) {
      reset({
        identificationType: itemToEdit.idProductIdentificationType,
        value: itemToEdit.value,
      })
    }
  }, [reset, open, itemToEdit])

  useEffect(() => {
    if (!open) {
      reset({
        identificationType: '',
        value: '',
      })
    }
  }, [reset, open])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" flexDirection="column" gap="16px" padding="32px">
        <h2>{itemToEdit === null ? 'Add Identification' : 'Edit Identification'}</h2>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Controller
            control={control}
            name="value"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                error={errors.value !== undefined}
                helperText={
                  errors.value?.message !== undefined && intl.formatMessage(errors.value.message)
                }
                label={intl.formatMessage('pages.products.form.identification.value-input-label')}
              />
            )}
          />

          <Controller
            control={control}
            name="identificationType"
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                size="small"
                inputRef={field.ref}
                error={errors.identificationType !== undefined}
                helperText={
                  errors.identificationType?.message !== undefined &&
                  intl.formatMessage(errors.identificationType.message)
                }
                label={intl.formatMessage(
                  'pages.products.form.identification.identification-type-select-label'
                )}
              >
                <MenuItem value="">Select a type</MenuItem>
                {productIdentificationTypesData?.getGeneralParametersByCode.generalParameterValue.map(
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

          <Box display="flex" justifyContent="flex-end" gap="16px">
            <Button type="button" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={createLoading || updateLoading}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}
