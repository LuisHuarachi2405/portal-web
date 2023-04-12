import { useForm } from 'react-hook-form'

import { FormDataRegister } from '../types/form.types'
import { registerFormResolver } from '../utils/register-form-resolver'

export const useRegisterForm = () =>
  useForm<FormDataRegister>({
    resolver: registerFormResolver,
    mode: 'onSubmit',
  })
