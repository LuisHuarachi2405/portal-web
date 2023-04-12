import { useFieldArray, useForm } from 'react-hook-form'

import { FormDataModulePermissions } from '../types/form.types'
import { modulePermissionFormResolver } from '../utils/module-permission-form-resolver'

export const defaultValues: FormDataModulePermissions = {
  idPermissions: [{ idPermission: '' }],
  idModule: '',
  idOu: '',
  idStatus: '',
}

export type UsePermissionsFormExtraProps = {
  prevValues?: Partial<FormDataModulePermissions>
}

export const useModulePermissionForm = ({ prevValues }: UsePermissionsFormExtraProps) => {
  const modulePermissionForm = useForm<FormDataModulePermissions>({
    defaultValues: prevValues || defaultValues,
    resolver: modulePermissionFormResolver,
    mode: 'onSubmit',
  })

  const permissionsForm = useFieldArray({
    control: modulePermissionForm.control,
    name: 'idPermissions',
  })

  const addRolePermission = () => {
    permissionsForm.append({ ...defaultValues.idPermissions[0] })
  }

  const removeRolePermission = (index: number) => {
    permissionsForm.remove(index)
  }

  return {
    modulePermissionForm,
    permissionsForm,
    addRolePermission,
    removeRolePermission,
  }
}
