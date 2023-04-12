import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import type { NormalizedCacheObject } from '@apollo/client'
import type { NextPage, GetServerSideProps } from 'next'

import { FormTest } from '@/features/test/components/form-test'
import { initApolloClient } from '@/shared/libs/apollo-client'

const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

interface Country {
  code: string
  name: string
  emoji: string
}

interface CountriesQueryData {
  countries: Country[]
}

const TestPage: NextPage = () => {
  const { data } = useQuery<CountriesQueryData>(COUNTRIES_QUERY)

  return (
    <StyledBox
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <FormTest />
      {data?.countries.map((country) => (
        <div key={JSON.stringify(country)}>{country.name}</div>
      ))}
    </StyledBox>
  )
}

export default TestPage

interface ServerSideProps {
  initialApolloState: NormalizedCacheObject
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const apolloClient = initApolloClient()
  await apolloClient.query({
    query: COUNTRIES_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`
