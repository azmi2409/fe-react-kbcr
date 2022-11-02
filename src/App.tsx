import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className='text-5xl uppercase'>Hello</h1>
    </div>
  )
}

export default App
