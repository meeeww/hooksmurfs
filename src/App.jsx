import { useState } from 'react'
import Header from "./componentes/Header"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="w-screen">
      <Header />
    </div>
  )
}

export default App
