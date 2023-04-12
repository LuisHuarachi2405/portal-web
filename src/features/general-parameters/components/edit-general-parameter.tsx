import { FC, useMemo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import {
  useGetGeneralParameterByIdQuery,
  useGetGeneralParameterValueByIdQuery,
} from '@/shared/graphql/generated/general-parameters-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'

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

  const {
    data: generalParameterData,
    loading: generalParameterLoading,
    error: generalParameterError,
    refetch: generalParameterRefetch,
  } = useGetGeneralParameterByIdQuery({
    variables: { id: paramId },
    fetchPolicy: 'cache-and-network',
    skip: !paramId,
  })

  const generalParameterValueParentId =
    generalParameterData?.getGeneralParameterById?.idGeneralParameterValue

  const {
    data: generalParameterValueData,
    loading: generalParameterValueLoading,
    error: generalParameterValueError,
    refetch: generalParameterValueRefetch,
  } = useGetGeneralParameterValueByIdQuery({
    variables: { idGeneralParameterValue: generalParameterValueParentId },
    skip: !generalParameterValueParentId,
  })

  const parentParameter = useMemo(
    () =>
      generalParameterValueData?.getGeneralParameterValueById.idGeneralParameterValue
        ? {
            label: `${generalParameterValueData?.getGeneralParameterValueById.name} - ${generalParameterValueData?.getGeneralParameterValueById.code}`,
            value: generalParameterValueData?.getGeneralParameterValueById.idGeneralParameterValue,
          }
        : null,
    [
      generalParameterValueData?.getGeneralParameterValueById.idGeneralParameterValue,
      generalParameterValueData?.getGeneralParameterValueById.name,
      generalParameterValueData?.getGeneralParameterValueById.code,
    ]
  ) as GeneralParameterValueParent

  if (generalParameterError || generalParameterValueError)
    return (
      <ErrorBoundary
        retry={() => {
          generalParameterRefetch()
          generalParameterValueRefetch()
        }}
      />
    )

  if (!generalParameterData || generalParameterLoading || generalParameterValueLoading)
    return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicGeneralParametersForm
        isEditing
        prevValues={{
          idGeneralParameter: generalParameterData.getGeneralParameterById.idGeneralParameter,
          idOu: generalParameterData.getGeneralParameterById.idOu,
          name: generalParameterData.getGeneralParameterById.name,
          shortName: generalParameterData.getGeneralParameterById.shortName,
          code: generalParameterData.getGeneralParameterById.code,
          parentParameter,
          generalParametersValues: generalParameterData?.getGeneralParameterById
            .generalParameterValue?.length
            ? generalParameterData?.getGeneralParameterById.generalParameterValue?.map(
                (generalParameterValue) => ({
                  idGeneralParameterValue: generalParameterValue.idGeneralParameterValue,
                  name: generalParameterValue.name,
                  shortName: generalParameterValue.shortName,
                  code: generalParameterValue.code,
                  value: generalParameterValue.value,
                })
              )
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
