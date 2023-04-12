import { MenuItem, TextField } from '@mui/material'
import { GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid'
import { ChangeEvent } from 'react'

import { GeneralParameterValue } from '@/shared/graphql/generated/general-parameters-api'

interface SelectEditInputCellProps extends GridRenderCellParams<number> {
  listTaxes: GeneralParameterValue[]
}

interface RenderSelectEditInputCellProps {
  params: GridRenderCellParams<number>
  listTaxes: GeneralParameterValue[]
}

function SelectEditInputCell(props: SelectEditInputCellProps) {
  const { id, value, field, listTaxes } = props
  const apiRef = useGridApiContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    apiRef.current.setEditCellValue({ id, field, value: event.target.value })
  }

  return (
    <TextField
      name="taxes"
      value={value}
      onChange={handleChange}
      type="number"
      fullWidth
      select
      size="small"
    >
      {listTaxes.map((tax) => (
        <MenuItem key={tax.idGeneralParameterValue} value={tax.value as any}>
          {tax.name} - {tax.value}
        </MenuItem>
      ))}
    </TextField>
  )
}

export const renderSelectEditInputCell = (props: RenderSelectEditInputCellProps) => {
  const { params, listTaxes } = props
  return <SelectEditInputCell {...params} listTaxes={listTaxes} />
}
