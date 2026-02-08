import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Path to tracking data file
const TRACKING_FILE = path.join(__dirname, 'tracking-data.json')

// Initialize tracking file if it doesn't exist
if (!fs.existsSync(TRACKING_FILE)) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify([]))
}

// Helper function to read tracking data
const readTrackingData = () => {
  try {
    const data = fs.readFileSync(TRACKING_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading tracking data:', error)
    return []
  }
}

// Helper function to write tracking data
const writeTrackingData = (data) => {
  try {
    fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    console.error('Error writing tracking data:', error)
    return false
  }
}

// API Routes

// Get all tracking logs
app.get('/api/tracking/logs', (req, res) => {
  const logs = readTrackingData()
  res.json(logs)
})

// Add a new tracking log
app.post('/api/tracking/log', (req, res) => {
  const logEntry = req.body
  const logs = readTrackingData()
  logs.push(logEntry)
  
  if (writeTrackingData(logs)) {
    res.json({ success: true, message: 'Log added successfully' })
  } else {
    res.status(500).json({ success: false, message: 'Failed to write log' })
  }
})

// Clear all tracking logs
app.delete('/api/tracking/logs', (req, res) => {
  if (writeTrackingData([])) {
    res.json({ success: true, message: 'All logs cleared' })
  } else {
    res.status(500).json({ success: false, message: 'Failed to clear logs' })
  }
})

// Get tracking statistics
app.get('/api/tracking/stats', (req, res) => {
  const logs = readTrackingData()
  
  const stats = {
    totalActions: logs.length,
    uniqueSessions: [...new Set(logs.map(l => l.sessionId))].length,
    devices: [...new Set(logs.map(l => l.device))],
    actionTypes: {}
  }

  logs.forEach(log => {
    stats.actionTypes[log.action] = (stats.actionTypes[log.action] || 0) + 1
  })

  res.json(stats)
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Tracking server is running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Tracking server running on port ${PORT}`)
})
