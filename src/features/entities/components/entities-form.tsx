import { FC, MouseEvent } from 'react'
import {
  TextField,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Button,
  CircularProgress,
} from '@mui/material'
import { Add, Delete, Save } from '@mui/icons-material'
import { Controller, useFieldArray } from 'react-hook-form'
import toast from 'react-hot-toast'
import styled from '@emotion/styled'
import debounce from 'lodash/debounce'
import { useRouter } from 'next/router'

import { CardContainer } from '@/shared/components/card-container'
import { ViewLayout } from '@/shared/components/view-layout'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import {
  useCreateEntityMutation,
  useUpdateEntityMutation,
} from '@/shared/graphql/generated/entities-api'
import { useGetGeneralParametersQuery } from '@/shared/graphql/generated/general-parameters-api'
import { Spinner } from '@/shared/components/spinner'

import { defaultValues, useEntityForm, UseEntityFormExtraProps } from '../hooks/use-entity-form'
import { FormDataEntity } from '../types/form.types'
import { useBuildBreadcrumbItems } from '../utils/entities-breadcrumb-items'

const codeGeneralParameters = [
  { code: 'ENTROL', value: 'role' },
  { code: 'ENTENT', value: 'entityType' },
  { code: 'ENTMKT', value: 'market' },
  { code: 'ENTCON', value: 'contactType' },
  { code: 'ENTDIR', value: 'directionType' },
  { code: 'ENTPRV', value: 'province' },
  { code: 'ENTSEC', value: 'industry' },
  { code: 'ENTNEG', value: 'businessType' },
  { code: 'ENTEST', value: 'state' },
  { code: 'ENTCNL', value: 'channel' },
  { code: 'ENTIDS', value: 'identifyType' },
  { code: 'ENTPAI', value: 'country' },
]

interface EntityFormProps extends UseEntityFormExtraProps {
  isEditing?: boolean
}

