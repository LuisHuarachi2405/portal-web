import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, Dialog, MenuItem, TextField } from '@mui/material'

import { useIntl } from '@/shared/hooks/use-intl'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { ProductFeatureFormValues } from '@/features/products/types/products-forms.types'
import { useProductFeatureForm } from '@/features/products/hooks/use-product-feature-form'
import {
  GetProductProductFeaturesDocument,
  ProductProductFeature,
  useCreateProductProductFeatureMutation,
  useGetProductFeaturesQuery,
  useGetProductProductCategoriesQuery,
  useUpdateProductProductFeatureMutation,
} from '@/shared/graphql/generated/products-api'

interface FeatureFormProps {
  open: boolean
  handleClose: () => void
  itemToEdit: ProductProductFeature | null
}

export const FeatureForm: FC<FeatureFormProps> = ({ itemToEdit, open, handleClose }) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const { data: productCategoriesData } = useGetProductProductCategoriesQuery({
    variables: {
      idProduct: subproductId ?? productId,
    },
    skip: productId === undefined && subproductId === undefined,
  })
  const { data: productFeaturesData } = useGetProductFeaturesQuery({
    variables: {
      productCategory: productCategoriesData?.productProductCategories[0]?.idProductCategory,
    },
    skip: productCategoriesData === undefined,
  })
  const [createProductProductFeature] = useCreateProductProductFeatureMutation({
    refetchQueries: [GetProductProductFeaturesDocument],
  })
  const [updateProductProductFeature] = useUpdateProductProductFeatureMutation({
    refetchQueries: [GetProductProductFeaturesDocument],
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useProductFeatureForm()

  const onSubmit: SubmitHandler<ProductFeatureFormValues> = async (formData) => {
    if (itemToEdit === null) {
      await createProductProductFeature({
        variables: {
          createProductProductFeatureInput: {
            idOu: user?.idOu,
            idProduct: subproductId ?? productId,
            idProductFeature: formData.productFeature,
            value: formData.value,
            idUserCreate: user?.idUser,
          },
        },
      })
    } else {
      await updateProductProductFeature({
        variables: {
          updateProductProductFeatureInput: {
            idOu: user?.idOu,
            idProductProductFeature: itemToEdit.idProductProductFeature,
            idProductFeature: formData.productFeature,
            value: formData.value,
            idUserUpdate: user?.idUser,
          },
        },
      })
    }
    handleClose()
  }

  useEffect(() => {
    if (open === true && itemToEdit !== null) {
      reset({
        productFeature: itemToEdit.idProductFeature,
        value: itemToEdit.value,
      })
    }
  }, [reset, open, itemToEdit])

  useEffect(() => {
    if (open === false) {
      reset({
        productFeature: '',
        value: '',
      })
    }
  }, [reset, open])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" flexDirection="column" gap="16px" padding="32px">
        <h2>{itemToEdit === null ? 'Add feature' : 'Edit feature'}</h2>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Controller
            control={control}
            name="productFeature"
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                size="small"
                inputRef={field.ref}
                error={errors.productFeature !== undefined}
                helperText={
                  errors.productFeature?.message !== undefined &&
                  intl.formatMessage(errors.productFeature.message)
                }
                label={intl.formatMessage(
                  'pages.products.form.feature.product-feature-select-label'
                )}
              >
                <MenuItem value="">Select a feature</MenuItem>
                {productFeaturesData?.productFeatures.map((productFeature) => (
                  <MenuItem
                    key={productFeature.idProductFeature}
                    value={productFeature.idProductFeature}
                  >
                    {productFeature.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

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
                label="Value"
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
  )
}
