import { useForm } from 'react-hook-form'

import { FormDataUsers } from '../types/form.types'
import { usersResolver } from '../utils/users-form-resolver'

export const defaultValues: FormDataUsers = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  idUser: undefined,
  idEntity: undefined,
  idUserType: undefined,
  idOu: undefined,
  idUserOauth: undefined,
}

export type UseUsersFormExtraProps = {
  prevValues?: Partial<FormDataUsers>
}

export const useUsersForm = ({ prevValues }: UseUsersFormExtraProps) => {
  const usersForm = useForm<FormDataUsers>({
    defaultValues: prevValues || defaultValues,
    resolver: usersResolver,
    mode: 'onSubmit',
  })

  return {
    usersForm,
  }
}
