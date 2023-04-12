import { FC } from 'react'
import toast from 'react-hot-toast'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Save } from '@mui/icons-material'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, MenuItem, TextField as MuiTextField, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { CardContainer } from '@/shared/components/card-container'
import {
  GetProductFeaturesDocument,
  useGetProductCategoriesQuery,
  useGetProductFeatureTypesQuery,
  useCreateProductFeatureMutation,
  useUpdateProductFeatureMutation,
} from '@/shared/graphql/generated/products-api'

import { FeatureFormValues } from '../../types/products-forms.types'
import { useFeatureForm } from '../../hooks/use-feature-form'

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
    name: 'components.sidebar.item.products.features',
    href: paths.products.features.root,
  },
  {
    name: 'components.sidebar.item.products.features.form',
    href: paths.products.features.create,
  },
]

interface ProductFeatureFormProps {
  initialValues?: FeatureFormValues
}

export const ProductFeatureForm: FC<ProductFeatureFormProps> = ({ initialValues }) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { featureId } = router.query as { featureId: string }

  const { data: productCategories } = useGetProductCategoriesQuery()
  const { data: productFeatureTypes } = useGetProductFeatureTypesQuery()
  const [createProductFeature, { loading: createLoading }] = useCreateProductFeatureMutation({
    refetchQueries: [GetProductFeaturesDocument],
  })
  const [updateProductFeature, { loading: updateLoading }] = useUpdateProductFeatureMutation({
    refetchQueries: [GetProductFeaturesDocument],
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFeatureForm(initialValues)

  const onSubmit: SubmitHandler<FeatureFormValues> = async (formData) => {
    try {
      if (initialValues) {
        // TODO: Pass user id when auth is implemented
        await updateProductFeature({
          variables: {
            updateProductFeatureInput: {
              idOu: user?.idOu,
              idProductFeature: featureId,
              name: formData.name,
              shortName: formData.shortName,
              idProductCategory: formData.productCategory,
              idProductFeatureType: formData.featureType,
              idUserUpdate: user?.idUser,
            },
          },
        })
      } else {
        // TODO: Pass user id when auth is implemented
        await createProductFeature({
          variables: {
            createProductFeatureInput: {
              idOu: user?.idOu,
              name: formData.name,
              shortName: formData.shortName,
              idProductCategory: formData.productCategory,
              idProductFeatureType: formData.featureType,
              idUserCreate: user?.idUser,
            },
          },
        })
      }

      toast.success(`Product feature ${initialValues ? 'updated' : 'created'} successfully`, {
        position: 'bottom-center',
        duration: 2000,
      })

      await router.push(paths.products.features.root)
    } catch (error) {
      toast.error(`Error ${initialValues ? 'updating' : 'creating'} product feature`, {
        position: 'bottom-center',
        duration: 2000,
      })
    }
  }

  return (
    <ViewLayout>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} display="grid" gap="32px">
        <Box component="header" display="flex" justifyContent="space-between" gap="16px">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage(
                initialValues
                  ? 'pages.products.features.form.edit-title'
                  : 'pages.products.features.form.create-title'
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
              {intl.formatMessage('pages.products.features.form.save-button')}
            </Button>
          </div>
        </Box>
        <CardContainer header="pages.products.features.form.card-header">
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
                  label={intl.formatMessage('pages.products.features.form.name-input-label')}
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
                  label={intl.formatMessage('pages.products.features.form.short-name-input-label')}
                />
              )}
            />

            <Controller
              control={control}
              name="productCategory"
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  size="small"
                  inputRef={field.ref}
                  error={errors.productCategory !== undefined}
                  helperText={
                    errors.productCategory?.message &&
                    intl.formatMessage(errors.productCategory.message)
                  }
                  label={intl.formatMessage(
                    'pages.products.features.form.product-category-select-label'
                  )}
                >
                  <MenuItem value="">Select a category</MenuItem>
                  {productCategories?.productCategories.data.map((category) => (
                    <MenuItem key={category.idProductCategory} value={category.idProductCategory}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="featureType"
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  size="small"
                  inputRef={field.ref}
                  error={errors.featureType !== undefined}
                  helperText={
                    errors.featureType?.message && intl.formatMessage(errors.featureType.message)
                  }
                  label={intl.formatMessage(
                    'pages.products.features.form.feature-type-select-label'
                  )}
                >
                  <MenuItem value="">Select the type</MenuItem>
                  {productFeatureTypes?.getGeneralParametersByCode.generalParameterValue.map(
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
          </Box>
        </CardContainer>
      </Box>
    </ViewLayout>
  )
}

const TextField = styled(MuiTextField)`
  & .MuiFormHelperText-root {
    margin-left: 0px;
  }
`
