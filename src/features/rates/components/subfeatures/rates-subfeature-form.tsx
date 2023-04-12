import { FC, MouseEvent } from 'react'
import styled from '@emotion/styled'
import { Add, Delete, Save } from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  debounce,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { Controller, useFieldArray } from 'react-hook-form'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { useIntl } from '@/shared/hooks/use-intl'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { ViewLayout } from '@/shared/components/view-layout'
import { paths } from '@/shared/routes/paths'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useGetProductCategoriesQuery } from '@/shared/graphql/generated/products-api'
import {
  useCreateRateSubFeatureMutation,
  useUpdateRateSubFeatureMutation,
} from '@/shared/graphql/generated/rates-api'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { RateSubfeatureFormValues } from '../../types/rates-forms.types'
import {
  defaultValues,
  RateSubfeatureFormExtraProps,
  useRateSubfeatureForm,
} from '../../hooks/use-rates-subfeatures-form'
import { useRatesSubfeaturesBreadcrumbItems } from '../../utils/rates-subfeatures-breadcrumb-items'

interface RateSubfeatureFormProps extends RateSubfeatureFormExtraProps {
  isEditing?: boolean
}

const RateFeatureForm: FC<RateSubfeatureFormProps> = (props) => {
  const { prevValues, isEditing } = props
  const router = useRouter()
  const { subfeatureId } = router.query as { subfeatureId: string }
  const intl = useIntl()
  const { user } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useRateSubfeatureForm({ prevValues })

  const { data: dataCategories } = useGetProductCategoriesQuery()

  const { data: dataTypeRateSubfeatureItem } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATSFIT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const { data: dataTypeRateSubfeature } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'RATSFT',
    },
    fetchPolicy: 'cache-and-network',
  })

  const listTypeRateSubfeatureItem =
    dataTypeRateSubfeatureItem?.getGeneralParametersByCode.generalParameterValue ?? []
  const listTypesRateSubfeature =
    dataTypeRateSubfeature?.getGeneralParametersByCode.generalParameterValue ?? []
  const listCategories = dataCategories?.productCategories.data ?? []

  const {
    fields: rateSubFeatureItemValuesFields,
    append: appendSubFeature,
    remove: removeSubFeature,
  } = useFieldArray({
    control,
    name: 'rateSubFeatureItem',
  })

  const [createRateSubfeature, { loading: createRateSubfeatureLoading }] =
    useCreateRateSubFeatureMutation({
      onCompleted: () => {
        toast.success(intl.formatMessage('pages.rates.subfeatures.form.feature-created-message'), {
          position: 'top-right',
          duration: 2000,
        })
        debounce(() => router.push(paths.rates.subfeatures.root), 2000)()
      },
    })

  const [updateRateSubfeature, { loading: updateRateSubfeatureLoading }] =
    useUpdateRateSubFeatureMutation({
      onCompleted: () => {
        toast.success(intl.formatMessage('pages.rates.subfeatures.form.feature-updated-message'), {
          position: 'top-right',
          duration: 2000,
        })
        debounce(() => router.push(paths.rates.subfeatures.root), 2000)()
      },
    })

  const deleteSubFeatureValues = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index)
    removeSubFeature(index)
  }

  const addSubFeatureValues = () => {
    appendSubFeature({ ...defaultValues.rateSubFeatureItem![0] })
  }

  const onSubmit = async (formData: RateSubfeatureFormValues) => {
    try {
      if (isEditing && subfeatureId) {
        await updateRateSubfeature({
          variables: {
            updateRateSubFeatureInput: {
              idRateSubFeature: subfeatureId,
              idOu: user?.idOu,
              idProductCategory: formData.idProductCategory,
              idRateSubFeatureType: formData.idRateSubFeatureType,
              code: formData.code,
              name: formData.name,
              shortName: formData.shortName,
              idUserCreate: user?.idUser,
              idUserUpdate: user?.idUser,
              rateSubFeatureItem: formData.rateSubFeatureItem.map((subFeatureItem) => ({
                idRateSubFeatureItem: subFeatureItem.idRateSubFeatureItem,
                name: subFeatureItem.name,
                shortName: subFeatureItem.shortName,
                code: subFeatureItem.code,
                idRateSubFeatureItemType: subFeatureItem.idRateSubFeatureItemType,
                idOu: user?.idOu,
                idUserUpdate: user?.idUser,
                idUserCreate: user?.idUser,
                idStatus: 'ACTIVE',
                idRateSubFeature: subfeatureId,
              })),
            },
          },
        })

        return
      }

      await createRateSubfeature({
        variables: {
          createRateSubFeatureInput: {
            idOu: user?.idOu,
            idProductCategory: formData.idProductCategory,
            idRateSubFeatureType: formData.idRateSubFeatureType,
            code: formData.code,
            name: formData.name,
            shortName: formData.shortName,
            idUserCreate: user?.idUser,
            idUserUpdate: user?.idUser,
            rateSubFeatureItem: formData.rateSubFeatureItem.map((subFeatureItem) => ({
              name: subFeatureItem.name,
              shortName: subFeatureItem.shortName,
              code: subFeatureItem.code,
              idRateSubFeatureItemType: subFeatureItem.idRateSubFeatureItemType,
              idOu: user?.idOu,
              idUserUpdate: user?.idUser,
              idUserCreate: user?.idUser,
              idStatus: 'ACTIVE',
              idRateSubFeature: '',
            })),
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

  const items = useRatesSubfeaturesBreadcrumbItems(isEditing)

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.rates.edit.rates.subfeatures.title')
                : intl.formatMessage('pages.rates.create.rates.subfeatures.title')}
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
                disabled={createRateSubfeatureLoading || updateRateSubfeatureLoading}
              >
                {intl.formatMessage('pages.rates.subfeatures.form.save-button')}
              </Button>
              {(createRateSubfeatureLoading || updateRateSubfeatureLoading) && (
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
          <CardContainer header="pages.rates.create.rates.form.subfeature.title">
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
                      'pages.rates.subfeatures.create.subfeatures.form.code.field.label'
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
                      'pages.rates.subfeatures.create.subfeatures.form.name.field.label'
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
                      'pages.rates.subfeatures.create.subfeatures.form.shortName.field.label'
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
                name="idRateSubFeatureType"
                control={control}
                render={({ field }) => (
                  <TextField
                    label={intl.formatMessage(
                      'pages.rates.subfeatures.create.subfeatures.form.typeSubfeature.field.label'
                    )}
                    fullWidth
                    {...field}
                    select
                    size="small"
                    error={!!errors.idRateSubFeatureType}
                    helperText={
                      errors.idRateSubFeatureType?.message &&
                      intl.formatMessage(errors.idRateSubFeatureType?.message)
                    }
                  >
                    {listTypesRateSubfeature.map((typeFeatureRate) => (
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
                      'pages.rates.subfeatures.create.subfeatures.form.typeCategoryProduct.field.label'
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

          <CardContainer header="pages.rates.create.rates.form.subfeatureItems.title">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {rateSubFeatureItemValuesFields.map((item, index) => (
                <Box
                  key={item.id}
                  display="flex"
                  sx={{ flexDirection: { xs: 'column', lg: 'row' }, marginBottom: '10px' }}
                  gap="32px"
                >
                  <Controller
                    name={`rateSubFeatureItem.${index}.code`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.rates.subfeatures.create.subfeatures.form.code.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.rateSubFeatureItem?.[index]?.code}
                          size="small"
                          helperText={
                            errors.rateSubFeatureItem?.[index]?.code?.message &&
                            intl.formatMessage(
                              errors.rateSubFeatureItem?.[index]?.code?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Controller
                    name={`rateSubFeatureItem.${index}.name`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.rates.subfeatures.create.subfeatures.form.name.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.rateSubFeatureItem?.[index]?.name}
                          size="small"
                          helperText={
                            errors.rateSubFeatureItem?.[index]?.name?.message &&
                            intl.formatMessage(
                              errors.rateSubFeatureItem?.[index]?.name?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Controller
                    name={`rateSubFeatureItem.${index}.shortName`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.rates.subfeatures.create.subfeatures.form.shortName.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.rateSubFeatureItem?.[index]?.shortName}
                          size="small"
                          helperText={
                            errors.rateSubFeatureItem?.[index]?.shortName?.message &&
                            intl.formatMessage(
                              errors.rateSubFeatureItem?.[index]?.shortName?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Controller
                    name={`rateSubFeatureItem.${index}.idRateSubFeatureItemType`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.rates.subfeatures.create.subfeatures.form.typeSubfeatureItem.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.rateSubFeatureItem?.[index]?.idRateSubFeatureItemType}
                          size="small"
                          select
                          helperText={
                            errors.rateSubFeatureItem?.[index]?.idRateSubFeatureItemType?.message &&
                            intl.formatMessage(
                              errors.rateSubFeatureItem?.[index]?.idRateSubFeatureItemType
                                ?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {listTypeRateSubfeatureItem.map((typeSubfeatureItem) => (
                            <MenuItem
                              key={typeSubfeatureItem.idGeneralParameterValue}
                              value={typeSubfeatureItem.idGeneralParameterValue}
                            >
                              {typeSubfeatureItem.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    minWidth="124px"
                  >
                    {rateSubFeatureItemValuesFields.length - 1 === index && (
                      <IconButton color="primary" onClick={addSubFeatureValues}>
                        <Add />
                      </IconButton>
                    )}
                    {rateSubFeatureItemValuesFields.length > 1 && (
                      <IconButton data-index={index} onClick={deleteSubFeatureValues}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              ))}
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
