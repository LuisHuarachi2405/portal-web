import { FC } from 'react'
import toast from 'react-hot-toast'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Save } from '@mui/icons-material'
import { Controller } from 'react-hook-form'
import { Box, Button, MenuItem, TextField as MuiTextField, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { CardContainer } from '@/shared/components/card-container'
import {
  GetProductCategoriesDocument,
  useGetProductCategoryTypesQuery,
  useCreateProductCategoryMutation,
  useUpdateProductCategoryMutation,
} from '@/shared/graphql/generated/products-api'

import { useCategoryForm } from '../../hooks/use-category-form'
import { CategoryFormValues } from '../../types/products-forms.types'

const breadcrumbItems = [
  {
    name: 'components.sidebar.item.home',
    href: paths.home,
  },
  {
    name: 'components.sidebar.item.products',
    href: paths.products.root,
  },
  {
    name: 'components.sidebar.item.products.categories',
    href: paths.products.categories.root,
  },
  {
    name: 'components.sidebar.item.products.categories.form',
    href: paths.products.categories.create,
  },
]

interface ProductCategoryFormProps {
  initialValues?: CategoryFormValues
}

export const ProductCategoryForm: FC<ProductCategoryFormProps> = ({ initialValues }) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { categoryId } = router.query as { categoryId: string }

  const { data: categoryTypes } = useGetProductCategoryTypesQuery()
  const [createProductCategory, { loading: createLoading }] = useCreateProductCategoryMutation({
    refetchQueries: [GetProductCategoriesDocument],
  })
  const [updateProductCategory, { loading: updateLoading }] = useUpdateProductCategoryMutation({
    refetchQueries: [GetProductCategoriesDocument],
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useCategoryForm(initialValues)

  const onSubmit = async (formData: CategoryFormValues) => {
    try {
      if (initialValues) {
        // TODO: Pass user id when auth is implemented
        await updateProductCategory({
          variables: {
            updateProductCategoryInput: {
              idOu: user?.idOu,
              idProductCategory: categoryId,
              name: formData.name,
              shortName: formData.shortName,
              idCategoryType: formData.categoryType,
              idUserUpdate: user?.idUser,
            },
          },
        })
      } else {
        // TODO: Pass user id when auth is implemented
        await createProductCategory({
          variables: {
            createProductCategoryInput: {
              idOu: user?.idOu,
              name: formData.name,
              shortName: formData.shortName,
              idCategoryType: formData.categoryType,
              idUserCreate: user?.idUser,
            },
          },
        })
      }
      toast.success(`Product Category ${initialValues ? 'updated' : 'created'} successfully`, {
        position: 'bottom-center',
        duration: 2000,
      })
      await router.push(paths.products.categories.root)
    } catch (error) {
      toast.error(`Error ${initialValues ? 'updating' : 'creating'} product category`, {
        position: 'bottom-center',
        duration: 2000,
      })
    }
  }

  // TODO: Add `cancel` button for easier navigation

  return (
    <ViewLayout>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} display="grid" gap="32px">
        <Box component="header" display="flex" justifyContent="space-between" gap="16px">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage(
                initialValues
                  ? 'pages.products.categories.edit.title'
                  : 'pages.products.categories.create.title'
              )}
            </Typography>
            <BreadCrumb items={breadcrumbItems} />
          </Box>
          <div>
            <Button
              size="small"
              type="submit"
              color="primary"
              variant="contained"
              disabled={createLoading || updateLoading}
              startIcon={<Save />}
            >
              {intl.formatMessage('pages.products.categories.create.save-button')}
            </Button>
          </div>
        </Box>
        <CardContainer header="pages.products.categories.create.card-header">
          <Box
            component="main"
            display="flex"
            gap="16px"
            flexDirection={{
              xs: 'column',
              md: 'row',
            }}
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  error={errors.name !== undefined}
                  helperText={errors.name?.message && intl.formatMessage(errors.name.message)}
                  label={intl.formatMessage('pages.products.categories.create.name-input-label')}
                />
              )}
            />

            <Controller
              control={control}
              name="shortName"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  error={errors.shortName !== undefined}
                  helperText={
                    errors.shortName?.message && intl.formatMessage(errors.shortName.message)
                  }
                  label={intl.formatMessage(
                    'pages.products.categories.create.short-name-input-label'
                  )}
                />
              )}
            />

            <Controller
              control={control}
              name="categoryType"
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  size="small"
                  inputRef={field.ref}
                  error={errors.categoryType !== undefined}
                  helperText={
                    errors.categoryType?.message && intl.formatMessage(errors.categoryType.message)
                  }
                  label={intl.formatMessage(
                    'pages.products.categories.create.category-type-select-label'
                  )}
                >
                  <MenuItem value="">Select a category</MenuItem>
                  {categoryTypes?.getGeneralParametersByCode.generalParameterValue.map(
                    (categoryType) => (
                      <MenuItem
                        key={categoryType.idGeneralParameterValue}
                        value={categoryType.idGeneralParameterValue}
                      >
                        {categoryType.name}
                      </MenuItem>
                    )
                  )}
                </TextField>
              )}
            />
          </Box>
        </CardContainer>
      </Box>
    </ViewLayout>
  )
}

const TextField = styled(MuiTextField)`
  & .MuiFormHelperText-root {
    margin-left: 0;
  }
`
