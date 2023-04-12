import { useForm } from 'react-hook-form'

import { FormDataResetPassword } from '../types/form.types'
import { resetPasswordFormResolver } from '../utils/reset-password-resolver'

export const useResetPasswordForm = () =>
  useForm<FormDataResetPassword>({
    resolver: resetPasswordFormResolver,
  })
