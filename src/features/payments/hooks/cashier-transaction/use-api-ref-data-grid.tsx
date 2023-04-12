import { useMemo, useRef } from 'react'

export function useApiRef(columnsGrid: any) {
  const apiRef = useRef<any>(null)
  const meColumns = useMemo(
    () =>
      columnsGrid.concat({
        field: ' ',
        minWidth: 1,
        maxWidth: 1,
        renderCell: (params: any) => {
          apiRef.current = params.api
          return null
        },
      }),
    [columnsGrid]
  )

  return { apiRef, columns: meColumns }
}
