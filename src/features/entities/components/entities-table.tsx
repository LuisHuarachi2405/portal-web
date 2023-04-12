import { FC, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import styled from '@emotion/styled'
import Link from 'next/link'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { paths } from '@/shared/routes/paths'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useIntl } from '@/shared/hooks/use-intl'
import { useGetEntitiesQuery } from '@/shared/graphql/generated/entities-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'

import { useBuildColumns } from '../hooks/use-build-columns'

export const EntitiesTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildColumns()

  const [dataGridEntitiesPageSize, setDataGridEntitiesPageSize] = useState<number>(10)

  const handleOnPageChange = (page: number) => setDataGridEntitiesPageSize(page)

  const { data, loading, error, refetch } = useGetEntitiesQuery({
    variables: {
      filter: {
        page: 1,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.getEntities.results ?? []

  return (
    <ViewLayout>
      <HeaderContainer>
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography variant="h5" fontWeight={700}>
            {intl.formatMessage('pages.entity.title')}
          </Typography>

          <BreadCrumb
            items={[
              { name: 'pages.entities.create.entity.breadcrumb.home.pathname', href: paths.home },
              {
                name: 'pages.entities.create.entity.breadcrumb.entities.pathname',
                href: paths.entities.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.entities.new} passHref>
          <Button color="primary" variant="contained" size="small" startIcon={<Add />}>
            {intl.formatMessage('pages.entity.label.create')}
          </Button>
        </Link>
      </HeaderContainer>

      <DataTable
        pageSize={dataGridEntitiesPageSize}
        onPageChange={handleOnPageChange}
        loading={loading}
        columns={columns}
        rows={rows}
        getRowId={(row) => row.idEntity}
      />
    </ViewLayout>
  )
}

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`
