import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button, { ButtonType, ButtonSize } from './components/button/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>Baidu Link</Button>
    </div>
  )
}

export default App
