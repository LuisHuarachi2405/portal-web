import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Image from 'next/image'
import type { FC } from 'react'

import { useIntl } from '../hooks/use-intl'

interface ErrorBoundaryProps {
  retry: () => void
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = (props) => {
  const { retry } = props

  const intl = useIntl()

  return (
    <StyledBox>
      <Image src="/assets/error-boundary.svg" height={400} width={400} alt="error image" />
      <h1>{intl.formatMessage('components.error-boundary.not-found.title')}</h1>
      <h3>{intl.formatMessage('components.error-boundary.not-found.subtitle')}</h3>
      <Button size="medium" onClick={retry} variant="contained">
        {intl.formatMessage('components.error-boundary.not-found.retry-button')}
      </Button>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1,
  h2 {
    margin: 0 !important;
  }
`
