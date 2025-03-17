import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Manage from './components/Body/Manage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Manage></Manage>
      </div>
    </>
  )
}

export default App
