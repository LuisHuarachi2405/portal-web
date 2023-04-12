import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import type { FC } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { useGetAllOusQuery } from '@/shared/graphql/generated/users-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'

import { useBuildOuColumns } from '../hooks/use-build-ou-columns'

export const OrganizationalUnitsTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildOuColumns()

  const { data, loading, error, refetch } = useGetAllOusQuery({
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.getAllOus ?? []

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
            {intl.formatMessage('pages.organizational.units.title')}
          </Typography>

          <BreadCrumb
            items={[
              {
                name: 'components.sidebar.item.home',
                href: paths.home,
              },
              {
                name: 'pages.organizational.units.title',
                href: paths.users.organizationalUnits.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.users.organizationalUnits.new} passHref>
          <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
            {intl.formatMessage('pages.organizational.units.add.button')}
          </Button>
        </Link>
      </Box>

      <DataTable rows={rows} columns={columns} loading={loading} getRowId={(row) => row.idOu} />
    </ViewLayout>
  )
}
