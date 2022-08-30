import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button, { ButtonType, ButtonSize } from './components/button/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button className='custom'>Hello</Button>
      <Button btnType={'primary'} size={'lg'}>Hello</Button>
      <Button btnType={'link'} href='http://www.baidu.com'>Baidu Link</Button>
    </div>
  )
}

export default App
