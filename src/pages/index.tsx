import { Button } from '#/components/Button'
import React from 'react'

const IndexPage = () => {
  return (
    <div>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
    </div>
  )
}

export default IndexPage
