import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PhotoSticker from './components/PhotoSticker'
import Header from './layout/Header'
import SideBar from './layout/SideBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/User'
import GridPage from './pages/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pb-14 pt-2 h-full w-full flex justify-center lg:pb-2 lg:pt-14'>
      <Header></Header>
      <SideBar></SideBar>
      <div id="content" className='max-w-2xl w-full h-full overflow-y-hidden'>
        <Routes>
          <Route path='/' element={<Home />}/>
            <Route path='grid' element={<GridPage />} />
            <Route path='/user/:id' element={<UserPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
