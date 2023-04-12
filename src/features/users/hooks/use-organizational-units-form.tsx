import { useForm } from 'react-hook-form'

import { FormDataOrganizationalUnits } from '../types/form.types'
import { organizationalUnitsResolver } from '../utils/organizational-units-form-resolver'

export const defaultValues: FormDataOrganizationalUnits = {
  idOu: undefined,
  name: '',
  shortName: '',
  code: '',
  entity: { label: '', value: '' },
}

export type UseOrganizationalUnitsFormExtraProps = {
  prevValues?: Partial<FormDataOrganizationalUnits>
}

export const useOrganizationalUnitsForm = ({
  prevValues,
}: UseOrganizationalUnitsFormExtraProps) => {
  const organizationalUnitsForm = useForm<FormDataOrganizationalUnits>({
    defaultValues: prevValues || defaultValues,
    resolver: organizationalUnitsResolver,
    mode: 'onSubmit',
  })

  return {
    organizationalUnitsForm,
  }
}
