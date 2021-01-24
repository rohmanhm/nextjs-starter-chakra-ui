import theme from '#/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React, { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
