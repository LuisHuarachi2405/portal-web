import { Dispatch, FC, SetStateAction } from 'react'
import { Box, IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'

import { ProductInstance } from '@/shared/graphql/generated/products-api'

import { FormModalState } from '../types/shared.types'

interface RatesProductInstanceTableActionsProps {
  row: ProductInstance
  setProductInstanceSelected: Dispatch<SetStateAction<ProductInstance>>
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
}

export const RatesProductInstanceTableActions: FC<RatesProductInstanceTableActionsProps> = (
  props
) => {
  const { row, setProductInstanceSelected, setFormModalState } = props

  const handleCreate = () => {
    setFormModalState({
      open: true,
      itemToEdit: null,
    })

    setProductInstanceSelected(row)
  }

  return (
    <Box display="flex" gap={1} justifyContent="center" width="100%">
      <IconButton onClick={handleCreate}>
        <Add />
      </IconButton>
    </Box>
  )
}
