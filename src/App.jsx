import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import AddNew from './components/Body/AddNew'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <AddNew></AddNew>
      </div>
    </>
  )
}

export default App
