import toast from 'react-hot-toast'
import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Add, Delete, Save } from '@mui/icons-material'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, Divider, IconButton, MenuItem, TextField, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { CardContainer } from '@/shared/components/card-container'
import {
  GetProductSubFeaturesDocument,
  useGetProductSubfeatureTypesQuery,
  useCreateProductSubFeatureMutation,
  useUpdateProductSubFeatureMutation,
  useGetProductSubfeatureItemTypesQuery,
} from '@/shared/graphql/generated/products-api'

import { SubfeatureFormValues } from '../types/products-forms.types'
import { useProductSubfeatureForm } from '../hooks/use-product-subfeature-form'

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
    name: 'components.sidebar.item.products.subfeatures',
    href: paths.products.subfeatures.root,
  },
  {
    name: 'components.sidebar.item.products.subfeatures.form',
    href: paths.products.subfeatures.create,
  },
]

interface ProductSubfeatureFormProps {
  initialValues?: SubfeatureFormValues
}

export const ProductSubfeatureForm: FC<ProductSubfeatureFormProps> = ({ initialValues }) => {
  const intl = useIntl()
  const router = useRouter()
  const { subfeatureId } = router.query as { subfeatureId: string }

  const { data: productSubfeatureTypes } = useGetProductSubfeatureTypesQuery()
  const { data: productSubfeatureItemTypes } = useGetProductSubfeatureItemTypesQuery()
  const [createProductSubfeature] = useCreateProductSubFeatureMutation({
    refetchQueries: [GetProductSubFeaturesDocument],
  })
  const [updateProductSubfeature] = useUpdateProductSubFeatureMutation({
    refetchQueries: [GetProductSubFeaturesDocument],
  })

  const { subfeatureForm, subfeatureItemForm, appendSubfeatureItemForm, removeSubfeatureItemForm } =
    useProductSubfeatureForm(initialValues)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = subfeatureForm

  const onSubmit: SubmitHandler<SubfeatureFormValues> = async (formData) => {
    try {
      if (initialValues) {
        // TODO: Pass user id when auth is implemented
        await updateProductSubfeature({
          variables: {
            updateProductSubFeatureInput: {
              idProductSubFeature: subfeatureId,
              code: formData.code,
              name: formData.name,
              shortName: formData.shortName,
              idProductSubFeatureType: formData.productSubfeatureType,
              idUserUpdate: '12345678901234567890123456789012',
              productSubFeatureItem: formData.items.map((item) => ({
                idProductSubFeatureItem: item.id,
                code: item.code,
                name: item.name,
                shortName: item.shortName,
                value: item.value,
                idProductSubFeatureItemType: item.productSubfeatureItemType,
              })),
            },
          },
        })
      } else {
        // TODO: Pass user id when auth is implemented
        await createProductSubfeature({
          variables: {
            createProductSubFeatureInput: {
              code: formData.code,
              name: formData.name,
              shortName: formData.shortName,
              idProductSubFeatureType: formData.productSubfeatureType,
              idUserCreate: '12345678901234567890123456789012',
              productSubFeatureItem: formData.items.map((item) => ({
                code: item.code,
                name: item.name,
                shortName: item.shortName,
                value: item.value,
                idProductSubFeatureItemType: item.productSubfeatureItemType,
                idUserCreate: '12345678901234567890123456789012',
              })),
            },
          },
        })
      }

      toast.success(`Product subfeature ${initialValues ? 'updated' : 'created'} successfully`, {
        position: 'bottom-center',
        duration: 2000,
      })

      router.push(paths.products.subfeatures.root)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
      toast.error(`Error ${initialValues ? 'updating' : 'creating'} product subfeature`, {
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
                  ? 'pages.products.subfeatures.form.edit-title'
                  : 'pages.products.subfeatures.form.create-title'
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
              startIcon={<Save />}
            >
              {intl.formatMessage('pages.products.subfeatures.form.save-button')}
            </Button>
          </div>
        </Box>
        <CardContainer header="pages.products.subfeatures.form.subfeature.header">
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap="16px">
            <Box flex={1} display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
              <Controller
                control={control}
                name="code"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={errors.code !== undefined}
                    helperText={errors.code?.message && intl.formatMessage(errors.code.message)}
                    label={intl.formatMessage(
                      'pages.products.subfeatures.form.subfeature.code-input-label'
                    )}
                  />
                )}
              />

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
                    label={intl.formatMessage(
                      'pages.products.subfeatures.form.subfeature.name-input-label'
                    )}
                  />
                )}
              />
            </Box>

            <Box flex={1} display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
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
                      'pages.products.subfeatures.form.subfeature.short-name-input-label'
                    )}
                  />
                )}
              />

              <Controller
                control={control}
                name="productSubfeatureType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    inputRef={field.ref}
                    error={errors.productSubfeatureType !== undefined}
                    helperText={
                      errors.productSubfeatureType?.message &&
                      intl.formatMessage(errors.productSubfeatureType.message)
                    }
                    label={intl.formatMessage(
                      'pages.products.subfeatures.form.subfeature.product-subfeature-type-select-label'
                    )}
                  >
                    <MenuItem value="">Select a type</MenuItem>
                    {productSubfeatureTypes?.getGeneralParametersByCode.generalParameterValue.map(
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
          </Box>
        </CardContainer>

        <CardContainer header="pages.products.subfeatures.form.item.header">
          <Box display="flex" flexDirection="column" gap="16px">
            {subfeatureItemForm.fields.map((subfeatureItemFormField, index) => (
              <Fragment key={subfeatureItemFormField.id}>
                {index > 0 && <Divider style={{ borderColor: '#d7dcf5' }} />}
                <Box display="flex" gap="16px">
                  <Box
                    display="flex"
                    gap="16px"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    flex={1}
                  >
                    <Controller
                      control={control}
                      name={`items.${index}.code`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          error={errors.items?.[index]?.code !== undefined}
                          helperText={
                            errors.items?.[index]?.code?.message &&
                            intl.formatMessage(errors.items?.[index]?.code?.message as string)
                          }
                          label={intl.formatMessage(
                            'pages.products.subfeatures.form.item.code-input-label'
                          )}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name={`items.${index}.name`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          error={errors.items?.[index]?.name !== undefined}
                          helperText={
                            errors.items?.[index]?.name?.message &&
                            intl.formatMessage(errors.items?.[index]?.name?.message as string)
                          }
                          label={intl.formatMessage(
                            'pages.products.subfeatures.form.item.name-input-label'
                          )}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name={`items.${index}.shortName`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          error={errors.items?.[index]?.shortName !== undefined}
                          helperText={
                            errors.items?.[index]?.shortName?.message &&
                            intl.formatMessage(errors.items?.[index]?.shortName?.message as string)
                          }
                          label={intl.formatMessage(
                            'pages.products.subfeatures.form.item.short-name-input-label'
                          )}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name={`items.${index}.value`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          error={errors.items?.[index]?.value !== undefined}
                          helperText={
                            errors.items?.[index]?.value?.message &&
                            intl.formatMessage(errors.items?.[index]?.value?.message as string)
                          }
                          label={intl.formatMessage(
                            'pages.products.subfeatures.form.item.value-input-label'
                          )}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name={`items.${index}.productSubfeatureItemType`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          fullWidth
                          size="small"
                          inputRef={field.ref}
                          error={errors.items?.[index]?.productSubfeatureItemType !== undefined}
                          helperText={
                            errors.items?.[index]?.productSubfeatureItemType?.message &&
                            intl.formatMessage(
                              errors.items?.[index]?.productSubfeatureItemType?.message as string
                            )
                          }
                          label={intl.formatMessage(
                            'pages.products.subfeatures.form.item.product-subfeature-item-type-select-label'
                          )}
                        >
                          <MenuItem value="">Select a type</MenuItem>
                          {productSubfeatureItemTypes?.getGeneralParametersByCode.generalParameterValue.map(
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

                  <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="80px">
                    {subfeatureItemForm.fields.length - 1 === index && (
                      <IconButton color="primary" onClick={appendSubfeatureItemForm}>
                        <Add />
                      </IconButton>
                    )}
                    {subfeatureItemForm.fields.length > 1 && (
                      <IconButton
                        data-index={index}
                        onClick={() => {
                          removeSubfeatureItemForm(index)
                        }}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Fragment>
            ))}
          </Box>
        </CardContainer>
      </Box>
    </ViewLayout>
  )
}
