import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Hello World</title>
      </Head>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
    </div>
  )
}

export default IndexPage
