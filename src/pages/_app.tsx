import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../styles/theme'
import Fonts from '../styles/fonts'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Um simples esqueleto para iniciar um projeto Next JS"
        />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
