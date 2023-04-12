import styled from '@emotion/styled'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  useCreateSessionMutation,
  useGetUserByEmailAddressLazyQuery,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useKeepUserOnMemory } from '../../utils/useKeepUserOnMemory'
import { useLoginForm } from '../hooks/use-login-form'
import { FormDataLogin } from '../types/form.types'

export const LoginForm: FC = () => {
  const intl = useIntl()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const { push } = useRouter()

  const setUserToMemory = useKeepUserOnMemory((state) => state.setUser)

  const [createSession] = useCreateSessionMutation()

  const [getUserByEmailAddress] = useGetUserByEmailAddressLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  const { login, setUser } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const onSubmit = async (data: FormDataLogin) => {
    try {
      setLoading(true)
      const newUser = await login?.(data.email, data.password)

      const { data: userData } = await getUserByEmailAddress({ variables: { email: data.email } })

      const userInformation = {
        ...newUser,
        ...userData?.getUserByEmailAddress,
      }

      if (newUser?.accessToken && userData?.getUserByEmailAddress.idUser) {
        setUserToMemory(userInformation)
        setUser(userInformation)
        const sys = await (await fetch('/api/info')).json()

        const session = await createSession({
          variables: {
            data: {
              idUser: userData?.getUserByEmailAddress.idUser,
              idOu: userData?.getUserByEmailAddress.idOu,
              idUserCreate: userData?.getUserByEmailAddress.idUser,
              idUserUpdate: userData?.getUserByEmailAddress.idUser,
              app: 'web',
              date: new Date().toISOString(),
              client: 'web',
              idSessionOauth: userData.getUserByEmailAddress.idUserOauth,
              idStatus: 'ACTIVE',
              ipv4: sys.ip,
              ipv6: sys.ip,
              macaddress: userData?.getUserByEmailAddress.idUser,
            },
          },
        })

        if (session) {
          setLoading(false)
          push(paths.home)
        }
      }
    } catch (error: any) {
      toast.error(error?.message)
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        backgroundImage: 'url("/form-background.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '8px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
          <Container
            maxWidth="sm"
            sx={{
              p: '1.5rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(15px)',
              border: '1px solid #eee',
              backgroundColor: 'white',
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={4}>
              <Typography variant="h3" fontWeight="bold">
                {intl.formatMessage('components.login.form.title')}
              </Typography>

              <Controller
                name="email"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage('components.login.form.email-input-label')}
                    variant="outlined"
                    error={!!errors?.email}
                    size="medium"
                    sx={{ marginBottom: '8px' }}
                    helperText={errors.email?.message && intl.formatMessage(errors.email?.message)}
                    fullWidth
                  />
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
                    label={intl.formatMessage('components.login.form.password-input-label')}
                    variant="outlined"
                    error={!!errors?.password}
                    size="medium"
                    helperText={
                      errors.password?.message && intl.formatMessage(errors.password?.message)
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
              <StyledBox>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                <MuiLink component={Link} href={paths.auth.forgotPassword}>
                  {intl.formatMessage('components.login.form.forgot-password-link')}
                </MuiLink>
              </StyledBox>

              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: '100%' }}
                  disabled={loading}
                >
                  {intl.formatMessage('components.login.form.submit-button')}
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
            </Stack>

            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: '2rem' }}
              spacing={1}
            >
              <Typography>
                {intl.formatMessage('components.login.form.register.new.account')}
              </Typography>

              <MuiLink component={Link} href={paths.auth.register}>
                {intl.formatMessage('components.login.form.register-link')}
              </MuiLink>
            </Stack>
          </Container>
        </Stack>
      </form>
    </Box>
  )
}

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
`
