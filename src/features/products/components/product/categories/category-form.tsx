import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Button, Dialog, Box, MenuItem, TextField } from '@mui/material'

import { useIntl } from '@/shared/hooks/use-intl'
import { ProductCategoryFormValues } from '@/features/products/types/products-forms.types'
import { useProductCategoryForm } from '@/features/products/hooks/use-product-category-form'
import {
  useGetProductCategoriesQuery,
  GetProductProductCategoriesDocument,
  useCreateProductProductCategoryMutation,
} from '@/shared/graphql/generated/products-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

interface CategoryFormProps {
  open: boolean
  handleClose: () => void
}

export const CategoryForm: FC<CategoryFormProps> = ({ open, handleClose }) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId: string; subproductId?: string }

  const { data: productCategoriesData, loading } = useGetProductCategoriesQuery()
  const [createProductProductCategory] = useCreateProductProductCategoryMutation({
    refetchQueries: [GetProductProductCategoriesDocument],
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useProductCategoryForm()

  const onSubmit: SubmitHandler<ProductCategoryFormValues> = async (formData) => {
    try {
      await createProductProductCategory({
        variables: {
          createProductProductCategoryInput: {
            idOu: user?.idOu,
            idProduct: subproductId ?? productId,
            idProductCategory: formData.productCategory,
            idUserCreate: user?.idUser,
          },
        },
      })
      handleClose()
    } catch {
      toast.error(`Error creating product category`, {
        position: 'bottom-center',
        duration: 2000,
      })
    }
  }

  useEffect(() => {
    if (open === false) {
      reset({
        productCategory: '',
      })
    }
  }, [reset, open])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" flexDirection="column" gap="16px" padding="32px">
        <h2>Add Category</h2>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Controller
            control={control}
            name="productCategory"
            render={({ field }) => (
              <TextField
                {...field}
                disabled={loading}
                select
                fullWidth
                size="small"
                inputRef={field.ref}
                error={errors.productCategory !== undefined}
                helperText={
                  errors.productCategory?.message !== undefined &&
                  intl.formatMessage(errors.productCategory.message)
                }
                label={intl.formatMessage(
                  'pages.products.form.category.product-category-select-label'
                )}
              >
                <MenuItem value="">Select a category</MenuItem>
                {productCategoriesData?.productCategories.data.map((category) => (
                  <MenuItem key={category.idProductCategory} value={category.idProductCategory}>
                    {category.name}
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
