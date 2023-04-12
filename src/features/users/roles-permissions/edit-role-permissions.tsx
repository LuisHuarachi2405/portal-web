import { useRouter } from 'next/router'
import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'

import { useGetRolePermissionByIdQuery } from '@/shared/graphql/generated/users-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { Spinner } from '@/shared/components/spinner'

const DynamicRolePermissionsForm = dynamic(
  () =>
    import('@/features/users/roles-permissions/role-permission-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditRolePermissionsContent: FC = () => {
  const {
    query: { idRole, idPermission },
  } = useRouter()

  const { data, loading, error, refetch } = useGetRolePermissionByIdQuery({
    variables: {
      idRole,
      idPermission,
    },
    fetchPolicy: 'cache-and-network',
    skip: !idRole || !idPermission,
  })

  if (error) return <ErrorBoundary retry={refetch} />

  if (!data || loading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicRolePermissionsForm
        isEditing
        prevValues={{
          idRole: idRole as string,
          idStatus: data.getRolePermissionById.idStatus as string,
          idPermissions: [{ idPermission: data.getRolePermissionById.idPermission }],
          idOu: data.getRolePermissionById.idOu,
        }}
      />
    </Suspense>
  )
}
