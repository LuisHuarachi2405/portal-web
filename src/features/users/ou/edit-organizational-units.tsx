import { FC, Suspense, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { useGetOuByIdQuery } from '@/shared/graphql/generated/users-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useGetEntityQuery } from '@/shared/graphql/generated/entities-api'

import { OrganizationalUnitEntity } from '../types/form.types'

const DynamicOrganizationalUnitsForm = dynamic(
  () =>
    import('@/features/users/ou/organizational-units-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditOrganizationalUnitContent: FC = () => {
  const {
    query: { ouId },
  } = useRouter()

  const { data, loading, error, refetch } = useGetOuByIdQuery({
    variables: { id: ouId },
    fetchPolicy: 'cache-and-network',
    skip: !ouId,
  })

  const { data: entityData, loading: entityLoading } = useGetEntityQuery({
    variables: {
      idEntity: data?.getOuById.idEntity,
    },
    skip: !data?.getOuById.idEntity,
  })

  const entity = useMemo(
    () => ({ label: entityData?.getEntity.entity.name, value: data?.getOuById.idEntity }),
    [data?.getOuById.idEntity, entityData?.getEntity.entity.name]
  ) as OrganizationalUnitEntity

  if (error) return <ErrorBoundary retry={refetch} />

  if (!data || loading || entityLoading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicOrganizationalUnitsForm
        isEditing
        prevValues={{
          code: data.getOuById.code,
          entity,
          idOu: data.getOuById.idOu,
          name: data.getOuById.name,
          shortName: data.getOuById.shortName,
        }}
      />
    </Suspense>
  )
}
