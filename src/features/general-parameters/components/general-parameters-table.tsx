import { Add } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC, useState } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { DataTable } from '@/shared/components/data-table/data-table'
import { ViewLayout } from '@/shared/components/view-layout'
import { useGetGeneralParameterByArgsQueryQuery } from '@/shared/graphql/generated/general-parameters-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { ErrorBoundary } from '@/shared/components/error-boundary'

import { useBuildColumns } from '../hooks/use-build-columns'

export const GeneralParametersTable: FC = () => {
  const intl = useIntl()
  const { columns } = useBuildColumns()

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)

  const [userInput, setUserInput] = useState<string>('')

  const { data, loading, error, refetch } = useGetGeneralParameterByArgsQueryQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      generalParameterByArgsQueryInput: {
        skip: currentPage * pageSize,
        take: pageSize,
        userInput,
      },
    },
  })

  if (error) return <ErrorBoundary retry={refetch} />

  const rows = data?.generalParametersByArgs.data ?? []

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
                name: 'components.sidebar.item.home',
                href: paths.home,
              },
              {
                name: 'pages.general.parameters.title',
                href: paths.generalParameters.root,
              },
            ]}
          />
        </Box>

        <Link href={paths.generalParameters.new} passHref>
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
        paginationMode="server"
        onPageChange={(page) => {
          setCurrentPage(page)
        }}
        filterMode="server"
        onFilterModelChange={(model) => {
          setUserInput(model.quickFilterValues?.join(' ') ?? '')
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 20, 50, 100]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowCount={data?.generalParametersByArgs.count ?? 0}
      />
    </ViewLayout>
  )
}
