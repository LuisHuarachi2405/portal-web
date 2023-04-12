import { useForm } from 'react-hook-form'

import { FormDataForgotPassword } from '../types/form.types'
import { forgotPasswordFormResolver } from '../utils/forgot-password-resolver'

export const useForgotPasswordForm = () =>
  useForm<FormDataForgotPassword>({
    resolver: forgotPasswordFormResolver,
  })
