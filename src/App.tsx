import React, { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      </div>
      <h1>Vite + React</h1>
      <h2>Vite + React</h2>
      <h3>Vite + React</h3>
      <h4>Vite + React</h4>
      <code>
        const a = 'b'
      </code>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
