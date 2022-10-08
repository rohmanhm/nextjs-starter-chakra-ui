import { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '@/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
