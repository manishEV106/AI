import { useState, useEffect } from 'react'
import Login from './Login'
import Welcome from './Welcome'
import Memories from './Memories'
import ValentineSteps from './ValentineSteps'
import HeartPage from './HeartPage'
import LoveStoryBook from './LoveStoryBook'
import TrackingDashboard from './TrackingDashboard'
import trackingService from './trackingService'
import './App.css'

// Version to track deployments - change this to force logout on new deployment
const APP_VERSION = '3.0.0'

// Check version before component renders
const storedVersion = localStorage.getItem('appVersion')
if (!storedVersion || storedVersion !== APP_VERSION) {
  // Clear all stored data on new deployment or first visit
  localStorage.clear()
  localStorage.setItem('appVersion', APP_VERSION)
}

function App() {
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

  // Track app initialization
  useEffect(() => {
    // Don't track if admin user
    if (userType !== 'admin') {
      trackingService.logAction('APP_INITIALIZED', { 
        isLoggedIn,
        currentPage,
        userType 
      })
    }
  }, [])

  // Check if URL path is /activitytracker
  const isActivityTrackerRoute = window.location.pathname === '/activitytracker'

  // Show tracking dashboard if on /activitytracker route
  if (isActivityTrackerRoute) {
    return <TrackingDashboard onBack={() => {
      window.history.pushState({}, '', '/')
      window.location.reload()
    }} />
  }

  const handleLogin = (type) => {
    setIsLoggedIn(true)
    setUserType(type)
    // Don't track admin login
    if (type !== 'admin') {
      trackingService.logAction('USER_LOGIN', { userType: type })
    }
  }

  const handleLogout = () => {
    // Don't track admin logout
    if (userType !== 'admin') {
      trackingService.logAction('USER_LOGOUT', { userType })
    }
    setIsLoggedIn(false)
    setCurrentPage('welcome')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentPage')
    localStorage.removeItem('userType')
  }

  const navigateToMemories = () => {
    trackingService.logAction('NAVIGATE_TO_MEMORIES', { from: currentPage })
    setCurrentPage('memories')
  }

  const navigateToValentineSteps = () => {
    trackingService.logAction('NAVIGATE_TO_VALENTINE_STEPS', { from: currentPage })
    setCurrentPage('valentinesteps')
  }

  const navigateToHeart = () => {
    trackingService.logAction('NAVIGATE_TO_HEART', { from: currentPage })
    setCurrentPage('heart')
  }

  const navigateToLoveStory = () => {
    trackingService.logAction('NAVIGATE_TO_LOVE_STORY', { from: currentPage })
    setCurrentPage('lovestory')
  }

  const navigateToWelcome = () => {
    trackingService.logAction('NAVIGATE_TO_WELCOME', { from: currentPage })
    setCurrentPage('welcome')
  }

  // Show tracking dashboard for admin users
  if (isLoggedIn && userType === 'admin') {
    return <TrackingDashboard onBack={handleLogout} />
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
