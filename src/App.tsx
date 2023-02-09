import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PhotoSticker from './components/PhotoSticker'
import Header from './layout/Header'
import SideBar from './layout/SideBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/User'
import SearchPage from './pages/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='py-14 h-full w-full flex justify-center'>
      <Header></Header>
      <SideBar></SideBar>
      <div id="content" className='max-w-2xl w-full'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Home />} />
            <Route path='user/:id' element={<UserPage />} />
            <Route path='search' element={<SearchPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
