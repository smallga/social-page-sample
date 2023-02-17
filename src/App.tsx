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
import NotifyPage from './pages/Notify'
import PostModal from './components/PostModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full w-full flex justify-center'>
      <Header></Header>
      <SideBar></SideBar>
      <div id="content" className='pb-14 pt-2 max-w-2xl w-full h-full overflow-y-hidden lg:pt-14 lg:pb-2'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/grid/*' element={<GridPage />} />
            <Route path='/notify/*' element={<NotifyPage />} />
            <Route path='/user' element={<UserPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
