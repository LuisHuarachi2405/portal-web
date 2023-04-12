import { FC } from 'react'
import styled from '@emotion/styled'
import { Save } from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  debounce,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import {
  useCreateRateFeatureMutation,
  useUpdateRateFeatureMutation,
} from '@/shared/graphql/generated/rates-api'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { ViewLayout } from '@/shared/components/view-layout'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { useGetProductCategoriesQuery } from '@/shared/graphql/generated/products-api'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { RateFeatureFormExtraProps, useRateFeatureForm } from '../../hooks/use-rates-feature-form'
import { RateFeatureFormValues } from '../../types/rates-forms.types'
import { useRatesFeaturesBreadcrumbItems } from '../../utils/rates-features-breadcrumb-items'

interface RateFeatureFormProps extends RateFeatureFormExtraProps {
  isEditing?: boolean
}

const RateFeatureForm: FC<RateFeatureFormProps> = (props) => {
  const { prevValues, isEditing } = props
  const { user } = useAuth()
  const router = useRouter()
  const { featureId } = router.query as { featureId: string }
  const intl = useIntl()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useRateFeatureForm({ prevValues })

  const { data: dataCategories } = useGetProductCategoriesQuery()

  const { data: dataTypeRateFeature } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATRFT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const listTypesRateFeature =
    dataTypeRateFeature?.getGeneralParametersByCode.generalParameterValue ?? []
  const listCategories = dataCategories?.productCategories.data ?? []

  const [createRateFeature, { loading: createRateFeatureLoading }] = useCreateRateFeatureMutation({
    onCompleted: () => {
      toast.success(intl.formatMessage('pages.rates.features.form.feature-created-message'), {
        position: 'top-right',
        duration: 2000,
      })
      debounce(() => router.push(paths.rates.features.root), 2000)()
    },
  })

  const [updateRateFeature, { loading: updateRateFeatureLoading }] = useUpdateRateFeatureMutation({
    onCompleted: () => {
      toast.success(intl.formatMessage('pages.rates.features.form.feature-updated-message'), {
        position: 'top-right',
        duration: 2000,
      })
      debounce(() => router.push(paths.rates.features.root), 2000)()
    },
  })

  const onSubmit = async (formData: RateFeatureFormValues) => {
    try {
      if (isEditing && featureId) {
        await updateRateFeature({
          variables: {
            rateFeature: {
              idRateFeature: featureId,
              idOu: user?.idOu,
              idProductCategory: formData.idProductCategory,
              idRateFeatureType: formData.idRateFeatureType,
              code: formData.code,
              name: formData.name,
              shortName: formData.shortName,
              idUserCreate: user?.idUser,
              idUserUpdate: user?.idUser,
            },
          },
        })

        return
      }

      await createRateFeature({
        variables: {
          rateFeature: {
            idRateFeature: '',
            idOu: user?.idOu,
            idProductCategory: formData.idProductCategory,
            idRateFeatureType: formData.idRateFeatureType,
            code: formData.code,
            name: formData.name,
            shortName: formData.shortName,
            idUserCreate: user?.idUser,
            idUserUpdate: user?.idUser,
          },
        },
      })
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const items = useRatesFeaturesBreadcrumbItems(isEditing)

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.rates.edit.rates.features.title')
                : intl.formatMessage('pages.rates.create.rates.features.title')}
            </Typography>

            <BreadCrumb items={items} />
          </Box>

          <Box marginTop={isEditing ? '16px' : '0px'}>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                startIcon={<Save />}
                disabled={createRateFeatureLoading || updateRateFeatureLoading}
              >
                {intl.formatMessage('pages.rates.features.form.save-button')}
              </Button>
              {(createRateFeatureLoading || updateRateFeatureLoading) && (
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
        </StyledFormHeaderContainer>

        <StyledFormContentContainer>
          <CardContainer header="pages.rates.create.rates.form.features.title">
            <Box
              component="main"
              display="flex"
              gap="16px"
              flexDirection={{
                xs: 'column',
                lg: 'row',
              }}
            >
              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.rates.features.create.feature.form.code.field.label'
                    )}
                    variant="outlined"
                    error={!!errors.code}
                    size="small"
                    sx={{ marginBottom: '8px' }}
                    helperText={errors.code?.message && intl.formatMessage(errors.code?.message)}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.rates.features.create.feature.form.name.field.label'
                    )}
                    variant="outlined"
                    error={!!errors.name}
                    size="small"
                    sx={{ marginBottom: '8px' }}
                    helperText={errors.name?.message && intl.formatMessage(errors.name.message)}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="shortName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.rates.features.create.feature.form.shortName.field.label'
                    )}
                    variant="outlined"
                    error={!!errors.shortName}
                    size="small"
                    sx={{ marginBottom: '8px' }}
                    helperText={
                      errors.shortName?.message && intl.formatMessage(errors.shortName?.message)
                    }
                    fullWidth
                  />
                )}
              />

              <Controller
                name="idRateFeatureType"
                control={control}
                render={({ field }) => (
                  <TextField
                    label={intl.formatMessage(
                      'pages.rates.features.create.feature.form.typeFeature.field.label'
                    )}
                    fullWidth
                    {...field}
                    select
                    size="small"
                    error={!!errors.idRateFeatureType}
                    helperText={
                      errors.idRateFeatureType?.message &&
                      intl.formatMessage(errors.idRateFeatureType?.message)
                    }
                  >
                    {listTypesRateFeature.map((typeFeatureRate) => (
                      <MenuItem
                        key={typeFeatureRate.idGeneralParameterValue}
                        value={typeFeatureRate.idGeneralParameterValue}
                      >
                        {typeFeatureRate.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Controller
                name="idProductCategory"
                control={control}
                render={({ field }) => (
                  <TextField
                    label={intl.formatMessage(
                      'pages.rates.features.create.feature.form.typeCategoryProduct.field.label'
                    )}
                    fullWidth
                    {...field}
                    select
                    size="small"
                    error={!!errors.idProductCategory}
                    helperText={
                      errors.idProductCategory?.message &&
                      intl.formatMessage(errors.idProductCategory?.message)
                    }
                  >
                    {listCategories.map((category) => (
                      <MenuItem key={category.idProductCategory} value={category.idProductCategory}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Box>
          </CardContainer>
        </StyledFormContentContainer>
      </form>
    </ViewLayout>
  )
}

export default RateFeatureForm

const StyledFormHeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`

const StyledFormContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  & .MuiFormHelperText-root {
    margin-left: 0px;
  }
`
