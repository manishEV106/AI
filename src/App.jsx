import { useState, useEffect } from 'react'
import Login from './Login'
import Welcome from './Welcome'
import Memories from './Memories'
import ValentineSteps from './ValentineSteps'
import HeartPage from './HeartPage'
import LoveStoryBook from './LoveStoryBook'
import './App.css'

// Version to track deployments - change this to force logout on new deployment
const APP_VERSION = '1.0.0'

function App() {
  // Check version and clear localStorage if it's a new deployment
  useEffect(() => {
    const storedVersion = localStorage.getItem('appVersion')
    if (storedVersion !== APP_VERSION) {
      // Clear all stored data on new deployment
      localStorage.clear()
      localStorage.setItem('appVersion', APP_VERSION)
    }
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'welcome'
  })
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem('userType') || 'merijaanbugdiee'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

  useEffect(() => {
    localStorage.setItem('userType', userType)
  }, [userType])

  const handleLogin = (type) => {
    setIsLoggedIn(true)
    setUserType(type)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('welcome')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentPage')
    localStorage.removeItem('userType')
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

  const navigateToLoveStory = () => {
    setCurrentPage('lovestory')
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
          onNavigateToLoveStory={navigateToLoveStory}
          userType={userType}
        />
      ) : currentPage === 'memories' ? (
        <Memories onBack={navigateToWelcome} userType={userType} />
      ) : currentPage === 'valentinesteps' ? (
        <ValentineSteps onBack={navigateToWelcome} />
      ) : currentPage === 'heart' ? (
        <HeartPage onBack={navigateToWelcome} />
      ) : currentPage === 'lovestory' ? (
        <LoveStoryBook onBack={navigateToWelcome} />
      ) : null}
    </>
  )
}

export default App
