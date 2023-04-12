import { Dispatch, FC, SetStateAction } from 'react'
import { Box, IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'

import { Product } from '@/shared/graphql/generated/products-api'

interface RatesProductsTableActionsProps {
  row: Product
  setProductSelected: Dispatch<SetStateAction<Product>>
}

export const RatesProductsTableActions: FC<RatesProductsTableActionsProps> = (props) => {
  const { row, setProductSelected } = props

  const handleCreate = () => {
    setProductSelected(row)
  }

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <IconButton onClick={handleCreate}>
        <Add />
      </IconButton>
    </Box>
  )
}
