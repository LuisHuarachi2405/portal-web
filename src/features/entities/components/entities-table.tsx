import { FC, useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import styled from '@emotion/styled'
import Link from 'next/link'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { paths } from '@/shared/routes/paths'
import { ViewLayout } from '@/shared/components/view-layout'
import { DataTable } from '@/shared/components/data-table/data-table'
import { useIntl } from '@/shared/hooks/use-intl'
import { useGetEntitiesQuery } from '@/shared/graphql/generated/entities-api'

import { useBuildColumns } from '../hooks/use-build-columns'

const itemsBreadCrumb: BreadcrumbItems[] = [
  { name: 'pages.entities.create.entity.breadcrumb.home.pathname', href: paths.home },
  { name: 'pages.entities.create.entity.breadcrumb.entities.pathname', href: paths.entities.root },
]

interface BreadcrumbItems {
  name: string
  href: string
}

export const EntitiesTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildColumns()

  const [dataGridEntitiesPageSize, setDataGridEntitiesPageSize] = useState<number>(10)

  const handleOnPageChange = (page: number) => setDataGridEntitiesPageSize(page)

  const { data, loading, error } = useGetEntitiesQuery({
    variables: {
      filter: {
        page: 1,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <p>Error</p>

  const rows = data?.getEntities.results ?? []

  return (
    <ViewLayout>
      <Container maxWidth="xl">
        <HeaderContainer>
          <Box>
            <Typography variant="h5" gutterBottom>
              {intl.formatMessage('pages.entity.title')}
            </Typography>
            <BreadCrumb items={itemsBreadCrumb} />
          </Box>
          <Link href={paths.entities.create} passHref>
            <Button color="primary" variant="contained" startIcon={<Add />}>
              {intl.formatMessage('pages.entity.label.create')}
            </Button>
          </Link>
        </HeaderContainer>
      </Container>

      <Container maxWidth="xl">
        <Box mt="32px">
          <DataTable
            pageSize={dataGridEntitiesPageSize}
            onPageChange={handleOnPageChange}
            loading={loading}
            columns={columns}
            rows={rows}
            getRowId={(row) => row.idEntity}
          />
        </Box>
      </Container>
    </ViewLayout>
  )
}

const HeaderContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`
