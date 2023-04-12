import styled from '@emotion/styled'
import { Add, Delete, Save } from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import debounce from 'lodash/debounce'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { Spinner } from '@/shared/components/spinner'
import { ViewLayout } from '@/shared/components/view-layout'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  useCreateModulePermissionMutation,
  useUpdateModulePermissionMutation,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { useKeepUserOnMemory } from '@/features/auth/utils/useKeepUserOnMemory'

import { useModulePermissionForm } from '../hooks/use-module-permission-form'
import { FormDataModulePermissions } from '../types/form.types'
import { useBuildBreadcrumbItems } from '../utils/role-permissions-breadcrumb-items'

interface ModulePermissionFormProps {
  isEditing?: boolean
  prevValues?: FormDataModulePermissions
}

const MODULES_CODE = 'UXMODULES'
const PERMISSIONS_CODE = 'MXPERMISSIONS'

const ModulePermissionForm: FC<ModulePermissionFormProps> = (props) => {
  const { prevValues, isEditing } = props

  const { getUser } = useKeepUserOnMemory()
  const user = getUser()

  const intl = useIntl()

  const router = useRouter()

  const { modulePermissionForm, permissionsForm, addRolePermission, removeRolePermission } =
    useModulePermissionForm({
      prevValues,
    })

  const { data: modulesData, loading: modulesDataIsLoading } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: MODULES_CODE,
    },
  })

  const { data: permissionsData, loading: permissionsDataIsLoading } =
    useGetGeneralParametersByCodeQuery({
      variables: {
        code: PERMISSIONS_CODE,
      },
    })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = modulePermissionForm

  const [createModulePermission, { loading: createModulePermissionLoading }] =
    useCreateModulePermissionMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.module.permission.form.success-module-permission-created-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        debounce(() => router.push(paths.users.modulePermissions.root), 2000)()
      },
    })

  const [updateModulePermission, { loading: updateModulePermissionLoading }] =
    useUpdateModulePermissionMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage(
            'pages.module.permission.form.success-module-permission-updated-message'
          ),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        debounce(() => router.push(paths.users.modulePermissions.root), 2000)()
      },
    })

  const onSubmit = async (formData: FormDataModulePermissions) => {
    try {
      if (isEditing && prevValues?.idModule && prevValues?.idPermissions.length) {
        // TODO: Update role permission update many
        await updateModulePermission({
          variables: {
            updateModulePermissionInput: {
              idModule: prevValues.idModule,
              newIdModule: formData.idModule,
              idPermission: prevValues.idPermissions[0].idPermission,
              newIdPermission: formData.idPermissions.flatMap(
                (permission) => permission.idPermission
              )[0],
            },
          },
        })

        return
      }

      await createModulePermission({
        variables: {
          createModulePermission: {
            idOu: user?.idOu,
            idModule: formData.idModule,
            idPermissions: formData.idPermissions.flatMap((permission) => permission.idPermission),
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

  if (modulesDataIsLoading || permissionsDataIsLoading) {
    return <Spinner />
  }

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.module.permission.edit.title')
                : intl.formatMessage('pages.module.permission.create.title')}
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
                disabled={createModulePermissionLoading || updateModulePermissionLoading}
              >
                {intl.formatMessage(
                  'pages.general.parameters.create.parameter.form.save.button.name'
                )}
              </Button>
              {(createModulePermissionLoading || updateModulePermissionLoading) && (
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
                name="idModule"
                control={control}
                render={({ field }) => (
                  <FormControl sx={{ width: '100%', maxWidth: '250px' }} size="small">
                    <InputLabel id="role-select-label" sx={{ zIndex: 99, background: '#fff' }}>
                      Module
                    </InputLabel>

                    <Select {...field} labelId="role-select-label" error={!!errors.idModule}>
                      {modulesData?.getGeneralParametersByCode.generalParameterValue.map((role) => (
                        <MenuItem
                          key={role.idGeneralParameterValue}
                          value={role.idGeneralParameterValue}
                        >
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Box>
          </CardContainer>

          <CardContainer header="pages.module.permission.title">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {permissionsForm.fields.map((item, index) => (
                <StyledFieldArrayContainer
                  key={item.id}
                  sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                >
                  <Controller
                    name={`idPermissions.${index}.idPermission`}
                    control={control}
                    render={({ field }) => (
                      <FormControl sx={{ width: '100%', maxWidth: '250px' }} size="small">
                        <InputLabel id="role-select-label" sx={{ zIndex: 99, background: '#fff' }}>
                          Permission
                        </InputLabel>

                        <Select
                          {...field}
                          labelId="role-select-label"
                          error={!!errors.idPermissions?.[index]?.idPermission}
                        >
                          {permissionsData?.getGeneralParametersByCode.generalParameterValue.map(
                            (permission) => (
                              <MenuItem
                                key={permission.idGeneralParameterValue}
                                value={permission.idGeneralParameterValue}
                              >
                                {permission.name}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    )}
                  />

                  {!isEditing && (
                    <div>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        minWidth="80px"
                      >
                        {permissionsForm.fields.length - 1 === index && (
                          <IconButton color="primary" onClick={addRolePermission}>
                            <Add />
                          </IconButton>
                        )}
                        {permissionsForm.fields.length > 1 && (
                          <IconButton
                            data-index={index}
                            onClick={() => removeRolePermission(index)}
                          >
                            <Delete />
                          </IconButton>
                        )}
                      </Box>
                    </div>
                  )}
                </StyledFieldArrayContainer>
              ))}
            </Box>
          </CardContainer>
        </StyledFormContentContainer>
      </form>
    </ViewLayout>
  )
}

export default ModulePermissionForm

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

const StyledFieldArrayContainer = styled(Box)`
  display: flex;
  gap: 32px;
`
