import { Add } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import type { FC } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ErrorBoundary } from '@/shared/components/error-boundary'
import { ViewLayout } from '@/shared/components/view-layout'
import { useGetAllModulePermissionQuery } from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useBuildModulePermissionColumns } from '../hooks/use-build-module-permission-columns'

export const ModulePermissionsTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildModulePermissionColumns()

  const { data, loading, error, refetch } = useGetAllModulePermissionQuery({
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.getAllModulePermission ?? []

  return (
    <ViewLayout>
      <Box
        display="flex"
        flexDirection="row"
        gap="24px"
        justifyContent="space-between"
        alignItems="flex-start"
        marginBottom="32px"
      >
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.module.permission.title')}
          </Typography>

          <BreadCrumb
            items={[
              {
                name: 'components.sidebar.item.home',
                href: paths.home,
              },
              {
                name: 'pages.module.permission.title',
                href: paths.users.modulePermissions.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.users.modulePermissions.new} passHref>
          <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
            {intl.formatMessage('pages.module.permission.add.button')}
          </Button>
        </Link>
      </Box>

      <DataTable
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => `${row.idModule}-${row.idPermission}`}
      />
    </ViewLayout>
  )
}
