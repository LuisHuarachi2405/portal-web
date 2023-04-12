import { useForm } from 'react-hook-form'

import { FormDataLogin } from '../types/form.types'
import { loginFormResolver } from '../utils/login-form-resolver'

export const useLoginForm = () =>
  useForm<FormDataLogin>({
    resolver: loginFormResolver,
  })
