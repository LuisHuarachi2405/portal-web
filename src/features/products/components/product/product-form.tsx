import { FC } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Save } from '@mui/icons-material'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import { CardContainer } from '@/shared/components/card-container'
import { useGetEntitiesQuery } from '@/shared/graphql/generated/entities-api'
import {
  GetProductDocument,
  GetProductsDocument,
  useGetProductTypesQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
} from '@/shared/graphql/generated/products-api'

import { useProductForm } from '../../hooks/use-product-form'
import { ProductFormValues } from '../../types/products-forms.types'
import { getProductFormBreadcrumbItems } from '../../utils/product-form-breadcrumb-items'

interface ProductFormProps {
  initialValues?: ProductFormValues
  isSubproduct?: true
}

export const ProductForm: FC<ProductFormProps> = ({ initialValues, isSubproduct }) => {
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { productId, subproductId } = router.query as { productId?: string; subproductId?: string }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useProductForm(initialValues)

  const { data: productTypesData } = useGetProductTypesQuery()
  const { data: entitiesData } = useGetEntitiesQuery({
    variables: {
      filter: {
        page: 1,
        limit: 1000,
      },
    },
  })

  const [createProduct, { loading: createLoading }] = useCreateProductMutation({
    refetchQueries: [GetProductDocument, GetProductsDocument],
  })
  const [updateProduct, { loading: updateLoading }] = useUpdateProductMutation({
    refetchQueries: [GetProductDocument, GetProductsDocument],
  })

  const onSubmit: SubmitHandler<ProductFormValues> = async (formData) => {
    let responseProductId: string
    try {
      if (productId && initialValues) {
        const response = await updateProduct({
          variables: {
            updateProductInput: {
              idOu: user?.idOu,
              idProduct: productId,
              code: formData.code.trim(),
              name: formData.name.trim(),
              shortName: formData.shortName.trim(),
              idProductType: formData.productType,
              idEntitySupplier: formData.supplier,
              inventoryFlag: formData.hasInventory,
              idUserUpdate: user?.idUser,
              internationalCodeSunat: formData.internationalCodeSunat.trim(),
              operationalCodeSunat: formData.operationalCodeSunat.trim(),
              productTypeSunat: formData.productTypeSunat.trim(),
              unitSunat: formData.unitSunat.trim(),
              idProductParent:
                (productId && subproductId && initialValues) ||
                (productId && subproductId === undefined && initialValues === undefined)
                  ? productId
                  : undefined,
            },
          },
        })
        responseProductId = response.data?.updateProduct.idProduct
      } else {
        const response = await createProduct({
          variables: {
            createProductInput: {
              idOu: user?.idOu,
              code: formData.code.trim(),
              name: formData.name.trim(),
              shortName: formData.shortName.trim(),
              idProductType: formData.productType,
              idEntitySupplier: formData.supplier,
              inventoryFlag: formData.hasInventory,
              idUserCreate: user?.idUser,
              internationalCodeSunat: formData.internationalCodeSunat.trim(),
              operationalCodeSunat: formData.operationalCodeSunat.trim(),
              productTypeSunat: formData.productTypeSunat.trim(),
              unitSunat: formData.unitSunat.trim(),
              idProductParent:
                (productId && subproductId && initialValues) ||
                (productId && subproductId === undefined && initialValues === undefined)
                  ? productId
                  : undefined,
            },
          },
        })
        responseProductId = response.data?.createProduct.idProduct
      }
      toast.success(`Product ${initialValues ? 'updated' : 'created'} successfully`, {
        position: 'bottom-center',
        duration: 2000,
      })

      if (productId === undefined || (productId && subproductId === undefined && initialValues)) {
        // create/update Product
        await router.push(paths.products.product.root(responseProductId))
      } else if (
        (productId && subproductId && initialValues) ||
        (productId && subproductId === undefined && initialValues === undefined)
      ) {
        // create/update Subproduct
        await router.push(
          paths.products.product.subproducts.subproduct.root(productId, responseProductId)
        )
      }
    } catch (error) {
      toast.error(`Error ${initialValues ? 'updating' : 'creating'} product`, {
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
              {/* eslint-disable-next-line no-nested-ternary */}
              {productId === undefined
                ? 'Add Product'
                : // eslint-disable-next-line no-nested-ternary
                productId && subproductId === undefined && initialValues === undefined
                ? 'Add Subproduct'
                : productId && subproductId === undefined && initialValues
                ? 'Edit Product'
                : 'Edit Subproduct'}
            </Typography>
            <BreadCrumb
              items={getProductFormBreadcrumbItems(productId, subproductId, isSubproduct)}
            />
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
                    {productTypesData?.getGeneralParametersByCode.generalParameterValue.map(
                      (productType) => (
                        <MenuItem
                          key={productType.idGeneralParameterValue}
                          value={productType.idGeneralParameterValue}
                        >
                          {productType.name}
                        </MenuItem>
                      )
                    )}
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
                    {entitiesData?.getEntities.results.map((entity) => (
                      <MenuItem key={entity.idEntity} value={entity.idEntity}>
                        {entity.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Controller
                control={control}
                name="hasInventory"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    inputRef={field.ref}
                    error={errors.hasInventory !== undefined}
                    helperText={
                      errors.hasInventory?.message !== undefined &&
                      intl.formatMessage(errors.hasInventory.message)
                    }
                    label="Has Inventory"
                  >
                    <MenuItem value="">Select if it has inventory</MenuItem>
                    <MenuItem value="1">Yes</MenuItem>
                    <MenuItem value="0">No</MenuItem>
                  </TextField>
                )}
              />
            </Box>
          </Box>
        </CardContainer>

        <CardContainer header="SuNAT Info">
          <Box display="flex" flexDirection="column" gap="16px">
            <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
              <Controller
                control={control}
                name="internationalCodeSunat"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={errors.internationalCodeSunat !== undefined}
                    helperText={
                      errors.internationalCodeSunat?.message &&
                      intl.formatMessage(errors.internationalCodeSunat.message)
                    }
                    label="International Code SuNAT"
                  />
                )}
              />

              <Controller
                control={control}
                name="operationalCodeSunat"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={errors.operationalCodeSunat !== undefined}
                    helperText={
                      errors.operationalCodeSunat?.message &&
                      intl.formatMessage(errors.operationalCodeSunat.message)
                    }
                    label="Operational Code SuNAT"
                  />
                )}
              />
            </Box>

            <Box display="flex" gap="16px" flexDirection={{ xs: 'column', md: 'row' }}>
              <Controller
                control={control}
                name="productTypeSunat"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={errors.productTypeSunat !== undefined}
                    helperText={
                      errors.productTypeSunat?.message &&
                      intl.formatMessage(errors.productTypeSunat.message)
                    }
                    label="Product Type SuNAT"
                  />
                )}
              />

              <Controller
                control={control}
                name="unitSunat"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={errors.unitSunat !== undefined}
                    helperText={
                      errors.unitSunat?.message && intl.formatMessage(errors.unitSunat.message)
                    }
                    label="Unit SuNAT"
                  />
                )}
              />
            </Box>
          </Box>
        </CardContainer>
      </Box>
    </ViewLayout>
  )
}
