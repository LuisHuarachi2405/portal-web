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
  useCreateRolePermissionMutation,
  useUpdateRolePermissionMutation,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useRolePermissionForm } from '../hooks/use-role-permission-form'
import { useBuildBreadcrumbItems } from '../utils/role-permissions-breadcrumb-items'
import { FormDataRolePermissions } from '../types/form.types'

interface RolePermissionFormProps {
  isEditing?: boolean
  prevValues?: FormDataRolePermissions
}

const ROLES_CODE = 'UXROLES'
const PERMISSIONS_CODE = 'UXPERMISSIONS'

const RolePermissionForm: FC<RolePermissionFormProps> = (props) => {
  const { prevValues, isEditing } = props

  const intl = useIntl()

  const router = useRouter()

  const { rolePermissionForm, permissionsForm, addRolePermission, removeRolePermission } =
    useRolePermissionForm({
      prevValues,
    })

  const { data: rolesData, loading: rolesDataIsLoading } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: ROLES_CODE,
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
  } = rolePermissionForm

  const [createRolePermission, { loading: createRolePermissionLoading }] =
    useCreateRolePermissionMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage('pages.role.permission.form.success-role-permission-created-message'),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        debounce(() => router.push(paths.users.rolePermissions.root), 2000)()
      },
    })

  const [updateRolePermission, { loading: updateRolePermissionLoading }] =
    useUpdateRolePermissionMutation({
      onCompleted: () => {
        toast.success(
          intl.formatMessage('pages.role.permission.form.success-role-permission-updated-message'),
          {
            position: 'top-right',
            duration: 2000,
          }
        )
        debounce(() => router.push(paths.users.rolePermissions.root), 2000)()
      },
    })

  const onSubmit = async (formData: FormDataRolePermissions) => {
    try {
      if (isEditing && prevValues?.idRole && prevValues?.idPermissions.length) {
        // TODO: Update role permission update many
        await updateRolePermission({
          variables: {
            updateRolePermissionInput: {
              idRole: prevValues.idRole,
              newIdRole: formData.idRole,
              idPermission: prevValues.idPermissions[0].idPermission,
              newIdPermission: formData.idPermissions.flatMap(
                (permission) => permission.idPermission
              )[0],
            },
          },
        })

        return
      }

      await createRolePermission({
        variables: {
          createRolePermissionInput: {
            idRole: formData.idRole,
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

  if (rolesDataIsLoading || permissionsDataIsLoading) {
    return <Spinner />
  }

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing
                ? intl.formatMessage('pages.role.permission.edit.title')
                : intl.formatMessage('pages.role.permission.create.title')}
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
                disabled={createRolePermissionLoading || updateRolePermissionLoading}
              >
                {intl.formatMessage(
                  'pages.general.parameters.create.parameter.form.save.button.name'
                )}
              </Button>
              {(createRolePermissionLoading || updateRolePermissionLoading) && (
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
                name="idRole"
                control={control}
                render={({ field }) => (
                  <FormControl sx={{ width: '100%', maxWidth: '250px' }} size="small">
                    <InputLabel id="role-select-label" sx={{ zIndex: 99, background: '#fff' }}>
                      Role
                    </InputLabel>

                    <Select {...field} labelId="role-select-label" error={!!errors.idRole}>
                      {rolesData?.getGeneralParametersByCode.generalParameterValue.map((role) => (
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

          <CardContainer header="pages.role.permission.title">
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

export default RolePermissionForm

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
