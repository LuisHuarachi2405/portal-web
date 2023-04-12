import { FC, Suspense, useState } from 'react'
import { LinearProgress } from '@mui/material'
import type { DataGridProps } from '@mui/x-data-grid'
import dynamic from 'next/dynamic'

import { EmptyTableOverlay } from './empty-table-overlay'
import { Toolbar } from './toolbar'

import { Spinner } from '../spinner'

type DataTableProps = DataGridProps

const DynamicDataGrid = dynamic(() => import('@mui/x-data-grid').then((mod) => mod.DataGrid))

export const DataTable: FC<DataTableProps> = (props) => {
  const { rows, columns, pageSize = 10, loading, ...baseProps } = props

  const [customPageSize, setCustomPageSize] = useState<number>(pageSize)

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <Suspense fallback={<Spinner />}>
          <DynamicDataGrid
            {...baseProps}
            rows={rows}
            columns={columns}
            components={{
              Toolbar,
              LoadingOverlay: LinearProgress,
              NoRowsOverlay: EmptyTableOverlay,
            }}
            loading={loading}
            autoHeight
            pagination
            disableSelectionOnClick
            pageSize={customPageSize}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            onPageSizeChange={(newPageSize) => setCustomPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Suspense>
      </div>
    </div>
  )
}
