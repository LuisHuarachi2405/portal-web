import type { NormalizedCacheObject } from '@apollo/client'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import merge from 'lodash/merge'
import { useMemo } from 'react'

let apolloClientCSR: ApolloClient<NormalizedCacheObject> | null = null

const createApolloClient = () => {
  const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
    }),
    cache: new InMemoryCache(),
  })
  return apolloClient
}

export const initApolloClient = (initialState: NormalizedCacheObject | null = null) => {
  const apolloClientSSR = apolloClientCSR ?? createApolloClient()

  if (initialState) {
    const existingCache = apolloClientSSR.extract()
    const data = merge(initialState, existingCache)
    apolloClientSSR.cache.restore(data)
  }

  if (typeof window === 'undefined') return apolloClientSSR
  if (!apolloClientCSR) apolloClientCSR = apolloClientSSR
  return apolloClientCSR
}

export const useApollo = (initialState: NormalizedCacheObject) => {
  const apolloClient = useMemo(() => initApolloClient(initialState), [initialState])
  return apolloClient
}
