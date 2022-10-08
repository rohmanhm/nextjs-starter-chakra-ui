import { Button, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <div>
      <Head>
        <title>Hello World</title>
      </Head>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
      provident vel fugit explicabo quam fugiat asperiores commodi sapiente
      nostrum voluptates ipsam veniam expedita itaque nobis quos cupiditate
      necessitatibus molestias vero!
      <br />
      <Button onClick={toggleColorMode}>Toggle Mode</Button>
    </div>
  )
}

export default IndexPage
