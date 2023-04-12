import { FC, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Save } from '@mui/icons-material'
import { Autocomplete, Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import debounce from 'lodash/debounce'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { ViewLayout } from '@/shared/components/view-layout'
import { useIntl } from '@/shared/hooks/use-intl'
import { useGetEntitiesQuery } from '@/shared/graphql/generated/entities-api'
import { useCreateOuMutation, useUpdateOuMutation } from '@/shared/graphql/generated/users-api'
import { paths } from '@/shared/routes/paths'

import {
  UseOrganizationalUnitsFormExtraProps,
  useOrganizationalUnitsForm,
} from '../hooks/use-organizational-units-form'
import { FormDataOrganizationalUnits } from '../types/form.types'
import { useBuildBreadcrumbItems } from '../utils/organizational-units-breadcrumb-items'

interface OrganizationalUnitsFormProps extends UseOrganizationalUnitsFormExtraProps {
  isEditing?: boolean
}

const OrganizationalUnitsForm: FC<OrganizationalUnitsFormProps> = (props) => {
  const { prevValues, isEditing } = props

  const intl = useIntl()

  const router = useRouter()

  const [entitiesSearchInput, setEntitiesSearchInput] = useState<string>()

  const { data } = useGetEntitiesQuery({
    variables: {
      filter: {
        page: 1,
        userInput: entitiesSearchInput,
        limit: 10,
      },
    },
  })

  const entitiesOptions = useMemo(
    () =>
      data?.getEntities.results?.map((entity) => ({
        label: entity.name,
        value: entity.idEntity,
      })) ?? [],
    [data?.getEntities.results]
  )

  const { organizationalUnitsForm } = useOrganizationalUnitsForm({
    prevValues,
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = organizationalUnitsForm

  const [createOrganizationalUnit, { loading: createOrganizationalUnitLoading }] =
    useCreateOuMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.organizational.units.form.success-organizational-unit-created-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )

        debounce(() => router.push(paths.users.organizationalUnits.root), 2000)()
      },
    })

  const [updateOrganizationalUnit, { loading: updateOrganizationalUnitLoading }] =
    useUpdateOuMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.organizational.units.form.success-organizational-unit-updated-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        debounce(() => router.push(paths.users.organizationalUnits.root), 2000)()
      },
    })

  const onSubmit = async (formData: FormDataOrganizationalUnits) => {
    try {
      if (isEditing) {
        await updateOrganizationalUnit({
          variables: {
            data: {
              idOu: formData.idOu,
              name: formData.name,
              shortName: formData.shortName,
              code: formData.code,
              idEntity: formData.entity?.value,
            },
          },
        })

        return
      }
      await createOrganizationalUnit({
        variables: {
          data: {
            name: formData.name,
            shortName: formData.shortName,
            code: formData.code,
            idEntity: formData.entity?.value,
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

  const items = useBuildBreadcrumbItems(isEditing)

  const searchEntity = debounce((value: string) => {
    setEntitiesSearchInput(value)
  }, 1000)

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.organizational.units.edit.organizational.unit.title')
                : intl.formatMessage('pages.organizational.units.create.organizational.unit.title')}
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
                disabled={createOrganizationalUnitLoading || updateOrganizationalUnitLoading}
              >
                {intl.formatMessage(
                  'pages.general.parameters.create.parameter.form.save.button.name'
                )}
              </Button>
              {(createOrganizationalUnitLoading || updateOrganizationalUnitLoading) && (
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
                name="entity"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    fullWidth
                    defaultValue={field.value}
                    onInputChange={(_e, newInputValue) => {
                      searchEntity(newInputValue)
                    }}
                    onChange={(_e, newValue) =>
                      field.onChange(newValue as unknown as Record<string, unknown>)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Entity"
                        variant="outlined"
                        error={!!errors.entity}
                        size="small"
                        helperText={errors.entity?.message}
                        fullWidth
                      />
                    )}
                    options={entitiesOptions}
                  />
                )}
              />
            </Box>
          </CardContainer>
        </StyledFormContentContainer>
      </form>
    </ViewLayout>
  )
}

export default OrganizationalUnitsForm

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
