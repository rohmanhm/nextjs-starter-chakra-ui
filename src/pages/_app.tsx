import theme from '#/theme'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
