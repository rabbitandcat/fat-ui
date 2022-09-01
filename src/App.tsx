import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Alert from './components/Alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>
          cool link 3
        </MenuItem>
      </Menu>
    </div>
  )
}

export default App
