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
      <Menu defaultIndex={0}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>
    </div>
  )
}

export default App
