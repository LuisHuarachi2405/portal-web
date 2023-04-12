import { useFieldArray, useForm } from 'react-hook-form'

import { FormDataRolePermissions } from '../types/form.types'
import { rolePermissionFormResolver } from '../utils/role-permission-form-resolver'

export const defaultValues: FormDataRolePermissions = {
  idPermissions: [{ idPermission: '' }],
  idRole: '',
  idOu: '',
  idStatus: '',
}

export type UsePermissionsFormExtraProps = {
  prevValues?: Partial<FormDataRolePermissions>
}

export const useRolePermissionForm = ({ prevValues }: UsePermissionsFormExtraProps) => {
  const rolePermissionForm = useForm<FormDataRolePermissions>({
    defaultValues: prevValues || defaultValues,
    resolver: rolePermissionFormResolver,
    mode: 'onSubmit',
  })

  const permissionsForm = useFieldArray({
    control: rolePermissionForm.control,
    name: 'idPermissions',
  })

  const addRolePermission = () => {
    permissionsForm.append({ ...defaultValues.idPermissions[0] })
  }

  const removeRolePermission = (index: number) => {
    permissionsForm.remove(index)
  }

  return {
    rolePermissionForm,
    permissionsForm,
    addRolePermission,
    removeRolePermission,
  }
}
