import { useForm } from 'react-hook-form'

import { FormDataEntity } from '../types/form.types'
import { entityResolver } from '../utils/entity-resolver'

export const defaultValues: FormDataEntity = {
  idEntity: '',
  entityType: '',
  role: '',
  name: '',
  idEntityIdType: { idEntityIdType: '', value: '' },
  entityDirectionValues: [
    {
      idAddressType: '',
      idCountry: '',
      idState: '',
      idProvince: '',
      postalCode: '',
      line1: '',
      line2: '',
    },
  ],
  entityContactValues: [
    {
      idContactType: '',
      value: '',
    },
  ],
  market: '',
  channel: '',
  industry: '',
  businessType: '',
  commercialName: '',
}

export type UseEntityFormExtraProps = {
  prevValues?: Partial<FormDataEntity>
}

export const useEntityForm = ({ prevValues }: UseEntityFormExtraProps) =>
  useForm<FormDataEntity>({
    defaultValues: prevValues || defaultValues,
    resolver: entityResolver,
    mode: 'onSubmit',
  })
