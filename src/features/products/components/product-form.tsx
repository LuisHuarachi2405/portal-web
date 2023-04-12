import { FC } from 'react'
import { Add, Delete, Save } from '@mui/icons-material'
import { Controller } from 'react-hook-form'
import { Box, Button, IconButton, MenuItem, TextField, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { CardContainer } from '@/shared/components/card-container'

import { useProductForm } from '../hooks/use-product-form'
import { ProductFormValues } from '../types/products-forms.types'

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
    name: 'components.sidebar.item.products.form',
    href: paths.products.create,
  },
]

export const ProductForm: FC = () => {
  const intl = useIntl()

  const {
    productForm,
    categoryForm,
    featureForm,
    identificationForm,
    appendCategoryForm,
    removeCategoryForm,
    appendFeatureForm,
    removeFeatureForm,
    appendIdentificationForm,
    removeIdentificationForm,
  } = useProductForm()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = productForm

  const onSubmit = (formData: ProductFormValues) => {
    // eslint-disable-next-line no-console
    console.log({ formData })
  }

  return (
    <ViewLayout>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} display="grid" gap="32px">
        <Box component="header" display="flex" justifyContent="space-between" gap="16px">
          <Box display="grid" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {intl.formatMessage('pages.products.form.create-title')}
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
              {intl.formatMessage('pages.products.form.save-button')}
            </Button>
          </div>
        </Box>
        <CardContainer header="pages.products.form.product.header">
          <Box display="flex" flexDirection="column" gap="16px">
            <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
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
                    label={intl.formatMessage('pages.products.form.product.code-input-label')}
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
                    label={intl.formatMessage('pages.products.form.product.name-input-label')}
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
                    label={intl.formatMessage('pages.products.form.product.short-name-input-label')}
                  />
                )}
              />
            </Box>

            <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
              <Controller
                control={control}
                name="productType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    inputRef={field.ref}
                    error={errors.productType !== undefined}
                    helperText={
                      errors.productType?.message && intl.formatMessage(errors.productType.message)
                    }
                    label={intl.formatMessage(
                      'pages.products.form.product.product-type-select-label'
                    )}
                  >
                    <MenuItem value="">Select a type</MenuItem>
                    <MenuItem value="12345678901234567890123456789012">Type 1</MenuItem>
                    <MenuItem value="01234567890123456789012345678901">Type 2</MenuItem>
                    <MenuItem value="90123456789012345678901234567890">Type 3</MenuItem>
                  </TextField>
                )}
              />

              <Controller
                control={control}
                name="supplier"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    inputRef={field.ref}
                    error={errors.supplier !== undefined}
                    helperText={
                      errors.supplier?.message && intl.formatMessage(errors.supplier.message)
                    }
                    label={intl.formatMessage('pages.products.form.product.supplier-select-label')}
                  >
                    <MenuItem value="">Select a supplier</MenuItem>
                    <MenuItem value="12345678901234567890123456789012">Supplier 1</MenuItem>
                    <MenuItem value="01234567890123456789012345678901">Supplier 2</MenuItem>
                    <MenuItem value="90123456789012345678901234567890">Supplier 3</MenuItem>
                  </TextField>
                )}
              />
            </Box>
          </Box>
        </CardContainer>

        <CardContainer header="pages.products.form.category.header">
          <Box display="flex" gap="16px" flexDirection="column">
            {categoryForm.fields.map((categoryFormField, index) => (
              <Box key={categoryFormField.id} display="flex">
                <Controller
                  control={control}
                  name={`categories.${index}.productCategory`}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      size="small"
                      inputRef={field.ref}
                      error={errors.categories?.[index]?.productCategory !== undefined}
                      helperText={
                        errors.categories?.[index]?.productCategory?.message &&
                        intl.formatMessage(
                          errors.categories?.[index]?.productCategory?.message as string
                        )
                      }
                      label={intl.formatMessage(
                        'pages.products.form.category.product-category-select-label'
                      )}
                    >
                      <MenuItem value="">Select a supplier</MenuItem>
                      <MenuItem value="12345678901234567890123456789012">Category 1</MenuItem>
                      <MenuItem value="01234567890123456789012345678901">Category 2</MenuItem>
                      <MenuItem value="90123456789012345678901234567890">Category 3</MenuItem>
                    </TextField>
                  )}
                />

                <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="80px">
                  {categoryForm.fields.length - 1 === index && (
                    <IconButton color="primary" onClick={appendCategoryForm}>
                      <Add />
                    </IconButton>
                  )}
                  {categoryForm.fields.length > 1 && (
                    <IconButton
                      data-index={index}
                      onClick={() => {
                        removeCategoryForm(index)
                      }}
                    >
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </CardContainer>

        <CardContainer header="pages.products.form.feature.header">
          <Box display="flex" flexDirection="column" gap="16px">
            {featureForm.fields.map((featureFormField, index) => (
              <Box key={featureFormField.id} display="flex" gap="16px">
                <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }} flex={1}>
                  <Controller
                    control={control}
                    name={`features.${index}.productFeature`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        fullWidth
                        size="small"
                        inputRef={field.ref}
                        error={errors.features?.[index]?.productFeature !== undefined}
                        helperText={
                          errors.features?.[index]?.productFeature?.message &&
                          intl.formatMessage(
                            errors.features?.[index]?.productFeature?.message as string
                          )
                        }
                        label={intl.formatMessage(
                          'pages.products.form.feature.product-feature-select-label'
                        )}
                      >
                        <MenuItem value="">Select a feature</MenuItem>
                        <MenuItem value="12345678901234567890123456789012">Feature 1</MenuItem>
                        <MenuItem value="01234567890123456789012345678901">Feature 2</MenuItem>
                        <MenuItem value="90123456789012345678901234567890">Feature 3</MenuItem>
                      </TextField>
                    )}
                  />

                  <Controller
                    control={control}
                    name={`features.${index}.isInventory`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        fullWidth
                        size="small"
                        inputRef={field.ref}
                        error={errors.features?.[index]?.isInventory !== undefined}
                        helperText={
                          errors.features?.[index]?.isInventory?.message &&
                          intl.formatMessage(
                            errors.features?.[index]?.isInventory?.message as string
                          )
                        }
                        label={intl.formatMessage(
                          'pages.products.form.feature.is-inventory-select-label'
                        )}
                      >
                        <MenuItem value="">Select if belongs to inventory</MenuItem>
                        <MenuItem value="Y">Yes</MenuItem>
                        <MenuItem value="N">No</MenuItem>
                      </TextField>
                    )}
                  />
                </Box>

                <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="80px">
                  {featureForm.fields.length - 1 === index && (
                    <IconButton color="primary" onClick={appendFeatureForm}>
                      <Add />
                    </IconButton>
                  )}
                  {featureForm.fields.length > 1 && (
                    <IconButton
                      data-index={index}
                      onClick={() => {
                        removeFeatureForm(index)
                      }}
                    >
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </CardContainer>

        <CardContainer header="pages.products.form.identification.header">
          <Box display="flex" flexDirection="column" gap="16px">
            {identificationForm.fields.map((identificationFormField, index) => (
              <Box key={identificationFormField.id} display="flex" gap="16px">
                <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }} flex={1}>
                  <Controller
                    control={control}
                    name={`identifications.${index}.value`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        error={errors.identifications?.[index]?.value !== undefined}
                        helperText={
                          errors.identifications?.[index]?.value?.message &&
                          intl.formatMessage(
                            errors.identifications?.[index]?.value?.message as string
                          )
                        }
                        label={intl.formatMessage(
                          'pages.products.form.identification.value-input-label'
                        )}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name={`identifications.${index}.identificationType`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        fullWidth
                        size="small"
                        inputRef={field.ref}
                        error={errors.identifications?.[index]?.identificationType !== undefined}
                        helperText={
                          errors.identifications?.[index]?.identificationType?.message &&
                          intl.formatMessage(
                            errors.identifications?.[index]?.identificationType?.message as string
                          )
                        }
                        label={intl.formatMessage(
                          'pages.products.form.identification.identification-type-select-label'
                        )}
                      >
                        <MenuItem value="">Select a type</MenuItem>
                        <MenuItem value="12345678901234567890123456789012">Type 1</MenuItem>
                        <MenuItem value="01234567890123456789012345678901">Type 2</MenuItem>
                        <MenuItem value="90123456789012345678901234567890">Type 3</MenuItem>
                      </TextField>
                    )}
                  />
                </Box>

                <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="80px">
                  {identificationForm.fields.length - 1 === index && (
                    <IconButton color="primary" onClick={appendIdentificationForm}>
                      <Add />
                    </IconButton>
                  )}
                  {identificationForm.fields.length > 1 && (
                    <IconButton
                      data-index={index}
                      onClick={() => {
                        removeIdentificationForm(index)
                      }}
                    >
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </CardContainer>
      </Box>
    </ViewLayout>
  )
}
