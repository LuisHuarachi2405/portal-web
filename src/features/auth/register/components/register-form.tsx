/* eslint-disable no-nested-ternary */

import { Visibility, VisibilityOff } from '@mui/icons-material'
import ReactPhoneInput2 from 'react-phone-input-2'
import { isValidPhoneNumber } from 'react-phone-number-input'
import {
  Autocomplete,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  MenuItem,
  Modal,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Spinner } from '@/shared/components/spinner'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  useCreateEntityMutation,
  useDeleteEntityMutation,
  useUpdateEntityMutation,
} from '@/shared/graphql/generated/entities-api'
import { useGetGeneralParametersByCodeQuery } from '@/shared/graphql/generated/general-parameters-api'
import {
  useCreateOuMutation,
  useCreateUserMutation,
  useCreateUserRoleMutation,
  useDeleteOuMutation,
  useGetOuByCodeLazyQuery,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useRegisterForm } from '../hooks/use-register-form'
import { FormDataRegister } from '../types/form.types'

const COUNTRY_CODE = 'ENTPAI'
const LANGUAGE_CODE = 'LANG'

export const RegisterForm: FC = () => {
  const intl = useIntl()
  const [activeStep, setActiveStep] = useState<number>(0)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [isNewBusiness, setIsNewBusiness] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const { push } = useRouter()

  const { register } = useAuth()

  const { data: countryData } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: COUNTRY_CODE,
    },
  })

  const { data: languageData } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: LANGUAGE_CODE,
    },
  })

  const countryOptions =
    countryData?.getGeneralParametersByCode.generalParameterValue.map((generalParameterValue) => ({
      label: generalParameterValue.name,
      value: generalParameterValue.idGeneralParameterValue,
    })) ?? []

  const [createUserMutation] = useCreateUserMutation({
    onCompleted: () => {
      toast.success(intl.formatMessage('pages.users.new.success.message'), {
        position: 'top-right',
        duration: 2000,
      })
    },
    onError: () => {
      toast.error(intl.formatMessage('pages.users.new.error.message'), {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const [createEntity] = useCreateEntityMutation()
  const [updateEntity] = useUpdateEntityMutation()
  const [deleteEntity] = useDeleteEntityMutation()

  const [createOrganizationalUnit] = useCreateOuMutation()
  const [deleteOrganizationalUnit] = useDeleteOuMutation()

  const [createUserRole] = useCreateUserRoleMutation()

  const [getOuByCode] = useGetOuByCodeLazyQuery()

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (!errors.email || !errors.password || !errors.name || !errors.lastName) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
        break
      case 1:
        if (!errors.country || !errors.businessName) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
      // eslint-disable-next-line no-fallthrough
      default:
        break
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const steps = [
    intl.formatMessage('components.register.form.first-step'),
    intl.formatMessage('components.register.form.second-step'),
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm()

  const rollBack = async (params: { idOu: string | undefined; idEntity: string | undefined }) => {
    if (!params.idOu || !params.idEntity)
      throw new Error('Organizational Unit or Entity are not defined')
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

  const registerWithOuCode = async (data: FormDataRegister) => {
    try {
      const { data: ouData } = await getOuByCode({
        variables: { code: data.businessCode?.trim()! },
      })

      if (ouData?.getOuByCode.idOu && ouData?.getOuByCode.idEntity) {
        const registered = await register?.(data.email.trim(), data.password.trim())

        if (registered?.UserSub) {
          const createdUser = await createUserMutation({
            variables: {
              data: {
                email: data.email.trim(),
                name: `${data.name.trim()} ${data.lastName.trim()}`,
                phone: data.phone.trim(),
                userName: data.email.trim(),
                idUserOauth: registered?.UserSub,
                idLanguage: data.idLanguage,
                idOu: ouData?.getOuByCode.idOu,
                idEntity: ouData?.getOuByCode.idEntity,
              },
            },
          })

          if (createdUser.data?.createUser.idUser) {
            setIsNewBusiness(false)
            push(paths.auth.signin)
          }
        } else {
          toast.error(`Error creating user ${registered?.message}`, {
            position: 'top-right',
          })
        }
      }
    } catch (error) {
      toast.error(`Error registering user ${error}`, {
        position: 'top-right',
      })
    }
  }

  const onSubmit = async (data: FormDataRegister) => {
    let rollbackIdOu: string | undefined
    let rollbackIdEntity: string | undefined
    if (activeStep !== steps.length - 1) {
      handleNext()
    } else {
      try {
        if (!isNewBusiness) {
          await registerWithOuCode(data)
          return
        }
        setLoading(true)
        const newEntity = await createEntity({
          variables: {
            entity: {
              commercialName: data.businessName?.trim() || '',
              name: data.businessName?.trim() || '',
              addresses: [],
              contacts: [],
              idsIdentificationTypes: [],
              idTypeEntity: '4aa06c224b5611edb6071615a0c060f5',
              idCountry: data.country?.value!,
              // TODO: THIS IS A CLIENT ROLE
              roles: [{ idRole: '457df1d64aa511edb6071615a0c060f5' }],
            },
          },
        })

        if (newEntity.data?.createEntity.entity.idEntity) {
          const { idEntity } = newEntity.data.createEntity.entity
          rollbackIdEntity = idEntity
          const newOrganizationalUnit = await createOrganizationalUnit({
            variables: {
              data: {
                name: data.businessName!.trim(),
                shortName: data.businessName!.trim(),
                code: data.businessCode!.trim(),
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

            if (updatedEntity?.data?.updateEntity.result.idEntity) {
              const registered = await register?.(data.email, data.password)

              if (registered?.UserSub) {
                const createdUser = await createUserMutation({
                  variables: {
                    data: {
                      email: data.email.trim(),
                      name: `${data.name.trim()} ${data.lastName.trim()}`,
                      phone: data.phone.trim(),
                      idUserOauth: registered?.UserSub,
                      userName: data.email.trim(),
                      idLanguage: data.idLanguage,
                      idOu,
                      idEntity,
                    },
                  },
                })

                if (createdUser.data?.createUser.idUser) {
                  const createdUserRole = await createUserRole({
                    variables: {
                      data: {
                        idUser: createdUser.data?.createUser.idUser,
                        idOu,
                        // TODO: THIS IS A USER STG ROLE
                        idRole: '3cc24d6f5f8011edb6071615a0c060f5',
                        idStatus: 'ACTIVE',
                        idUserCreate: createdUser.data?.createUser.idUser,
                        idUserUpdate: createdUser.data?.createUser.idUser,
                      },
                    },
                  })
                  if (createdUserRole.data?.createUserRole.idRole) {
                    push(paths.auth.signin)
                  }
                }
              }
            }
          }
        }
        setLoading(false)
      } catch (error) {
        toast.error(`Error creating user ${error}`, {
          position: 'top-right',
        })
        await rollBack({ idOu: rollbackIdOu, idEntity: rollbackIdEntity })
        setLoading(false)
      }
    }
  }

  return (
    <Box sx={{ backgroundImage: 'url("/form-background.svg")' }}>
      <Modal
        open={loading}
        onClose={() => setLoading(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Spinner />
        </Box>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
          <Container
            maxWidth="sm"
            sx={{
              p: '2rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(15px)',
              border: '1px solid #eee',
              backgroundColor: 'white',
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={4}>
              <Typography variant="h3" fontWeight="bold">
                {intl.formatMessage('components.register.form.title')}
              </Typography>

              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  const stepProps: { completed?: boolean } = {}
                  const labelProps: {
                    optional?: React.ReactNode
                  } = {}

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <Box padding="24px">
                  <h3>
                    Thanks for registering! We will send you an email with a link to verify your
                    account.
                  </h3>
                </Box>
              ) : (
                <Box width="100%">
                  {activeStep === 0 && (
                    <Stack justifyContent="center" alignItems="center" spacing={4}>
                      <Controller
                        name="name"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={intl.formatMessage('components.register.form.name-input-label')}
                            variant="outlined"
                            error={!!errors?.email}
                            size="medium"
                            sx={{ marginBottom: '8px' }}
                            helperText={
                              errors.name?.message && intl.formatMessage(errors.name?.message)
                            }
                            fullWidth
                          />
                        )}
                      />

                      <Controller
                        name="lastName"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={intl.formatMessage(
                              'components.register.form.lastName-input-label'
                            )}
                            variant="outlined"
                            error={!!errors?.email}
                            size="medium"
                            sx={{ marginBottom: '8px' }}
                            helperText={
                              errors.lastName?.message &&
                              intl.formatMessage(errors.lastName?.message)
                            }
                            fullWidth
                          />
                        )}
                      />

                      <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={intl.formatMessage('components.register.form.email-input-label')}
                            variant="outlined"
                            error={!!errors?.email}
                            size="medium"
                            sx={{ marginBottom: '8px' }}
                            helperText={
                              errors.email?.message && intl.formatMessage(errors.email?.message)
                            }
                            fullWidth
                          />
                        )}
                      />
                      <Controller
                        name="idLanguage"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label="Language"
                            variant="outlined"
                            sx={{ width: '100%' }}
                            error={!!errors?.idLanguage}
                          >
                            {languageData?.getGeneralParametersByCode.generalParameterValue.map(
                              (option) => (
                                <MenuItem
                                  key={option.idGeneralParameterValue}
                                  value={option.idGeneralParameterValue}
                                >
                                  {option.name}
                                </MenuItem>
                              )
                            )}
                          </TextField>
                        )}
                      />

                      <Controller
                        name="phone"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <>
                            <ReactPhoneInput2
                              enableSearch
                              onChange={(value: string) => {
                                field.onChange(value)
                                if (value) {
                                  setIsValid(isValidPhoneNumber(`+${value}`))
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
                          </>
                        )}
                      />

                      <Controller
                        name="password"
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            label={intl.formatMessage(
                              'components.register.form.password-input-label'
                            )}
                            variant="outlined"
                            error={!!errors?.email}
                            size="medium"
                            helperText={
                              errors.password?.message &&
                              intl.formatMessage(errors.password?.message)
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                  >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        )}
                      />
                    </Stack>
                  )}

                  {activeStep === 1 && (
                    <Stack justifyContent="center" alignItems="center" spacing={4}>
                      <Box display="flex" alignItems="center" gap="16px">
                        <Typography variant="h5" fontWeight="bold">
                          {intl.formatMessage(
                            'components.register.form.new.register.new.business.header'
                          )}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography fontWeight="bold">No</Typography>
                          <Switch
                            aria-label="new business"
                            checked={isNewBusiness}
                            onChange={() => setIsNewBusiness(!isNewBusiness)}
                          />
                          <Typography fontWeight="bold">Yes</Typography>
                        </Stack>
                      </Box>
                      <Box width="100%">
                        {isNewBusiness ? (
                          <Stack spacing={4}>
                            <Controller
                              name="businessName"
                              defaultValue=""
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  label={intl.formatMessage(
                                    'components.register.form.business.name-input-label'
                                  )}
                                  variant="outlined"
                                  error={!!errors?.businessName}
                                  size="medium"
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
                              defaultValue=""
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  label={intl.formatMessage(
                                    'components.register.form.business.code-input-label'
                                  )}
                                  variant="outlined"
                                  error={!!errors?.businessName}
                                  size="medium"
                                  helperText={
                                    errors.businessName?.message &&
                                    intl.formatMessage(errors.businessName?.message)
                                  }
                                  fullWidth
                                />
                              )}
                            />
                            <Controller
                              name="country"
                              defaultValue={{ label: '', value: '' }}
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
                                      helperText={errors.country?.message}
                                      fullWidth
                                    />
                                  )}
                                  options={countryOptions}
                                />
                              )}
                            />
                          </Stack>
                        ) : (
                          <Controller
                            name="businessCode"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                label={intl.formatMessage(
                                  'components.register.form.business.code-input-label'
                                )}
                                variant="outlined"
                                error={!!errors?.businessName}
                                size="medium"
                                sx={{ marginBottom: '8px' }}
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
                      <p>
                        <b>{intl.formatMessage('components.register.form.terms-and-conditions')}</b>
                      </p>
                    </Stack>
                  )}

                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      {intl.formatMessage('components.register.form.back.button')}
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    {activeStep === steps.length - 1 ? (
                      <Button type="submit">
                        {intl.formatMessage('components.register.form.finish.button')}
                      </Button>
                    ) : (
                      <Button type="submit">
                        {intl.formatMessage('components.register.form.next.button')}
                      </Button>
                    )}
                  </Box>
                </Box>
              )}
            </Stack>

            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: '2rem' }}
              spacing={1}
            >
              <Typography>
                {intl.formatMessage('components.register.form.register.already-registered')}
              </Typography>

              <MuiLink component={Link} href={paths.auth.signin}>
                {intl.formatMessage('components.register.form.signIn-link')}
              </MuiLink>
            </Stack>
          </Container>
        </Stack>
      </form>
    </Box>
  )
}