export const EntityForm: FC<EntityFormProps> = (props) => {
  const { prevValues, isEditing } = props

  const intl = useIntl()

  const router = useRouter()

  const [createEntity, { loading: createEntityLoading }] = useCreateEntityMutation({
    onCompleted: () => {
      toast.success(intl.formatMessage('pages.entities.form.success-entity-created-message'), {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const [updateEntity, { loading: updateEntityLoading }] = useUpdateEntityMutation({
    onCompleted: () => {
      toast.success(intl.formatMessage('pages.entities.form.success-entity-updated-message'), {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useEntityForm({
    prevValues,
  })

  const watchRoleValue = watch('role')

  const {
    fields: entityDirectionValuesFields,
    append: appendDirection,
    remove: removeDirection,
  } = useFieldArray({
    control,
    name: 'entityDirectionValues',
  })

  const {
    fields: entityContactValuesFields,
    append: appendContact,
    remove: removeContact,
  } = useFieldArray({
    control,
    name: 'entityContactValues',
  })

  const addDirectionValues = () => {
    appendDirection({ ...defaultValues.entityDirectionValues![0] })
  }

  const deleteDirectionValues = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index)
    removeDirection(index)
  }

  const addContactValues = () => {
    appendContact({ ...defaultValues.entityContactValues![0] })
  }

  const deleteContactValues = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index)
    removeContact(index)
  }

  const onSubmit = async (data: FormDataEntity) => {
    try {
      if (isEditing && prevValues?.idEntity) {
        const updatedEntity = await updateEntity({
          variables: {
            updateEntityInput: {
              idEntity: prevValues.idEntity,
              name: data.name!,
              commercialName: data.commercialName!,
              idCountry: data.entityDirectionValues![0].idCountry,
              idBusinessType: data.businessType,
              idChannel: data.channel,
              idIndustry: data.industry,
              idMarket: data.market,
              idRole: data.role,
              idTypeEntity: data.entityType,
              idsIdentificationTypes: [
                {
                  idEntityIdentificationType: data.idEntityIdType!.idEntityIdType,
                  value: data.idEntityIdType!.value!,
                },
              ],
              addresses: data.entityDirectionValues,
              contacts: data.entityContactValues,
            },
          },
        })

        if (updatedEntity.data?.updateEntity) {
          debounce(() => router.push(paths.entities.root), 2000)()
        }
        return
      }

      const newEntity = await createEntity({
        variables: {
          entity: {
            name: data.name!,
            commercialName: data.commercialName!,
            idCountry: data.entityDirectionValues![0].idCountry,
            idBusinessType: data.businessType,
            idChannel: data.channel,
            idIndustry: data.industry,
            idMarket: data.market,
            idRole: data.role,
            idTypeEntity: data.entityType,
            idsIdentificationTypes: [
              {
                idEntityIdentificationType: data.idEntityIdType!.idEntityIdType,
                value: data.idEntityIdType!.value!,
              },
            ],
            addresses: data.entityDirectionValues!.map((address) => ({
              ...address,
            })),
            contacts: data.entityContactValues!.map((contact) => ({
              ...contact,
            })),
          },
        },
      })

      if (newEntity.data?.createEntity) {
        debounce(() => router.push(paths.entities.root), 2000)()
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const items = useBuildBreadcrumbItems(isEditing)

  const { data, loading, error } = useGetGeneralParametersQuery({
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <p>Error</p>

  if (!data || loading) return <Spinner />

  const DataGeneralParameters: Record<string, []> = {}

  data?.generalParameters.forEach((generalParameter) => {
    let propertyName = ''

    codeGeneralParameters.forEach((code) => {
      if (generalParameter.code === code.code) {
        propertyName = code.value
      }
    })

    DataGeneralParameters[propertyName] = generalParameter.generalParameterValue as []
  })

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeaderLayout>
          <HeaderTitleRegisterEntity>
            <Box display="flex" gap="10px" flexDirection="column">
              <Typography variant="h5" fontWeight={700}>
                {isEditing
                  ? intl.formatMessage('pages.entity.edit.title')
                  : intl.formatMessage('pages.entity.label.create')}
              </Typography>
              <BreadCrumb items={items} />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                startIcon={<Save />}
                disabled={updateEntityLoading || createEntityLoading}
              >
                Save
              </Button>
              {(createEntityLoading || updateEntityLoading) && (
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
          </HeaderTitleRegisterEntity>

          <HeaderFiltersRegisterEntity>
            <Controller
              name="entityType"
              control={control}
              render={({ field }) => (
                <Box width="100%" maxWidth={250}>
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.entities.create.entity.form.entityType.field.label'
                    )}
                    variant="outlined"
                    error={!!errors.entityType}
                    size="small"
                    select
                    sx={{ marginBottom: '8px' }}
                    helperText={
                      errors.entityType?.message && intl.formatMessage(errors.entityType.message)
                    }
                    fullWidth
                  >
                    {DataGeneralParameters.entityType.map(
                      (value: { name: string; idGeneralParameterValue: string }) => (
                        <MenuItem
                          key={value.idGeneralParameterValue}
                          value={value.idGeneralParameterValue}
                        >
                          {value.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                </Box>
              )}
            />

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Box width="100%" maxWidth={250}>
                  <TextField
                    {...field}
                    label={intl.formatMessage('pages.entities.create.entity.form.role.field.label')}
                    variant="outlined"
                    error={!!errors.entityType}
                    size="small"
                    select
                    sx={{ marginBottom: '8px' }}
                    helperText={errors.role?.message && intl.formatMessage(errors.role.message)}
                    fullWidth
                  >
                    {DataGeneralParameters.role.map(
                      (value: { name: string; idGeneralParameterValue: string }) => (
                        <MenuItem
                          key={value.idGeneralParameterValue}
                          value={value.idGeneralParameterValue}
                        >
                          {value.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                </Box>
              )}
            />
          </HeaderFiltersRegisterEntity>
        </HeaderLayout>

        <Box display="flex" flexDirection="column" gap="32px">
          <CardContainer header="pages.entities.create.entity.basicInformation.title">
            <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Box width="100%">
                    <TextField
                      {...field}
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.name.field.label'
                      )}
                      variant="outlined"
                      error={!!errors.name}
                      size="small"
                      sx={{ marginBottom: '8px' }}
                      helperText={errors.name?.message && intl.formatMessage(errors.name.message)}
                      fullWidth
                    />
                  </Box>
                )}
              />

              <Controller
                name="commercialName"
                control={control}
                render={({ field }) => (
                  <Box width="100%">
                    <TextField
                      {...field}
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.name.commercial.field.label'
                      )}
                      variant="outlined"
                      error={!!errors.commercialName}
                      size="small"
                      sx={{ marginBottom: '8px' }}
                      helperText={
                        errors.commercialName?.message &&
                        intl.formatMessage(errors.commercialName.message)
                      }
                      fullWidth
                    />
                  </Box>
                )}
              />

              <Controller
                name="idEntityIdType.idEntityIdType"
                control={control}
                render={({ field }) => (
                  <Box width="100%">
                    <TextField
                      {...field}
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.identityType.field.label'
                      )}
                      variant="outlined"
                      error={!!errors.idEntityIdType?.idEntityIdType}
                      size="small"
                      select
                      sx={{ marginBottom: '8px' }}
                      helperText={
                        errors.idEntityIdType?.idEntityIdType?.message &&
                        intl.formatMessage(errors.idEntityIdType.idEntityIdType.message)
                      }
                      fullWidth
                    >
                      {DataGeneralParameters.identifyType.map(
                        (value: { name: string; idGeneralParameterValue: string }) => (
                          <MenuItem
                            key={value.idGeneralParameterValue}
                            value={value.idGeneralParameterValue}
                          >
                            {value.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Box>
                )}
              />

              <Controller
                name="idEntityIdType.value"
                control={control}
                render={({ field }) => (
                  <Box width="100%">
                    <TextField
                      {...field}
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.identifyNumber.field.label'
                      )}
                      variant="outlined"
                      error={!!errors.idEntityIdType?.value}
                      size="small"
                      sx={{ marginBottom: '8px' }}
                      helperText={
                        errors.idEntityIdType?.value?.message &&
                        intl.formatMessage(errors.idEntityIdType?.value?.message!)
                      }
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Box>
          </CardContainer>

          <CardContainer header="pages.entities.create.entity.address.title">
            {entityDirectionValuesFields.map((item, index) => (
              <div key={item.id}>
                <GridLayout>
                  <Controller
                    name={`entityDirectionValues.${index}.idAddressType`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          id="entity-type-contact"
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.directionType.array.field.label'
                          )}
                          select
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.idAddressType}
                          size="small"
                          helperText={
                            errors.entityDirectionValues?.[index]?.idAddressType?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.idAddressType
                                ?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {DataGeneralParameters.directionType.map(
                            (value: { name: string; idGeneralParameterValue: string }) => (
                              <MenuItem
                                key={value.idGeneralParameterValue}
                                value={value.idGeneralParameterValue}
                              >
                                {value.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.line1`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.direction.array.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.line1}
                          size="small"
                          sx={{ marginBottom: '8px' }}
                          helperText={
                            errors.entityDirectionValues?.[index]?.line1?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.line1?.message!
                            )
                          }
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.line2`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.direction.array.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.line2}
                          size="small"
                          placeholder="Direction Optional"
                          sx={{ marginBottom: '8px' }}
                          helperText={
                            errors.entityDirectionValues?.[index]?.line2?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.line2?.message!
                            )
                          }
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.idState`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          id="entity-type-contact"
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.state.array.field.label'
                          )}
                          select
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.idState}
                          size="small"
                          helperText={
                            errors.entityDirectionValues?.[index]?.idState &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.idState?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {DataGeneralParameters.state.map(
                            (value: { name: string; idGeneralParameterValue: string }) => (
                              <MenuItem
                                key={value.idGeneralParameterValue}
                                value={value.idGeneralParameterValue}
                              >
                                {value.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.idProvince`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          id="entity-country"
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.city.array.field.label'
                          )}
                          select
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.idProvince}
                          size="small"
                          helperText={
                            errors.entityDirectionValues?.[index]?.idProvince?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.idProvince?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {DataGeneralParameters.province.map(
                            (value: { name: string; idGeneralParameterValue: string }) => (
                              <MenuItem
                                key={value.idGeneralParameterValue}
                                value={value.idGeneralParameterValue}
                              >
                                {value.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.idCountry`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          id="entity-country"
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.country.array.field.label'
                          )}
                          select
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.idCountry}
                          size="small"
                          helperText={
                            errors.entityDirectionValues?.[index]?.idCountry?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.idCountry?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {DataGeneralParameters.country.map(
                            (value: { name: string; idGeneralParameterValue: string }) => (
                              <MenuItem
                                key={value.idGeneralParameterValue}
                                value={value.idGeneralParameterValue}
                              >
                                {value.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityDirectionValues.${index}.postalCode`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.postal.array.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.entityDirectionValues?.[index]?.postalCode}
                          size="small"
                          sx={{ marginBottom: '8px' }}
                          helperText={
                            errors.entityDirectionValues?.[index]?.postalCode?.message &&
                            intl.formatMessage(
                              errors.entityDirectionValues?.[index]?.postalCode?.message!
                            )
                          }
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Box>
                    <TextField hidden type="hidden" variant="standard" />
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    minWidth="124px"
                  >
                    {entityDirectionValuesFields.length - 1 === index && (
                      <IconButton color="primary" onClick={addDirectionValues}>
                        <Add />
                      </IconButton>
                    )}
                    {entityDirectionValuesFields.length > 1 && (
                      <IconButton data-index={index} onClick={deleteDirectionValues}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </GridLayout>
              </div>
            ))}
          </CardContainer>

          <CardContainer header="pages.entities.create.entity.contacts.title">
            {entityContactValuesFields.map((item, index) => (
              <div key={item.id}>
                <Box
                  display="flex"
                  sx={{ flexDirection: { xs: 'column', md: 'row' }, marginBottom: '10px' }}
                  gap="32px"
                >
                  <Controller
                    name={`entityContactValues.${index}.idContactType`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          id="entity-type-contact"
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.contactType.array.field.label'
                          )}
                          select
                          variant="outlined"
                          error={!!errors.entityContactValues?.[index]?.idContactType}
                          size="small"
                          helperText={
                            errors.entityContactValues?.[index]?.idContactType?.message &&
                            intl.formatMessage(
                              errors.entityContactValues?.[index]?.idContactType?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        >
                          {DataGeneralParameters.contactType.map(
                            (value: { name: string; idGeneralParameterValue: string }) => (
                              <MenuItem
                                key={value.idGeneralParameterValue}
                                value={value.idGeneralParameterValue}
                              >
                                {value.name}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                    )}
                  />

                  <Controller
                    name={`entityContactValues.${index}.value`}
                    control={control}
                    render={({ field }) => (
                      <Box width="100%">
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'pages.entities.create.entity.form.contactValue.array.field.label'
                          )}
                          variant="outlined"
                          error={!!errors.entityContactValues?.[index]?.value}
                          size="small"
                          helperText={
                            errors.entityContactValues?.[index]?.value?.message &&
                            intl.formatMessage(
                              errors.entityContactValues?.[index]?.value?.message as string
                            )
                          }
                          sx={{ marginBottom: '8px' }}
                          fullWidth
                        />
                      </Box>
                    )}
                  />

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    minWidth="124px"
                  >
                    {entityContactValuesFields.length - 1 === index && (
                      <IconButton color="primary" onClick={addContactValues}>
                        <Add />
                      </IconButton>
                    )}
                    {entityContactValuesFields.length > 1 && (
                      <IconButton data-index={index} onClick={deleteContactValues}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </div>
            ))}
          </CardContainer>

          <CardContainer header="pages.entities.create.entity.info.title">
            <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
              <Controller
                name="market"
                control={control}
                render={({ field }) => (
                  <Box width="100%">
                    <TextField
                      {...field}
                      id="entity-market"
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.market.field.label'
                      )}
                      select
                      variant="outlined"
                      error={!!errors.market}
                      size="small"
                      helperText={
                        errors.market && intl.formatMessage(errors.market.message as string)
                      }
                      sx={{ marginBottom: '8px' }}
                      fullWidth
                    >
                      {DataGeneralParameters.market.map(
                        (value: { name: string; idGeneralParameterValue: string }) => (
                          <MenuItem
                            key={value.idGeneralParameterValue}
                            value={value.idGeneralParameterValue}
                          >
                            {value.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Box>
                )}
              />

              {watchRoleValue === '457df57c4aa511edb6071615a0c060f5' && (
                <Controller
                  name="channel"
                  control={control}
                  render={({ field }) => (
                    <Box width="100%">
                      <TextField
                        {...field}
                        id="entity-market"
                        label={intl.formatMessage(
                          'pages.entities.create.entity.form.channel.field.label'
                        )}
                        select
                        variant="outlined"
                        error={!!errors.channel}
                        helperText={
                          errors.channel && intl.formatMessage(errors.channel.message as string)
                        }
                        size="small"
                        sx={{ marginBottom: '8px' }}
                        fullWidth
                      >
                        {DataGeneralParameters.channel.map(
                          (value: { name: string; idGeneralParameterValue: string }) => (
                            <MenuItem
                              key={value.idGeneralParameterValue}
                              value={value.idGeneralParameterValue}
                            >
                              {value.name}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    </Box>
                  )}
                />
              )}
            </Box>
          </CardContainer>

          <CardContainer header="pages.entities.create.entity.info.title">
            <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
              {watchRoleValue !== '457df57c4aa511edb6071615a0c060f5' && (
                <Controller
                  name="industry"
                  control={control}
                  render={({ field }) => (
                    <Box width="30%">
                      <TextField
                        {...field}
                        id="entity-type-contact"
                        label={intl.formatMessage(
                          'pages.entities.create.entity.form.sector.field.label'
                        )}
                        variant="outlined"
                        error={!!errors.industry}
                        size="small"
                        select
                        sx={{ marginBottom: '8px' }}
                        helperText={
                          errors.industry?.message && intl.formatMessage(errors.industry.message)
                        }
                        fullWidth
                      >
                        {DataGeneralParameters.industry.map(
                          (value: { name: string; idGeneralParameterValue: string }) => (
                            <MenuItem
                              key={value.idGeneralParameterValue}
                              value={value.idGeneralParameterValue}
                            >
                              {value.name}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    </Box>
                  )}
                />
              )}

              <Controller
                name="businessType"
                control={control}
                render={({ field }) => (
                  <Box width="30%">
                    <TextField
                      {...field}
                      id="entity-type-contact"
                      label={intl.formatMessage(
                        'pages.entities.create.entity.form.businessType.field.label'
                      )}
                      variant="outlined"
                      error={!!errors.businessType}
                      size="small"
                      select
                      sx={{ marginBottom: '8px' }}
                      helperText={
                        errors.businessType?.message &&
                        intl.formatMessage(errors.businessType.message)
                      }
                      fullWidth
                    >
                      {DataGeneralParameters.businessType.map(
                        (value: { name: string; idGeneralParameterValue: string }) => (
                          <MenuItem
                            key={value.idGeneralParameterValue}
                            value={value.idGeneralParameterValue}
                          >
                            {value.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Box>
                )}
              />
            </Box>
          </CardContainer>
        </Box>
      </form>
    </ViewLayout>
  )
}

const HeaderTitleRegisterEntity = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderFiltersRegisterEntity = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const HeaderLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`

const GridLayout = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`

export default EntityForm
