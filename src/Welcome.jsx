import { useState, useEffect } from 'react'
import './Welcome.css'

function Welcome({ onLogout, onNavigateToMemories, onNavigateToValentineSteps, onNavigateToHeart }) {
  const [showMessage, setShowMessage] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Show welcome message with delay
    const timer = setTimeout(() => setShowMessage(true), 500)
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className="welcome-container">
      <div className="floating-hearts-bg">
        <span className="heart-bg">❤️</span>
        <span className="heart-bg">💕</span>
        <span className="heart-bg">💖</span>
        <span className="heart-bg">💗</span>
        <span className="heart-bg">💝</span>
        <span className="heart-bg">💘</span>
        <span className="heart-bg">❤️</span>
        <span className="heart-bg">💕</span>
        <span className="sunflower-bg">🌻</span>
        <span className="sunflower-bg">🌻</span>
        <span className="sunflower-bg">🌻</span>
        <span className="sunflower-bg">🌻</span>
        <span className="sunflower-bg">🌻</span>
        <span className="sunflower-bg">🌻</span>
      </div>

      <div className={`welcome-content ${showMessage ? 'show' : ''}`}>
        <div className="heart-burst">
          <span>💕</span>
          <span>💖</span>
          <span>💗</span>
          <span>💝</span>
          <span>💘</span>
          <span>💕</span>
          <span>💖</span>
          <span>💗</span>
        </div>

        <h1 className="welcome-title">
          {getGreeting()}, My Love! 💕
        </h1>

        <p className="welcome-subtitle">
          You've unlocked my heart
        </p>

        <div className="love-message">
          <div className="cupid-container">
            <div className="cupid">
              <div className="cupid-body">👼</div>
              <div className="cupid-bow">🏹</div>
              <div className="cupid-wings left-wing">🪽</div>
              <div className="cupid-wings right-wing">🪽</div>
            </div>
            <div className="cupid-string left-string"></div>
            <div className="cupid-string right-string"></div>
          </div>
          <div className="message-card">
            <div className="message-icon">💌</div>
            <h2>A Special Message For You</h2>
            <p className="message-text">
              Every moment with you feels like a beautiful dream. 
              You are my sunshine on cloudy days, my comfort in difficult times, 
              and my happiness in every moment. I love you more than words can express.
            </p>
            <div className="signature">
              With all my love,<br />
              <span className="signature-heart">❤️ Forever Yours ❤️</span>
            </div>
          </div>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div className="info-content">
              <h3>Current Time</h3>
              <p>{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-content">
              <h3>Today's Date</h3>
              <p>{currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">💝</div>
            <div className="info-content">
              <h3>Days Together</h3>
              <p>Every day with you ∞</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="primary-btn" onClick={onNavigateToMemories}>
            📷 View Our Memories
          </button>
          <button className="secondary-btn" onClick={onNavigateToHeart}>
            💓 My Heart For You
          </button>
          <button className="secondary-btn">
            🎵 Our Playlist
          </button>
          <button className="secondary-btn valentine-btn" onClick={onNavigateToValentineSteps}>
            💝 Valentine's Day Plans
          </button>
        </div>

        {onLogout && (
          <button className="logout-btn" onClick={onLogout}>
            Lock My Heart Again 🔒
          </button>
        )}
      </div>
    </div>
  )
}

export default Welcome
