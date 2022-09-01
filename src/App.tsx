import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button>哈哈</Button>
      <Button disabled>哈哈</Button>
      <Button size='lg'>哈哈</Button>
      <Button size='sm'>哈哈</Button>
      <Button btnType='primary'>哈哈</Button>
      <Button btnType='danger'>哈哈</Button>
      <Button btnType='link'>哈哈</Button>
      <Button onClick={() => alert('haha')}>哈哈</Button>
      <Button autoFocus>哈哈</Button>
    </div>
  )
}

export default App
