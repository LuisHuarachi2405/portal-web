import type { FC } from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { Box, Stack, Container } from '@mui/system'
import { Controller } from 'react-hook-form'
import Link from 'next/link'

import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useResetPasswordForm } from '../hooks/use-reset-password-form'

export const ResetPasswordForm: FC = () => {
  const intl = useIntl()

  const {
    control,
    formState: { errors },
  } = useResetPasswordForm()

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
                {intl.formatMessage('components.reset-password.form.title"')}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {intl.formatMessage('components.reset-password.form.header')}
              </Typography>

              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'components.reset-password.form.password-input-label'
                    )}
                    variant="outlined"
                    error={!!errors?.newPassword}
                    size="medium"
                    sx={{ marginBottom: '8px' }}
                    helperText={
                      errors.newPassword?.message && intl.formatMessage(errors.newPassword?.message)
                    }
                    fullWidth
                  />
                )}
              />

              <Controller
                name="newPasswordConfirm"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={intl.formatMessage(
                      'components.reset-password.form.confirm-password-input-label'
                    )}
                    variant="outlined"
                    error={!!errors?.newPasswordConfirm}
                    size="medium"
                    sx={{ marginBottom: '8px' }}
                    helperText={
                      errors.newPasswordConfirm?.message &&
                      intl.formatMessage(errors.newPasswordConfirm?.message)
                    }
                    fullWidth
                  />
                )}
              />

              <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                {intl.formatMessage('components.reset-password.form.submit-button')}
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

              <Link href={paths.auth.register}>
                {intl.formatMessage('components.login.form.register-link')}
              </Link>
            </Stack>
          </Container>
        </Stack>
      </form>
    </Box>
  )
}
