import type { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

import { useIntl } from '../hooks/use-intl'

interface CardContainerProps {
  header: string
  children: ReactNode
}

export const CardContainer: FC<CardContainerProps> = (props) => {
  const { header, children } = props

  const intl = useIntl()

  return (
    <StyledFormContainer>
      <StyledHeaderContainer>
        <Typography variant="h5" fontWeight={700}>
          {intl.formatMessage(header)}
        </Typography>
      </StyledHeaderContainer>
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledFormContainer>
  )
}

const StyledFormContainer = styled(Box)`
  border: 1px solid #d7dcf5;
  border-radius: 8px;
`

const StyledHeaderContainer = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid #d7dcf5;
`

const StyledContentContainer = styled(Box)`
  padding: 16px;
`
