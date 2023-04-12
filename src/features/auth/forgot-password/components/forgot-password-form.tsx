import type { FC } from 'react'
import {
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Container,
  Link as MuiLink,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import Link from 'next/link'

import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useForgotPasswordForm } from '../hooks/use-forgot-password-form'

export const ForgotPasswordForm: FC = () => {
  const intl = useIntl()

  const {
    control,
    formState: { errors },
  } = useForgotPasswordForm()

  return (
    <Box sx={{ backgroundImage: 'url("/form-background.svg")' }}>
      <form>
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
                {intl.formatMessage('components.forgot-password.form.title')}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {intl.formatMessage('components.forgot-password.form.header')}
              </Typography>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage('components.forgot-password.form.email-input-label')}
                    variant="outlined"
                    error={!!errors?.email}
                    size="medium"
                    sx={{ marginBottom: '8px' }}
                    helperText={errors.email?.message && intl.formatMessage(errors.email?.message)}
                    fullWidth
                  />
                )}
              />

              <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                {intl.formatMessage('components.forgot-password.form.submit-button')}
              </Button>
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
