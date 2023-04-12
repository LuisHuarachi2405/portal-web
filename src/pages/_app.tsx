import type { NormalizedCacheObject } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import 'react-phone-input-2/lib/material.css'

import { Layout } from '@/shared/components/layout'
import english from '@/shared/languages/en.json'
import spanish from '@/shared/languages/es.json'
import { useApollo } from '@/shared/libs/apollo-client'
import { createEmotionCache } from '@/shared/libs/emotion-cache'
import '@/shared/styles/globals.scss'
import { theme } from '@/shared/styles/theme'
import AuthProvider from '@/shared/contexts/auth/auth-provider'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  pageProps: {
    initialApolloState: NormalizedCacheObject
  }
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const apolloClient = useApollo(pageProps.initialApolloState)

  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split('-') : ['en']

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'es':
        return spanish
      case 'en':
        return english
      default:
        return english
    }
  }, [shortLocale])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <IntlProvider locale={shortLocale} messages={messages}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Toaster />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </IntlProvider>
        </ApolloProvider>
      </AuthProvider>
    </CacheProvider>
  )
}

// export const getInitialProps = async ({ req }) => {
//   if (req) {
//     const userData = localStorage.getItem('user-data-storage')
//     const user = userData ? JSON.parse(userData) : null
//     const token = user.accessToken.jwtToken

//   }
// }
