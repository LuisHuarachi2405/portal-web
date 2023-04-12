import type { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Box, Container, useMediaQuery } from '@mui/material'

interface ViewLayoutProps {
  children: React.ReactNode
}

export const ViewLayout: FC<ViewLayoutProps> = (props) => {
  const { children } = props

  const isMobile = useMediaQuery('(max-width:768px)', { noSsr: true })

  return (
    <StyledBox isMobile={isMobile}>
      <Container maxWidth="xl">{children}</Container>
    </StyledBox>
  )
}

const StyledBoxWrapper: FC<{ isMobile: boolean; children: ReactNode }> = ({
  isMobile: _isMobile,
  ...rest
}) => <Box {...rest} />

const StyledBox = styled(StyledBoxWrapper)`
  padding: ${({ isMobile }) => (isMobile ? '24px 16px' : '24px')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
