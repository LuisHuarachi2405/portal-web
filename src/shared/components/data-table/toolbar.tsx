import type { FC } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'

export const Toolbar: FC = () => (
  <StyledToolbarContainer>
    <InnerFilterActions>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </InnerFilterActions>
    <StyledGridToolbarQuickFilter />
  </StyledToolbarContainer>
)

const StyledToolbarContainer = styled(GridToolbarContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  padding: 8px;
  & * {
    text-transform: capitalize;
    font-size: 0.9rem;
  }
`

const StyledGridToolbarQuickFilter = styled(GridToolbarQuickFilter)`
  border-radius: 4px;
  outline: 1px solid #e0e0e0;
  padding: 4px;
  &:focus-within {
    outline: 2px solid #556cd6;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transition: 0.2s;
  }

  & .MuiInputBase-formControl svg {
    color: #9e9e9e;
  }

  & .MuiInput-underline:before {
    content: none;
  }
  & .MuiInput-underline:after {
    content: none;
  }
`

const InnerFilterActions = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`
