import { useState } from 'react'
import { useEffect } from 'react'
import trackingService from './trackingService'
import './ValentineSteps.css'

function ValentineSteps({ onBack }) {
  const [currentDay, setCurrentDay] = useState(0)

  const valentineDays = [
    {
      id: 1,
      day: "Rose Day",
      date: "February 7",
      icon: "🌹",
      color: "#ff6b9d",
      title: "The Day of Beautiful Beginnings",
      message: "A rose for you, my love. Red for passion, pink for grace, white for pure love. You deserve a garden of roses because you make my life bloom with happiness.",
      activities: [
        {
          time: "Morning",
          task: "Wake up to a trail of rose petals",
          emoji: "🌹"
        },
        {
          time: "Afternoon", 
          task: "Receive a beautiful bouquet of roses",
          emoji: "💐"
        },
        {
          time: "Evening",
          task: "Candlelit dinner with rose decorations",
          emoji: "🕯️"
        }
      ]
    },
    {
      id: 2,
      day: "Propose Day",
      date: "February 8",
      icon: "💍",
      color: "#e91e63",
      title: "The Day I Choose You Again",
      message: "Every day I choose you, every day I fall deeper in love. Today, I propose we keep falling together, forever and always.",
      activities: [
        {
          time: "Morning",
          task: "Love letter expressing my heart",
          emoji: "💌"
        },
        {
          time: "Afternoon",
          task: "Romantic picnic at our special spot",
          emoji: "🧺"
        },
        {
          time: "Evening",
          task: "Surprise proposal under the stars",
          emoji: "✨"
        }
      ]
    },
    {
      id: 3,
      day: "Chocolate Day",
      date: "February 9",
      icon: "🍫",
      color: "#8b4513",
      title: "Sweet As Our Love",
      message: "Life with you is sweeter than any chocolate. But here's some chocolate anyway, because you deserve all the sweetness in the world.",
      activities: [
        {
          time: "Morning",
          task: "Chocolate breakfast in bed",
          emoji: "🍫"
        },
        {
          time: "Afternoon",
          task: "Visit the best chocolate shop in town",
          emoji: "🏪"
        },
        {
          time: "Evening",
          task: "Make chocolate desserts together",
          emoji: "👨‍🍳"
        }
      ]
    },
    {
      id: 4,
      day: "Teddy Day",
      date: "February 10",
      icon: "🧸",
      color: "#d4a373",
      title: "Cuddles and Warmth",
      message: "This teddy will keep you warm when I'm not around, but nothing compares to holding you in my arms.",
      activities: [
        {
          time: "Morning",
          task: "Gift a special teddy bear",
          emoji: "🧸"
        },
        {
          time: "Afternoon",
          task: "Movie marathon with cuddles",
          emoji: "🎬"
        },
        {
          time: "Evening",
          task: "Cozy blanket fort for two",
          emoji: "🏠"
        }
      ]
    },
    {
      id: 5,
      day: "Promise Day",
      date: "February 11",
      icon: "🤝",
      color: "#9c27b0",
      title: "Eternal Commitments",
      message: "I promise to love you in sunshine and storms, to support your dreams, to hold you close, and to never let go. Forever and always.",
      activities: [
        {
          time: "Morning",
          task: "Exchange promise rings or tokens",
          emoji: "💍"
        },
        {
          time: "Afternoon",
          task: "Write down our promises to each other",
          emoji: "📝"
        },
        {
          time: "Evening",
          task: "Plant a tree together as symbol",
          emoji: "🌳"
        }
      ]
    },
    {
      id: 6,
      day: "Hug Day",
      date: "February 12",
      icon: "🤗",
      color: "#ff9800",
      title: "The Warmth of Your Arms",
      message: "Your hugs are my safe place, my home, my peace. Today, I want to hold you close and never let go.",
      activities: [
        {
          time: "Morning",
          task: "Wake up with the longest hug",
          emoji: "🤗"
        },
        {
          time: "Afternoon",
          task: "Surprise hugs throughout the day",
          emoji: "💕"
        },
        {
          time: "Evening",
          task: "Dance slow and close together",
          emoji: "💃"
        }
      ]
    },
    {
      id: 7,
      day: "Kiss Day",
      date: "February 13",
      icon: "💋",
      color: "#e91e63",
      title: "Sealed With a Kiss",
      message: "Every kiss tells you how much I love you. Today, let me show you with countless kisses from sunrise to sunset.",
      activities: [
        {
          time: "Morning",
          task: "Good morning kiss to start the day",
          emoji: "💋"
        },
        {
          time: "Afternoon",
          task: "Romantic walk with stolen kisses",
          emoji: "🚶‍♂️"
        },
        {
          time: "Evening",
          task: "Moonlight kisses under the stars",
          emoji: "🌙"
        }
      ]
    },
    {
      id: 8,
      day: "Valentine's Day",
      date: "February 14",
      icon: "💝",
      color: "#ff1744",
      title: "The Day of Love",
      message: "Happy Valentine's Day, my love! Today and every day, you are my heart, my soul, my everything. I love you more than words can express.",
      activities: [
        {
          time: "Morning",
          task: "Breakfast in bed with love notes",
          emoji: "🍳"
        },
        {
          time: "Afternoon",
          task: "Exchange special Valentine gifts",
          emoji: "🎁"
        },
        {
          time: "Evening",
          task: "Romantic candlelit dinner",
          emoji: "🕯️"
        },
        {
          time: "Night",
          task: "Dance under the stars together",
          emoji: "✨"
        }
      ]
    }
  ]

  useEffect(() => {
    trackingService.logAction('VALENTINE_STEPS_OPENED', { 
      totalDays: valentineDays.length 
    })
  }, [])

  const currentDayData = valentineDays[currentDay]

  const goToNextDay = () => {
    if (currentDay < valentineDays.length - 1) {
      trackingService.logAction('VALENTINE_NEXT_DAY', { 
        from: currentDay, 
        to: currentDay + 1,
        day: valentineDays[currentDay + 1].day 
      })
      setCurrentDay(currentDay + 1)
    }
  }

  const goToPrevDay = () => {
    if (currentDay > 0) {
      trackingService.logAction('VALENTINE_PREV_DAY', { 
        from: currentDay, 
        to: currentDay - 1,
        day: valentineDays[currentDay - 1].day 
      })
      setCurrentDay(currentDay - 1)
    }
  }

  return (
    <div className="valentine-steps-container" style={{ '--day-color': currentDayData.color }}>
      <div className="floating-valentine-bg">
        <span className="float-icon">{currentDayData.icon}</span>
        <span className="float-icon">{currentDayData.icon}</span>
        <span className="float-icon">{currentDayData.icon}</span>
        <span className="float-heart">💕</span>
        <span className="float-heart">💖</span>
        <span className="float-heart">💗</span>
      </div>

      <div className="valentine-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>
        
        <div className="day-indicator">
          {valentineDays.map((day, index) => (
            <div
              key={day.id}
              className={`day-dot ${index === currentDay ? 'active' : ''} ${index < currentDay ? 'completed' : ''}`}
              onClick={() => setCurrentDay(index)}
            >
              {index < currentDay ? '✓' : day.icon}
            </div>
          ))}
        </div>

        <div className="day-title-container">
          <div className="day-icon-large">{currentDayData.icon}</div>
          <h1 className="valentine-title">{currentDayData.day}</h1>
          <p className="valentine-date">{currentDayData.date}</p>
          <h2 className="day-subtitle">{currentDayData.title}</h2>
        </div>
      </div>

      <div className="day-content">
        <div className="love-message-box">
          <div className="message-icon">💌</div>
          <p className="love-message">{currentDayData.message}</p>
        </div>

        <div className="activities-section">
          <h3>Today's Special Activities</h3>
          <div className="activities-grid">
            {currentDayData.activities.map((activity, index) => (
              <div
                key={index}
                className="activity-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="activity-emoji">{activity.emoji}</div>
                <div className="activity-time">{activity.time}</div>
                <div className="activity-task">{activity.task}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-btn prev-btn"
          onClick={goToPrevDay}
          disabled={currentDay === 0}
        >
          ← Previous Day
        </button>
        
        <div className="day-counter">
          Day {currentDay + 1} of {valentineDays.length}
        </div>

        <button
          className="nav-btn next-btn"
          onClick={goToNextDay}
          disabled={currentDay === valentineDays.length - 1}
        >
          Next Day →
        </button>
      </div>

      {currentDay === valentineDays.length - 1 && (
        <div className="final-message">
          <h3>🎉 Happy Valentine's Week! 🎉</h3>
          <p>Every day with you is a celebration of love 💕</p>
        </div>
      )}
    </div>
  )
}

export default ValentineSteps
