import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import AddNew from './components/Body/AddNew'
import PreviousSaved from './components/Body/PreviousSaved'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <AddNew></AddNew>
        <PreviousSaved></PreviousSaved>
      </div>
    </>
  )
}

export default App
