import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Manage from './components/Body/Manage'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute z-[-5] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_-30%_-100px,#00ffff,transparent)]"></div>
      <div className="absolute z-[-5] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_130%_-100px,#00ffff,transparent)]"></div>
      <div>
        <Navbar></Navbar>
        <Manage></Manage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
