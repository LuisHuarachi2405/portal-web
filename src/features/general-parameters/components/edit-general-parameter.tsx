import { FC, useMemo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import {
  useGetGeneralParameterByIdQuery,
  useGetGeneralParameterValueByIdQuery,
} from '@/shared/graphql/generated/general-parameters-api'

import { GeneralParameterValueParent } from '../types/form.types'

const DynamicGeneralParametersForm = dynamic(
  () =>
    import('@/features/general-parameters/components/general-parameters-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditGeneralParameterContent: FC = () => {
  const {
    query: { paramId },
  } = useRouter()

  const { data, loading, error } = useGetGeneralParameterByIdQuery({
    variables: { id: paramId },
    fetchPolicy: 'cache-and-network',
    skip: !paramId,
  })

  const generalParameterValueParentId = data?.getGeneralParameterById?.idGeneralParameterValue

  const { data: generalParameterValueData, loading: generalParameterValueLoading } =
    useGetGeneralParameterValueByIdQuery({
      variables: { idGeneralParameterValue: generalParameterValueParentId },
      skip: !generalParameterValueParentId,
    })

  const parentParameter = useMemo(
    () => ({
      label: `${generalParameterValueData?.getGeneralParameterValueById.name} - ${generalParameterValueData?.getGeneralParameterValueById.code}`,
      value: generalParameterValueData?.getGeneralParameterValueById.idGeneralParameterValue,
    }),
    [
      generalParameterValueData?.getGeneralParameterValueById.idGeneralParameterValue,
      generalParameterValueData?.getGeneralParameterValueById.name,
      generalParameterValueData?.getGeneralParameterValueById.code,
    ]
  ) as GeneralParameterValueParent

  if (error) return <p>Error</p>

  if (!data || loading || generalParameterValueLoading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicGeneralParametersForm
        isEditing
        prevValues={{
          idGeneralParameter: data.getGeneralParameterById.idGeneralParameter,
          idOu: data.getGeneralParameterById.idOu,
          name: data.getGeneralParameterById.name,
          shortName: data.getGeneralParameterById.shortName,
          code: data.getGeneralParameterById.code,
          parentParameter,
          generalParametersValues: data?.getGeneralParameterById.generalParameterValue?.length
            ? data?.getGeneralParameterById.generalParameterValue?.map((generalParameterValue) => ({
                idGeneralParameterValue: generalParameterValue.idGeneralParameterValue,
                name: generalParameterValue.name,
                shortName: generalParameterValue.shortName,
                code: generalParameterValue.code,
                value: generalParameterValue.value,
              }))
            : [
                {
                  idGeneralParameterValue: undefined,
                  name: '',
                  shortName: '',
                  code: '',
                  value: '',
                },
              ],
        }}
      />
    </Suspense>
  )
}
