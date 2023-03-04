import { useCallback, useEffect, useState } from 'react'
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
import CreatePost from './layout/CreatePost'

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false)

  const closeCreateModal = useCallback(() => {
    setShowCreatePost(false);
  }, [])

  const openCreateModal = useCallback(() => {
    setShowCreatePost(true);
  }, [])

  return (
    <div className='h-full w-full pb-14 pt-2 relative lg:pt-14 lg:pb-2 overflow-hidden'>
      <Header></Header>
      <SideBar handleClickAdd={openCreateModal}></SideBar>
      <div id="content" className='h-full w-full mx-auto lg:pl-24 overflow-hidden'>
        <Routes>
            <Route path='/*' element={<Home />}/>
            <Route path='/grid/*' element={<GridPage />} />
            <Route path='/notify/*' element={<NotifyPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/user/:userName' element={<UserPage />} />
        </Routes>
      </div>
      <CreatePost show={showCreatePost} handleClose={closeCreateModal}/>
    </div>
  )
}

export default App
