/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled'
import { Add, Save } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import ReactPhoneInput2 from 'react-phone-input-2'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CardContainer } from '@/shared/components/card-container'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  useCreateEntityMutation,
  useDeleteEntityMutation,
  useUpdateEntityMutation,
} from '@/shared/graphql/generated/entities-api'
import {
  GetGeneralParametersByCodeQuery,
  useGetGeneralParametersByCodeQuery,
} from '@/shared/graphql/generated/general-parameters-api'
import {
  GetUserModulesByUserIdDocument,
  GetUserRolesByUserIdDocument,
  useCreateOuMutation,
  useCreateUserModuleMutation,
  useCreateUserMutation,
  useCreateUserRoleMutation,
  useDeleteOuMutation,
  useGetOuByCodeLazyQuery,
  useGetUserModulesByUserIdQuery,
  useGetUserRolesByUserIdQuery,
  useUpdateOuMutation,
  useUpdateUserMutation,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import styles from './users-form.module.scss'

import { useBuildUserRolesColumns } from '../../hooks/use-build-user-roles-columns'
import { useBuildUserModulesColumns } from '../../hooks/use-build-users-modules-columns'
import { useUsersForm, UseUsersFormExtraProps } from '../../hooks/use-user-form'
import { FormDataUsers } from '../../types/form.types'
import { useUserBuildBreadcrumbItems } from '../../utils/users-breadcrumb-items'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface UsersFormProps extends UseUsersFormExtraProps {
  isEditing?: boolean
  rolesData?: GetGeneralParametersByCodeQuery | undefined
  modulesData?: GetGeneralParametersByCodeQuery | undefined
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const COUNTRY_CODE = 'ENTPAI'

const UsersForm: FC<UsersFormProps> = (props) => {
  const { prevValues, isEditing, rolesData, modulesData } = props

  const intl = useIntl()

  const router = useRouter()

  const [value, setValue] = useState<number>(0)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [isNewBusiness, setIsNewBusiness] = useState<boolean>(false)

  const { createUseByAdmin } = useAuth()

  const { data: countryData } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: COUNTRY_CODE,
    },
  })

  const { data: userRoleData } = useGetUserRolesByUserIdQuery({
    variables: {
      idUser: prevValues?.idUser,
    },
    skip: !prevValues?.idUser && isEditing,
  })

  const { data: userModuleData } = useGetUserModulesByUserIdQuery({
    variables: {
      idUser: prevValues?.idUser,
    },
    skip: !prevValues?.idUser && isEditing,
  })

  const { columns: userRolesColumns } = useBuildUserRolesColumns()
  const { columns: userModulesColumns } = useBuildUserModulesColumns()

  const userRolesRows = userRoleData?.getUserRolesByUserId ?? []
  const userModulesRows = userModuleData?.getUserModulesByUserId ?? []

  const countryOptions =
    countryData?.getGeneralParametersByCode.generalParameterValue.map((generalParameterValue) => ({
      label: generalParameterValue.name,
      value: generalParameterValue.idGeneralParameterValue,
    })) ?? []

  const [createUserMutation] = useCreateUserMutation({
    onCompleted: () => {
      toast.success(`User created!`, {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: () => {
      toast.error('Error creating user', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const [updateUserMutation] = useUpdateUserMutation({
    onCompleted: () => {
      toast.success(`User Updated!`, {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: () => {
      toast.error('Error updating user', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const [getOuByCode] = useGetOuByCodeLazyQuery()

  const [createOrganizationalUnit] = useCreateOuMutation()
  const [updateOrganizationalUnit] = useUpdateOuMutation()
  const [deleteOrganizationalUnit] = useDeleteOuMutation()

  const [createEntity] = useCreateEntityMutation()
  const [updateEntity] = useUpdateEntityMutation()
  const [deleteEntity] = useDeleteEntityMutation()

  const rollBack = async (params: { idOu: string | undefined; idEntity: string | undefined }) => {
    if (!params.idOu || !params.idEntity) return
    try {
      if (params.idOu) {
        await deleteOrganizationalUnit({
          variables: {
            data: {
              idOu: params.idOu,
            },
          },
        })
      }
      if (params.idEntity) {
        await deleteEntity({
          variables: {
            idEntity: params.idEntity,
          },
        })
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const [createUserRole, { loading: createUserRoleLoading }] = useCreateUserRoleMutation({
    onCompleted: () => {
      toast.success(`User role created!`, {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: () => {
      toast.error('Error creating user role', {
        position: 'top-right',
        duration: 2000,
      })
    },
    refetchQueries: [GetUserRolesByUserIdDocument],
  })

  const [createUserModule, { loading: createUserModuleLoading }] = useCreateUserModuleMutation({
    onCompleted: () => {
      toast.success(`User module created!`, {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: () => {
      toast.error('Error creating user module', {
        position: 'top-right',
        duration: 2000,
      })
    },
    refetchQueries: [GetUserModulesByUserIdDocument],
  })

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { usersForm } = useUsersForm({ prevValues })

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = usersForm

  const createUserWithOuCode = async (formData: FormDataUsers) => {
    try {
      const { data: ouData } = await getOuByCode({
        variables: { code: formData.businessCode?.trim()! },
      })

      if (ouData?.getOuByCode.idOu && ouData?.getOuByCode.idEntity) {
        const registered = await createUseByAdmin?.(formData.email.trim())

        const idUserOauth = registered?.User.Attributes.find(
          (attr: { Name: string; Value: string }) => attr.Name === 'sub'
        )?.Value

        if (registered?.User.Enabled) {
          const createdUser = await createUserMutation({
            variables: {
              data: {
                idUserOauth,
                email: formData.email.trim(),
                name: formData.name.trim(),
                phone: formData.phone.trim(),
                userName: formData.email.trim(),
                idOu: ouData.getOuByCode.idOu,
                idEntity: ouData.getOuByCode.idEntity,
                // TODO: Change this from a select component
                // English is the default language
                idLanguage: '4a31e4fb7bc211edb6071615a0c060f5',
              },
            },
          })

          if (createdUser.data?.createUser.idUser) {
            setIsNewBusiness(false)
            router.push(paths.users.root)
          }
        } else {
          toast.error(`Error creating user ${registered?.message}`, {
            position: 'top-right',
          })
        }
      }
      setLoading(false)
    } catch (error) {
      toast.error(`Error creating user ${error}`, {
        position: 'top-right',
      })
      setLoading(false)
    }
  }

  const createFullUser = async (formData: FormDataUsers) => {
    let rollbackIdOu: string | undefined
    let rollbackIdEntity: string | undefined

    if (!isNewBusiness) {
      await createUserWithOuCode(formData)
      return
    }

    try {
      const newEntity = await createEntity({
        variables: {
          entity: {
            commercialName: formData.businessName?.trim()!,
            name: formData.businessName?.trim()!,
            addresses: [],
            contacts: [],
            idsIdentificationTypes: [],
            idTypeEntity: '4aa06c224b5611edb6071615a0c060f5',
            idCountry: formData.country?.value!,
            // TODO: THIS IS A CLIENT ROLE
            roles: [{ idRole: '457df1d64aa511edb6071615a0c060f5' }],
          },
        },
      })

      if (newEntity.data?.createEntity.entity.idEntity) {
        const { idEntity } = newEntity.data!.createEntity.entity
        rollbackIdEntity = idEntity

        const newOrganizationalUnit = await createOrganizationalUnit({
          variables: {
            data: {
              name: formData.businessName!.trim(),
              shortName: formData.businessName!.trim(),
              code: formData.businessCode!.trim(),
              idEntity,
            },
          },
        })

        if (newOrganizationalUnit.data?.createOu.idOu) {
          const { idOu } = newOrganizationalUnit.data.createOu
          rollbackIdOu = idOu

          const updatedEntity = await updateEntity({
            variables: {
              updateEntityInput: {
                idEntity,
                idOu,
              },
            },
          })

          if (updatedEntity?.data?.updateEntity.result) {
            const registered = await createUseByAdmin?.(formData.email)
            const idUserOauth = registered?.User.Attributes.find(
              (attr: { Name: string; Value: string }) => attr.Name === 'sub'
            )?.Value

            if (registered?.User.Enabled) {
              const createdUser = await createUserMutation({
                variables: {
                  data: {
                    email: formData.email.trim(),
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    userName: formData.email.trim(),
                    idLanguage: '4a31e4fb7bc211edb6071615a0c060f5',
                    idUserOauth,
                    idOu,
                    idEntity,
                  },
                },
              })
              if (createdUser.data?.createUser.idUser) {
                router.push(paths.users.root)
              }
            }
          }
        }
      }
      setLoading(false)
    } catch (error) {
      await rollBack({ idOu: rollbackIdOu, idEntity: rollbackIdEntity })
      setLoading(false)
      toast.error(`Error creating user ${error}`, {
        position: 'top-right',
      })
    }
  }

  const updateFullUser = async (formData: FormDataUsers) => {
    const updatedEntity = await updateEntity({
      variables: {
        updateEntityInput: {
          idEntity: prevValues?.idEntity,
          name: prevValues?.businessName!,
          commercialName: prevValues?.businessCode!,
        },
      },
    })
    if (updatedEntity.data?.updateEntity.result.idEntity) {
      const updatedOu = await updateOrganizationalUnit({
        variables: {
          data: {
            idOu: prevValues?.idOu,
            idEntity: prevValues?.idEntity,
            code: formData.businessCode!,
            shortName: formData.businessName!,
            name: formData.businessName!,
          },
        },
      })
      if (updatedOu.data?.updateOu.idOu) {
        const updatedUser = await updateUserMutation({
          variables: {
            data: {
              idUser: prevValues?.idUser!,
              idUserOauth: prevValues?.idUserOauth!,
              idOu: prevValues?.idOu,
              email: formData.email,
              name: formData.name,
              phone: formData.phone,
              userName: formData.email,
              idEntity: prevValues?.idEntity,
              idUserType: prevValues?.idUserType,
              idLanguage: '4a31e4fb7bc211edb6071615a0c060f5',
            },
          },
        })
        if (updatedUser.data?.updateUser.idUser) {
          router.push(paths.users.root)
        }
      }
    }
    setLoading(false)
  }

  const onSubmit = async (formData: FormDataUsers) => {
    try {
      setLoading(true)

      if (isEditing) {
        await updateFullUser(formData)
        return
      }
      await createFullUser(formData)
    } catch (error) {
      toast.error(`Error creating user ${error}`, {
        position: 'top-right',
      })
      setLoading(false)
    }
  }

  const addUserRole = async (formData: FormDataUsers) => {
    try {
      const createdUserRole = await createUserRole({
        variables: {
          data: {
            idUser: prevValues?.idUser,
            idOu: prevValues?.idOu,
            idRole: formData.idRole,
            idStatus: 'ACTIVE',
            idUserCreate: prevValues?.idUser,
            idUserUpdate: prevValues?.idUser,
          },
        },
      })
      if (createdUserRole.data?.createUserRole.idRole) {
        reset({ idRole: '' })
      }
    } catch (error) {
      toast.error(`Error creating user role ${error}`, {
        position: 'top-right',
      })
    }
  }

  const addUserModule = async (formData: FormDataUsers) => {
    try {
      await createUserModule({
        variables: {
          data: {
            idUser: prevValues?.idUser,
            idOu: prevValues?.idOu,
            idModule: formData.idModule,
            idStatus: 'ACTIVE',
            idUserCreate: prevValues?.idUser,
            idUserUpdate: prevValues?.idUser,
          },
        },
      })
    } catch (error) {
      toast.error(`Error creating user module ${error}`, {
        position: 'top-right',
      })
    }
  }

  const invalidForm = () => toast.error(`Invalid form ${errors}`, { position: 'top-right' })

  const breadcrumbItems = useUserBuildBreadcrumbItems(isEditing)

  return (
    <ViewLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeaderContainer>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h5" fontWeight={700}>
              {isEditing ? 'Edit User' : 'Create User'}
            </Typography>

            <BreadCrumb items={breadcrumbItems} />
          </Box>

          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              startIcon={<Save />}
              disabled={loading}
            >
              {isEditing ? 'Edit User' : 'Add User'}
            </Button>
            {loading && (
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
        </StyledFormHeaderContainer>
        <StyledFormContentContainer>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="User Data" />
              {isEditing && <Tab label="Roles" />}
              {isEditing && <Tab label="Modules" />}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <StyledFormContentContainer>
              <CardContainer header="components.user.basic.info">
                <Grid container spacing={2} columns={{ xs: 6, sm: 6, md: 12 }}>
                  <Grid item xs={6}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          variant="outlined"
                          error={!!errors.email}
                          size="small"
                          sx={{ marginBottom: '8px' }}
                          helperText={
                            errors.email?.message && intl.formatMessage(errors.email.message)
                          }
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Full Name"
                          variant="outlined"
                          error={!!errors.name}
                          size="small"
                          sx={{ marginBottom: '8px' }}
                          helperText={
                            errors.name?.message && intl.formatMessage(errors.name.message)
                          }
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <div className={styles['phone-input']}>
                          <ReactPhoneInput2
                            {...field}
                            enableSearch
                            onChange={(phoneValue: string) => {
                              field.onChange(phoneValue)
                              if (phoneValue) {
                                setIsValid(isValidPhoneNumber(`+${phoneValue}`))
                              } else {
                                setIsValid(true)
                              }
                            }}
                            country="us"
                            isValid={isValid && !errors.phone?.message}
                          />
                          {errors.phone?.message || !isValid ? (
                            <small
                              style={{
                                marginTop: '8px',
                                color: '#f44336',
                                textAlign: 'left',
                                width: '100%',
                              }}
                            >
                              {errors.phone?.message
                                ? errors.phone?.message
                                : field.value && !isValid
                                ? 'Invalid phone number'
                                : ''}
                            </small>
                          ) : null}
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          fullWidth
                          defaultValue={field?.value}
                          onChange={(_e, newValue) =>
                            field.onChange(newValue as unknown as Record<string, unknown>)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Country"
                              variant="outlined"
                              error={!!errors.country}
                              size="small"
                              helperText={errors.country?.message}
                              fullWidth
                            />
                          )}
                          options={countryOptions}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </CardContainer>
              <CardContainer header="components.card.header.title">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Typography>
                    {intl.formatMessage(
                      'components.register.form.new.register.new.business.header'
                    )}
                  </Typography>
                  {!isEditing && (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>No</Typography>
                      <Switch
                        aria-label="new business"
                        checked={isNewBusiness}
                        onChange={() => setIsNewBusiness(!isNewBusiness)}
                      />
                      <Typography>Yes</Typography>
                    </Stack>
                  )}
                </Box>
                <Box width="100%">
                  {isNewBusiness ? (
                    <Box display="flex" flexDirection="row" gap="16px">
                      <Controller
                        name="businessName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={intl.formatMessage(
                              'components.register.form.business.name-input-label'
                            )}
                            variant="outlined"
                            error={!!errors?.businessName}
                            size="small"
                            helperText={
                              errors.businessName?.message &&
                              intl.formatMessage(errors.businessName?.message)
                            }
                            fullWidth
                          />
                        )}
                      />
                      <Controller
                        name="businessCode"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={intl.formatMessage(
                              'components.register.form.business.code-input-label'
                            )}
                            variant="outlined"
                            error={!!errors?.businessName}
                            size="small"
                            helperText={
                              errors.businessName?.message &&
                              intl.formatMessage(errors.businessName?.message)
                            }
                            fullWidth
                          />
                        )}
                      />
                    </Box>
                  ) : (
                    <Controller
                      name="businessCode"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={intl.formatMessage(
                            'components.register.form.business.code-input-label'
                          )}
                          variant="outlined"
                          error={!!errors?.businessName}
                          size="small"
                          sx={{ marginBottom: '8px', maxWidth: '457px' }}
                          helperText={
                            errors.businessName?.message &&
                            intl.formatMessage(errors.businessName?.message)
                          }
                          fullWidth
                        />
                      )}
                    />
                  )}
                </Box>
              </CardContainer>
            </StyledFormContentContainer>
          </TabPanel>

          {isEditing && (
            <TabPanel value={value} index={1}>
              <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}
                marginBottom="24px"
              >
                <Controller
                  name="idRole"
                  control={control}
                  render={({ field }) => (
                    <FormControl sx={{ width: '100%', maxWidth: '400px' }} size="small">
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
                <Box sx={{ m: 1, position: 'relative' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Add />}
                    onClick={handleSubmit(addUserRole, invalidForm)}
                    disabled={createUserRoleLoading}
                  >
                    Add
                  </Button>
                  {createUserRoleLoading && (
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

              <DataTable
                columns={userRolesColumns}
                rows={userRolesRows}
                getRowId={(row) => `${row.idUser}-${row.idRole}`}
              />
            </TabPanel>
          )}

          {isEditing && (
            <TabPanel value={value} index={2}>
              <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}
                marginBottom="24px"
              >
                <Controller
                  name="idModule"
                  control={control}
                  render={({ field }) => (
                    <FormControl sx={{ width: '100%', maxWidth: '400px' }} size="small">
                      <InputLabel id="role-select-label" sx={{ zIndex: 99, background: '#fff' }}>
                        Module
                      </InputLabel>

                      <Select {...field} labelId="role-select-label" error={!!errors.idModule}>
                        {modulesData?.getGeneralParametersByCode.generalParameterValue.map(
                          (role) => (
                            <MenuItem
                              key={role.idGeneralParameterValue}
                              value={role.idGeneralParameterValue}
                            >
                              {role.name}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  )}
                />

                <Box sx={{ m: 1, position: 'relative' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Add />}
                    onClick={handleSubmit(addUserModule, invalidForm)}
                    disabled={createUserModuleLoading}
                  >
                    Add
                  </Button>
                  {createUserModuleLoading && (
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

              <DataTable
                columns={userModulesColumns}
                rows={userModulesRows}
                getRowId={(row) => `${row.idUser}-${row.idModule}`}
              />
            </TabPanel>
          )}
        </StyledFormContentContainer>
      </form>
    </ViewLayout>
  )
}

export default UsersForm

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
