import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.password) {
      newErrors.password = 'Please enter the key to my heart'
    } else if (formData.password.length < 4) {
      newErrors.password = 'The key seems too short'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (formData.password === 'merijaanbugdiee' || formData.password === 'bugdieee266') {
        console.log('Login submitted:', formData)
        setIsLoading(false)
        const userType = formData.password === 'merijaanbugdiee' ? 'merijaanbugdiee' : 'bugdieee266'
        setFormData({ password: '' })
        if (onLogin) {
          onLogin(userType)
        }
      } else {
        setErrors({ password: 'Wrong key! Try again 💔' })
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand-content">
          <div className="floating-hearts">
            <span className="heart">❤️</span>
            <span className="heart">💕</span>
            <span className="heart">💖</span>
            <span className="heart">💗</span>
            <span className="heart">💝</span>
          </div>
          <div className="logo">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h1>For My Love</h1>
          <p className="tagline">This heart belongs to you and only you 💘</p>
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">💕</span>
              <span>You're my everything</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💖</span>
              <span>Forever and always</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💗</span>
              <span>My heart is yours</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-form-container">
          <h2>My Heart Awaits 💕</h2>
          <p className="login-subtitle">You have the key to unlock it</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="key-icon">
              🔑
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Enter the Key to My Heart</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type your special key..."
                className={errors.password ? 'error' : ''}
                disabled={isLoading}
                autoFocus
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <p className="hint-text">💭 Hint: It's what you call me when we're alone...</p>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Unlocking my heart...' : 'Unlock My Heart 💖'}
            </button>
          </form>

          <div className="login-footer">
            <p className="love-note">
              "You are the only one who holds the key to my heart" 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
