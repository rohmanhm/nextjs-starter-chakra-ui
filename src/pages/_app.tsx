import { FC } from 'react'

import { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
