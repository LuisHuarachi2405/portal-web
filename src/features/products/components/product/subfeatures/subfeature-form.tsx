import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, Dialog, MenuItem, TextField } from '@mui/material'

import { useIntl } from '@/shared/hooks/use-intl'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { ProductSubfeatureItemFormValues } from '@/features/products/types/products-forms.types'
import { useProductSubfeatureForm } from '@/features/products/hooks/use-product-subfeature-form'
import {
  useGetProductSubFeaturesQuery,
  GetProductProductSubFeaturesDocument,
  useCreateProductProductSubFeatureMutation,
} from '@/shared/graphql/generated/products-api'

interface SubfeatureItemFormProps {
  open: boolean
  handleClose: () => void
}

export const SubfeatureForm: FC<SubfeatureItemFormProps> = ({ open, handleClose }) => {
  const router = useRouter()
  const { user } = useAuth()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const intl = useIntl()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useProductSubfeatureForm()

  const [createProductProductSubfeature] = useCreateProductProductSubFeatureMutation({
    refetchQueries: [GetProductProductSubFeaturesDocument],
  })

  const { data: subfeaturesData } = useGetProductSubFeaturesQuery()

  const onSubmit: SubmitHandler<ProductSubfeatureItemFormValues> = async (formData) => {
    await createProductProductSubfeature({
      variables: {
        createProductProductSubFeatureItemInput: {
          idOu: user?.idOu,
          idProduct: subproductId ?? productId,
          idProductSubFeature: formData.productSubfeature,
          idUserCreate: user?.idUser,
        },
      },
    })

    handleClose()
  }

  useEffect(() => {
    if (!open) {
      reset({
        productSubfeature: '',
      })
    }
  }, [reset, open])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" flexDirection="column" gap="16px" padding="32px">
        <h2>Add Subfeature</h2>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Controller
            control={control}
            name="productSubfeature"
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                size="small"
                inputRef={field.ref}
                error={errors.productSubfeature !== undefined}
                helperText={
                  errors.productSubfeature?.message &&
                  intl.formatMessage(errors.productSubfeature.message)
                }
                label="Product Subfeature"
              >
                <MenuItem value="">Select a Subfeature</MenuItem>
                {subfeaturesData?.productSubFeatures.map((subfeature) => (
                  <MenuItem
                    key={subfeature.idProductSubFeature}
                    value={subfeature.idProductSubFeature}
                  >
                    {subfeature.name}
                  </MenuItem>
                ))}
              </TextField>
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
  )
}
