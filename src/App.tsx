import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PhotoSticker from './components/PhotoSticker'
import Header from './layout/Header'
import SideBar from './layout/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
    </div>
  )
}

export default App
