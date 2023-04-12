import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import type { FC } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { useGetGeneralParametersQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

import { useBuildColumns } from '../hooks/use-build-columns'

export const GeneralParametersTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildColumns()

  const { data, loading, error } = useGetGeneralParametersQuery({
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <p>Error</p>

  const rows = data?.generalParameters ?? []

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
            {intl.formatMessage('pages.general.parameters.title')}
          </Typography>

          <BreadCrumb
            items={[
              {
                name: 'pages.general.parameters.create.parameter.breadcrumb.home.pathname',
                href: paths.home,
              },
              {
                name: 'pages.general.parameters.create.parameter.breadcrumb.general.parameters.pathname',
                href: paths.generalParameters.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.generalParameters.create} passHref>
          <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
            {intl.formatMessage('pages.general.parameters.add.button')}
          </Button>
        </Link>
      </Box>

      <DataTable
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.idGeneralParameter}
      />
    </ViewLayout>
  )
}
