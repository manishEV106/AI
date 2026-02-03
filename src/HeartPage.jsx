import { useState, useEffect, useRef } from 'react'
import './HeartPage.css'

function HeartPage({ onBack }) {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create and play heartbeat sound
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Audio autoplay blocked:', err))
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="heart-page-container">
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="https://assets.mixkit.co/active_storage/sfx/2898/2898-preview.mp3" type="audio/mpeg" />
      </audio>

      <button className="back-btn-heart" onClick={onBack}>
        ← Back
      </button>

      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>

      <div className="heart-scene">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>

        <svg className="anatomical-heart" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heartGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#8B0000', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#DC143C', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#8B0000', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="heartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#DC143C', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#8B0000', stopOpacity: 1}} />
            </linearGradient>
            <radialGradient id="heartGradient3">
              <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#DC143C', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#8B0000', stopOpacity: 1}} />
            </radialGradient>
            <radialGradient id="highlightGradient">
              <stop offset="0%" style={{stopColor: '#FF8888', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#FF8888', stopOpacity: 0}} />
            </radialGradient>
          </defs>

          {/* Main heart body - left ventricle */}
          <path 
            d="M100,170 Q70,150 60,120 Q50,90 60,70 Q70,50 85,50 Q95,50 100,60 Q105,50 115,50 Q130,50 140,70 Q150,90 140,120 Q130,150 100,170 Z" 
            fill="url(#heartGradient1)"
            className="heart-main"
          />

          {/* Right atrium */}
          <ellipse 
            cx="125" 
            cy="70" 
            rx="18" 
            ry="20" 
            fill="url(#heartGradient2)"
            className="heart-atrium"
          />

          {/* Left atrium */}
          <ellipse 
            cx="75" 
            cy="70" 
            rx="18" 
            ry="20" 
            fill="url(#heartGradient2)"
            className="heart-atrium"
          />

          {/* Aorta */}
          <path 
            d="M100,45 Q95,35 95,25 Q95,15 100,10" 
            stroke="url(#heartGradient2)" 
            strokeWidth="8" 
            fill="none"
            className="heart-vessel"
          />

          {/* Pulmonary artery */}
          <path 
            d="M110,45 Q115,35 120,28" 
            stroke="url(#heartGradient2)" 
            strokeWidth="6" 
            fill="none"
            className="heart-vessel"
          />

          {/* Vena cava */}
          <path 
            d="M90,45 Q85,35 80,28" 
            stroke="url(#heartGradient2)" 
            strokeWidth="6" 
            fill="none"
            className="heart-vessel"
          />

          {/* Highlight for 3D effect */}
          <ellipse 
            cx="85" 
            cy="90" 
            rx="25" 
            ry="35" 
            fill="url(#highlightGradient)"
            opacity="0.3"
            className="heart-highlight"
          />

          {/* Anatomical lines/details */}
          <path 
            d="M100,60 L100,165" 
            stroke="#660000" 
            strokeWidth="1.5" 
            opacity="0.3"
            className="heart-detail"
          />
          <path 
            d="M70,100 Q100,110 130,100" 
            stroke="#660000" 
            strokeWidth="1" 
            opacity="0.2"
            fill="none"
            className="heart-detail"
          />
        </svg>

        <div className="romantic-message">
          <h1 className="message-text">My Heart Beats Only For You</h1>
          <p className="message-subtext">Every beat, every moment, forever yours</p>
        </div>
      </div>

      <div className="heartbeat-indicator">
        <div className="pulse-line">
          <svg viewBox="0 0 200 40" className="ecg-line">
            <polyline
              points="0,20 40,20 45,5 50,35 55,20 200,20"
              fill="none"
              stroke="#ff4757"
              strokeWidth="2"
            />
          </svg>
        </div>
        <span className="bpm-text">♥ 75 BPM</span>
      </div>
    </div>
  )
}

export default HeartPage
