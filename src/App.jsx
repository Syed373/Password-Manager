import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Manage from './components/Body/Manage'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Manage></Manage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
