import type { AppType } from 'next/app'
import type { EmotionCache } from '@emotion/cache'
import type { ComponentType, ReactNode } from 'react'
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { theme } from '@/shared/styles/theme'
import { createEmotionCache } from '@/shared/libs/emotion-cache'

interface DocumentProps {
  emotionStyleTags: ReactNode
}

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (context) => {
  const originalRenderPage = context.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: AppType | ComponentType<{ emotionCache: EmotionCache }>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(context)
  // This is important. It prevents Emotion to render invalid HTML.
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}
