import { useState, useEffect } from 'react'
import Login from './Login'
import Welcome from './Welcome'
import Memories from './Memories'
import ValentineSteps from './ValentineSteps'
import HeartPage from './HeartPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'welcome'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('welcome')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentPage')
  }

  const navigateToMemories = () => {
    setCurrentPage('memories')
  }

  const navigateToValentineSteps = () => {
    setCurrentPage('valentinesteps')
  }

  const navigateToHeart = () => {
    setCurrentPage('heart')
  }

  const navigateToWelcome = () => {
    setCurrentPage('welcome')
  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : currentPage === 'welcome' ? (
        <Welcome 
          onLogout={handleLogout} 
          onNavigateToMemories={navigateToMemories}
          onNavigateToValentineSteps={navigateToValentineSteps}
          onNavigateToHeart={navigateToHeart}
        />
      ) : currentPage === 'memories' ? (
        <Memories onBack={navigateToWelcome} />
      ) : currentPage === 'valentinesteps' ? (
        <ValentineSteps onBack={navigateToWelcome} />
      ) : currentPage === 'heart' ? (
        <HeartPage onBack={navigateToWelcome} />
      ) : null}
    </>
  )
}

export default App
