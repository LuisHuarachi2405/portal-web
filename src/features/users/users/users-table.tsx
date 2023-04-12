import type { FC } from 'react'
import { Add } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

import { ErrorBoundary } from '@/shared/components/error-boundary'
import { useGetAllUsersQuery } from '@/shared/graphql/generated/users-api'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'

import { useBuildUsersColumns } from '../hooks/use-build-users-columns'

export const UsersTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildUsersColumns()

  const { data, loading, error, refetch } = useGetAllUsersQuery({
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.getAllUsers ?? []

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
            {intl.formatMessage('pages.users.title')}
          </Typography>

          <BreadCrumb
            items={[
              {
                name: 'components.sidebar.item.home',
                href: paths.home,
              },
              {
                name: 'pages.users.title',
                href: paths.users.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.users.new} passHref>
          <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
            {intl.formatMessage('pages.users.add.button')}
          </Button>
        </Link>
      </Box>

      <DataTable rows={rows} columns={columns} loading={loading} getRowId={(row) => row.idUser} />
    </ViewLayout>
  )
}
