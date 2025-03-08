import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_250px,#C9EBFF,transparent)]" />
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default App
