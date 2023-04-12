import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Add, Delete, Save } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import debounce from 'lodash/debounce'
import { useRouter } from 'next/router'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { ViewLayout } from '@/shared/components/view-layout'
import {
  useCreateGeneralParameterMutation,
  useGetGeneralParameterValueByArgsQuery,
  useUpdateGeneralParameterMutation,
} from '@/shared/graphql/generated/general-parameters-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import {
  UseGeneralParameterFormExtraProps,
  useGeneralParametersForm,
} from '../hooks/use-general-parameter-form'
import { FormDataGeneralParameters } from '../types/form.types'
import { useBuildBreadcrumbItems } from '../utils/general-parameters-breadcrumb-items'

interface GeneralParametersFormProps extends UseGeneralParameterFormExtraProps {
  isEditing?: boolean
}

const GeneralParametersForm: FC<GeneralParametersFormProps> = (props) => {
  const { prevValues, isEditing } = props

  const intl = useIntl()

  const [getGeneralParameterValueInput, setGetGeneralParameterValueInput] = useState<string>('')

  const router = useRouter()

  const {
    generalParametersForm,
    generalParameterValuesForm,
    addGeneralParameterValues,
    removeGeneralParameterValues,
  } = useGeneralParametersForm({
    prevValues,
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = generalParametersForm

  const { data } = useGetGeneralParameterValueByArgsQuery({
    variables: { userInput: getGeneralParameterValueInput },
  })

  const parentGeneralParameterValueOptions =
    data?.getGeneralParameterValueByArgs.map((generalParameterValue) => ({
      label: `${generalParameterValue.name} - ${generalParameterValue.code}`,
      value: generalParameterValue.idGeneralParameterValue,
    })) ?? []

  const [createGeneralParameter, { loading: createGeneralParameterLoading }] =
    useCreateGeneralParameterMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.general.parameters.form.success-general-parameter-created-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
      },
    })

  const [updateGeneralParameter, { loading: updateGeneralParameterLoading }] =
    useUpdateGeneralParameterMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.general.parameters.form.success-general-parameter-updated-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
      },
    })

  const onSubmit = async (formData: FormDataGeneralParameters) => {
    try {
      if (isEditing && prevValues?.idGeneralParameter) {
        const updatedGeneralParameter = await updateGeneralParameter({
          variables: {
            updateGeneralParameterInput: {
              idGeneralParameter: prevValues.idGeneralParameter,
              idOu: prevValues.idOu,
              name: formData.name,
              shortName: formData.shortName,
              code: formData.code,
              idGeneralParameterValue: formData.parentParameter.value,
              generalParameterValue: formData.generalParametersValues.map(
                (generalParameterValue) => ({
                  idOu: generalParameterValue.idOu,
                  idGeneralParameterValue: generalParameterValue.idGeneralParameterValue,
                  name: generalParameterValue.name,
                  shortName: generalParameterValue.shortName,
                  code: generalParameterValue.code,
                  value: generalParameterValue.value,
                  type: generalParameterValue.type,
                })
              ),
            },
          },
        })

        if (updatedGeneralParameter.data?.updateGeneralParameter) {
          debounce(() => router.push(paths.generalParameters.root), 2000)()
        }
        return
      }

      const newGeneralParameter = await createGeneralParameter({
        variables: {
          createGeneralParameterInput: {
            name: formData.name,
            shortName: formData.shortName,
            code: formData.code,
            idGeneralParameterValue: formData.parentParameter.value,
            generalParameterValue: formData.generalParametersValues.map((value) => ({
              name: value.name,
              shortName: value.shortName,
              code: value.code,
              value: value.value,
            })),
          },
        },
      })

      if (newGeneralParameter.data?.createGeneralParameter) {
        debounce(() => router.push(paths.generalParameters.root), 2000)()
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const items = useBuildBreadcrumbItems(isEditing)

  const searchGeneralParameterValue = debounce((value: string) => {
    setGetGeneralParameterValueInput(value)
  }, 1000)

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.general.parameters.edit.parameter.title')
                : intl.formatMessage('pages.general.parameters.create.parameter.title')}
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
                disabled={createGeneralParameterLoading || updateGeneralParameterLoading}
              >
                {intl.formatMessage(
                  'pages.general.parameters.create.parameter.form.save.button.name'
                )}
              </Button>
              {(createGeneralParameterLoading || updateGeneralParameterLoading) && (
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
          <CardContainer header="pages.general.parameters.create.parameter.form.basic.info.title">
            <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap="32px">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.general.parameters.create.parameter.form.name.field.label'
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
                      'pages.general.parameters.create.parameter.form.shortname.field.label'
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
                name="code"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'pages.general.parameters.create.parameter.form.code.field.label'
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
                name="parentParameter"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    fullWidth
                    defaultValue={field.value}
                    onInputChange={(_e, newInputValue) => {
                      searchGeneralParameterValue(newInputValue)
                    }}
                    onChange={(_e, newValue) =>
                      field.onChange(newValue as unknown as Record<string, unknown>)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={intl.formatMessage(
                          'pages.general.parameters.create.parameter.form.parent.parameter.field.label'
                        )}
                        variant="outlined"
                        error={!!errors.parentParameter}
                        size="small"
                        helperText={errors.parentParameter?.message}
                        fullWidth
                      />
                    )}
                    options={parentGeneralParameterValueOptions}
                  />
                )}
              />
            </Box>
          </CardContainer>

          <CardContainer header="pages.general.parameters.create.parameter.form.values.info.title">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {generalParameterValuesForm.fields.map((item, index) => (
                <StyledFieldArrayContainer
                  key={item.id}
                  sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                >
                  <Controller
                    name={`generalParametersValues.${index}.name`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={intl.formatMessage(
                          'pages.general.parameters.create.parameter.form.name.array.field.value.label'
                        )}
                        variant="outlined"
                        error={!!errors.generalParametersValues?.[index]?.name}
                        size="small"
                        helperText={
                          errors.generalParametersValues?.[index]?.name?.message
                            ? intl.formatMessage(
                                errors.generalParametersValues?.[index]?.name?.message as string
                              )
                            : ''
                        }
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name={`generalParametersValues.${index}.shortName`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={intl.formatMessage(
                          'pages.general.parameters.create.parameter.form.shortname.array.field.value.label'
                        )}
                        variant="outlined"
                        error={!!errors.generalParametersValues?.[index]?.shortName}
                        size="small"
                        helperText={
                          errors.generalParametersValues?.[index]?.shortName?.message
                            ? intl.formatMessage(
                                errors.generalParametersValues?.[index]?.shortName
                                  ?.message as string
                              )
                            : ''
                        }
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name={`generalParametersValues.${index}.code`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={intl.formatMessage(
                          'pages.general.parameters.create.parameter.form.code.array.field.value.label'
                        )}
                        variant="outlined"
                        error={!!errors.generalParametersValues?.[index]?.code}
                        size="small"
                        helperText={
                          errors.generalParametersValues?.[index]?.code?.message
                            ? intl.formatMessage(
                                errors.generalParametersValues?.[index]?.code?.message as string
                              )
                            : ''
                        }
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name={`generalParametersValues.${index}.value`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={intl.formatMessage(
                          'pages.general.parameters.create.parameter.form.value.array.field.value.label'
                        )}
                        variant="outlined"
                        error={!!errors.generalParametersValues?.[index]?.value}
                        size="small"
                        helperText={
                          errors.generalParametersValues?.[index]?.value?.message
                            ? intl.formatMessage(
                                errors.generalParametersValues?.[index]?.value?.message as string
                              )
                            : ''
                        }
                        fullWidth
                      />
                    )}
                  />

                  <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="80px">
                    {generalParameterValuesForm.fields.length - 1 === index && (
                      <IconButton color="primary" onClick={addGeneralParameterValues}>
                        <Add />
                      </IconButton>
                    )}
                    {generalParameterValuesForm.fields.length > 1 && (
                      <IconButton
                        data-index={index}
                        onClick={() => removeGeneralParameterValues(index)}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </StyledFieldArrayContainer>
              ))}
            </Box>
          </CardContainer>
        </StyledFormContentContainer>
      </form>
    </ViewLayout>
  )
}

export default GeneralParametersForm

const StyledFieldArrayContainer = styled(Box)`
  display: flex;
  gap: 32px;
`

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
