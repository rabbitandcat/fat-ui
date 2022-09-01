import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Alert title='defaultTitle' onClose={() => alert('haha')}></Alert>
    </div>
  )
}

export default App
