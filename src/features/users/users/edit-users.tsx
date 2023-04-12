import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { FC, Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'
import {
  useGetGeneralParametersByCodeQuery,
  useGetGeneralParameterValueByIdQuery,
} from '@/shared/graphql/generated/general-parameters-api'
import { useGetOuByIdQuery, useGetUserByIdQuery } from '@/shared/graphql/generated/users-api'
import { useGetEntityQuery } from '@/shared/graphql/generated/entities-api'

const ROLES_CODE = 'UXROLES'
const MODULES_CODE = 'UXMODULES'

const DynamicUsersForm = dynamic(
  () =>
    import('@/features/users/users/users-form/users-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditUsersContent: FC = () => {
  const {
    query: { idUser: userId },
  } = useRouter()

  const { data: userData, loading: userDataIsLoading } = useGetUserByIdQuery({
    variables: { userId },
    fetchPolicy: 'cache-and-network',
    skip: !userId,
  })

  const { data: rolesData, loading: rolesDataIsLoading } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: ROLES_CODE,
    },
    fetchPolicy: 'cache-and-network',
    skip: !userId,
  })

  const { data: modulesData, loading: modulesDataIsLoading } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: MODULES_CODE,
    },
    fetchPolicy: 'cache-and-network',
    skip: !userId,
  })

  const { data: entityData, loading: entityDataIsLoading } = useGetEntityQuery({
    variables: {
      idEntity: userData?.getUserById?.idEntity,
    },
    fetchPolicy: 'cache-and-network',
    skip: !userData?.getUserById?.idEntity,
  })

  const { data: countryData, loading: countryDataIsLoading } = useGetGeneralParameterValueByIdQuery(
    {
      variables: {
        idGeneralParameterValue: entityData?.getEntity?.entity.idCountry,
      },
      fetchPolicy: 'cache-and-network',
      skip: !entityData?.getEntity?.entity.idCountry,
    }
  )

  const { data: ouData, loading: ouDataIsLoading } = useGetOuByIdQuery({
    variables: {
      id: userData?.getUserById.idOu,
    },
    fetchPolicy: 'cache-and-network',
    skip: !userData?.getUserById.idOu,
  })

  if (
    !userData ||
    !entityData ||
    !rolesData ||
    !modulesData ||
    !countryData ||
    !ouData ||
    rolesDataIsLoading ||
    modulesDataIsLoading ||
    userDataIsLoading ||
    entityDataIsLoading ||
    countryDataIsLoading ||
    ouDataIsLoading
  )
    return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicUsersForm
        isEditing
        prevValues={{
          idUser: userData.getUserById.idUser,
          idOu: userData.getUserById.idOu,
          idUserOauth: userData.getUserById.idUserOauth,
          name: userData.getUserById.name,
          email: userData.getUserById.email,
          phone: userData.getUserById.phone,
          idUserType: userData.getUserById.idUserType,
          idEntity: userData.getUserById.idEntity,
          businessName: ouData?.getOuById.name,
          businessCode: ouData?.getOuById.code,
          country: {
            value: countryData?.getGeneralParameterValueById.idGeneralParameterValue,
            label: countryData?.getGeneralParameterValueById.name!,
          },
        }}
        rolesData={rolesData}
        modulesData={modulesData}
      />
    </Suspense>
  )
}
