import { useRouter } from 'next/router'
import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'

import { useGetModulePermissionByIdQuery } from '@/shared/graphql/generated/users-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { Spinner } from '@/shared/components/spinner'

const DynamicModulePermissionsForm = dynamic(
  () =>
    import('@/features/users/module-permissions/module-permission-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditModulePermissionsContent: FC = () => {
  const {
    query: { idModule, idPermission },
  } = useRouter()

  const { data, loading, error, refetch } = useGetModulePermissionByIdQuery({
    variables: {
      idModule,
      idPermission,
    },
    fetchPolicy: 'cache-and-network',
    skip: !idModule || !idPermission,
  })

  if (error) return <ErrorBoundary retry={refetch} />

  if (!data || loading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicModulePermissionsForm
        isEditing
        prevValues={{
          idModule: idModule as string,
          idStatus: data.getModulePermissionById.idStatus as string,
          idPermissions: [{ idPermission: data.getModulePermissionById.idPermission }],
          idOu: data.getModulePermissionById.idOu,
        }}
      />
    </Suspense>
  )
}
