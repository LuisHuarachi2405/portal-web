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
import { Controller, FormProvider, useFieldArray } from 'react-hook-form'
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
  EntityIdentificationTypeCreateEntityInput,
  useCreateEntityMutation,
  useUpdateEntityMutation,
} from '@/shared/graphql/generated/entities-api'
import { useGetGeneralParametersByCodeArrayQuery } from '@/shared/graphql/generated/general-parameters-api'
import { Spinner } from '@/shared/components/spinner'

import { EntityInputsAddress } from './entities-inputs-address'

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

  const methods = useEntityForm({
    prevValues,
  })

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

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

  const {
    fields: entityIdentifyValuesFields,
    append: appendIdentify,
    remove: removeIdentify,
  } = useFieldArray({
    control,
    name: 'idEntityIdType',
  })

  const addIdentifyValues = () => {
    appendIdentify({ ...defaultValues.idEntityIdType![0] })
  }

  const deleteIdentifyValues = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index)
    removeIdentify(index)
  }

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
              roles: data!.role!.map((rol: string) => ({ idRole: rol })),
              idTypeEntity: data.entityType,
              idsIdentificationTypes: data.idEntityIdType?.map((idEntityIdType) => ({
                idEntityIdentificationType: idEntityIdType.idEntityIdType,
                value: idEntityIdType.value,
              })),
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
            roles: data!.role!.map((rol: string) => ({ idRole: rol })),
            idTypeEntity: data.entityType,
            idsIdentificationTypes: data.idEntityIdType?.map((idEntityIdType) => ({
              idEntityIdentificationType: idEntityIdType.idEntityIdType,
              value: idEntityIdType.value,
            })) as unknown as EntityIdentificationTypeCreateEntityInput[],
            addresses: data.entityDirectionValues!,
            contacts: data.entityContactValues!,
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

  const { data, loading, error } = useGetGeneralParametersByCodeArrayQuery({
    variables: {
      codes: codeGeneralParameters.map((code) => code.code),
    },
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <p>Error</p>

  if (!data || loading) return <Spinner />

  const DataGeneralParameters: Record<string, []> = {}

  data?.getGeneralParametersByCodeArray.forEach((generalParameter) => {
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderLayout>
            <Box display="flex" flexDirection="column" gap="16px">
              <Typography variant="h5" fontWeight={700}>
                {isEditing
                  ? intl.formatMessage('pages.entity.edit.title')
                  : intl.formatMessage('pages.entity.label.create')}
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
                  disabled={updateEntityLoading || createEntityLoading}
                >
                  {intl.formatMessage(
                    'pages.general.parameters.create.parameter.form.save.button.name'
                  )}
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
            </Box>
          </HeaderLayout>

          <Box display="flex" flexDirection="column" gap="32px">
            <CardContainer header="pages.entities.create.entity.info.title">
              <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
                <Controller
                  name="entityType"
                  control={control}
                  render={({ field }) => (
                    <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
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
                          errors.entityType?.message &&
                          intl.formatMessage(errors.entityType.message)
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
                    <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
                      <TextField
                        {...field}
                        label={intl.formatMessage(
                          'pages.entities.create.entity.form.role.field.label'
                        )}
                        error={!!errors.role}
                        variant="outlined"
                        size="small"
                        select
                        sx={{ marginBottom: '8px' }}
                        helperText={errors.role?.message && intl.formatMessage(errors.role.message)}
                        fullWidth
                        SelectProps={{
                          multiple: true,
                          value: field.value,
                          onChange: (e) => {
                            field.onChange(e.target.value)
                          },
                        }}
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
              </Box>
            </CardContainer>

            <CardContainer header="pages.entities.create.entity.basicInformation.title">
              <Box display="flex" sx={{ flexDirection: { xs: 'column', lg: 'row' } }} gap="32px">
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
              </Box>
            </CardContainer>

            <CardContainer header="pages.entities.create.entity.identify.title">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {entityIdentifyValuesFields.map((item, index) => (
                  <Box
                    key={item.id}
                    display="flex"
                    sx={{ flexDirection: { xs: 'column', md: 'row' }, marginBottom: '10px' }}
                    gap="32px"
                  >
                    <Controller
                      name={`idEntityIdType.${index}.idEntityIdType`}
                      control={control}
                      render={({ field }) => (
                        <Box width="100%">
                          <TextField
                            {...field}
                            label={intl.formatMessage(
                              'pages.entities.create.entity.form.identityType.field.label'
                            )}
                            variant="outlined"
                            error={!!errors.idEntityIdType?.[index]?.idEntityIdType}
                            size="small"
                            select
                            sx={{ marginBottom: '8px' }}
                            helperText={
                              errors.idEntityIdType?.[index]?.idEntityIdType?.message &&
                              intl.formatMessage(
                                errors.idEntityIdType?.[index]?.idEntityIdType?.message as string
                              )
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
                      name={`idEntityIdType.${index}.value`}
                      control={control}
                      render={({ field }) => (
                        <Box width="100%">
                          <TextField
                            {...field}
                            label={intl.formatMessage(
                              'pages.entities.create.entity.form.identifyNumber.field.label'
                            )}
                            variant="outlined"
                            error={!!errors.idEntityIdType?.[index]?.value}
                            size="small"
                            sx={{ marginBottom: '8px' }}
                            helperText={
                              errors.idEntityIdType?.[index]?.value?.message &&
                              intl.formatMessage(
                                errors.idEntityIdType?.[index]?.value?.message as string
                              )
                            }
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
                      {entityIdentifyValuesFields.length - 1 === index && (
                        <IconButton color="primary" onClick={addIdentifyValues}>
                          <Add />
                        </IconButton>
                      )}
                      {entityIdentifyValuesFields.length > 1 && (
                        <IconButton data-index={index} onClick={deleteIdentifyValues}>
                          <Delete />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContainer>

            <CardContainer header="pages.entities.create.entity.address.title">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {entityDirectionValuesFields.map((item, index) => (
                  <EntityInputsAddress
                    index={index}
                    key={item.id}
                    item={item}
                    addDirectionValues={addDirectionValues}
                    deleteDirectionValues={deleteDirectionValues}
                    DataGeneralParameters={DataGeneralParameters}
                    isEditing={!!isEditing}
                    entityDirectionValuesFieldsLength={entityDirectionValuesFields.length}
                  />
                ))}
              </Box>
            </CardContainer>

            <CardContainer header="pages.entities.create.entity.contacts.title">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {entityContactValuesFields.map((item, index) => (
                  <Box
                    key={item.id}
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
                                errors.entityContactValues?.[index]?.idContactType
                                  ?.message as string
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
                ))}
              </Box>
            </CardContainer>

            <CardContainer header="pages.entities.create.entity.info.title">
              <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
                <Controller
                  name="market"
                  control={control}
                  render={({ field }) => (
                    <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
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

                {watchRoleValue!.find((rol) => rol === '457df1d64aa511edb6071615a0c060f5') && (
                  <Controller
                    name="channel"
                    control={control}
                    render={({ field }) => (
                      <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
                        <TextField
                          {...field}
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
                {watchRoleValue!.find((rol) => rol === '457df57c4aa511edb6071615a0c060f5') && (
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
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
                    <Box width="100%" sx={{ maxWidth: { xs: '100%', md: '250px' } }}>
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
      </FormProvider>
    </ViewLayout>
  )
}

const HeaderLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`

export default EntityForm
