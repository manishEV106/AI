import { useState } from 'react'
import Login from './Login'
import Welcome from './Welcome'
import Memories from './Memories'
import ValentineSteps from './ValentineSteps'
import HeartPage from './HeartPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('welcome')

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('welcome')
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
