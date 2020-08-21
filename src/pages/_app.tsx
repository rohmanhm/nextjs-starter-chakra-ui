import { register, unregister } from 'next-offline/runtime'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    register('/_next/static/service-worker.js', { scope: '/' })
    return () => unregister()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
