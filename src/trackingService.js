// Tracking Service - Records user actions with device information

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

class TrackingService {
  constructor() {
    this.deviceInfo = this.getDeviceInfo()
  }

  // Get device and browser information
  getDeviceInfo() {
    const ua = navigator.userAgent
    let browserName = 'Unknown'
    let osName = 'Unknown'
    
    // Detect Browser
    if (ua.includes('Firefox')) browserName = 'Firefox'
    else if (ua.includes('Chrome') && !ua.includes('Edg')) browserName = 'Chrome'
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browserName = 'Safari'
    else if (ua.includes('Edg')) browserName = 'Edge'
    else if (ua.includes('Opera') || ua.includes('OPR')) browserName = 'Opera'

    // Detect OS
    if (ua.includes('Win')) osName = 'Windows'
    else if (ua.includes('Mac')) osName = 'macOS'
    else if (ua.includes('Linux')) osName = 'Linux'
    else if (ua.includes('Android')) osName = 'Android'
    else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) osName = 'iOS'

    return {
      deviceName: `${osName} - ${browserName}`,
      os: osName,
      browser: browserName,
      userAgent: ua,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      platform: navigator.platform
    }
  }

  // Log an action
  async logAction(action, details = {}) {
    try {
      const logEntry = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        action: action,
        details: details,
        device: this.deviceInfo.deviceName,
        deviceInfo: this.deviceInfo,
        sessionId: this.getSessionId()
      }

      const response = await fetch(`${API_URL}/api/tracking/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logEntry)
      })

      if (!response.ok) {
        throw new Error('Failed to log action')
      }

      const result = await response.json()
      console.log('📊 Tracking:', action, details, result)
    } catch (error) {
      console.error('❌ Tracking failed:', error)
    }
  }

  // Get or create session ID
  getSessionId() {
    let sessionId = sessionStorage.getItem('trackingSessionId')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('trackingSessionId', sessionId)
    }
    return sessionId
  }

  // Get all tracked data
  async getAllLogs() {
    try {
      const response = await fetch(`${API_URL}/api/tracking/logs`)
      if (!response.ok) {
        throw new Error('Failed to fetch logs')
      }
      return await response.json()
    } catch (error) {
      console.error('❌ Failed to get logs:', error)
      return []
    }
  }

  // Export tracking data to downloadable file
  async exportToFile() {
    const logs = await this.getAllLogs()
    const dataStr = JSON.stringify(logs, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `user_tracking_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Export to formatted text file
  async exportToTextFile() {
    const logs = await this.getAllLogs()
    let textContent = '=== USER ACTIVITY TRACKING LOG ===\n\n'
    
    logs.forEach((log, index) => {
      textContent += `--- Entry ${index + 1} ---\n`
      textContent += `Date: ${log.date}\n`
      textContent += `Action: ${log.action}\n`
      textContent += `Device: ${log.device}\n`
      textContent += `Session: ${log.sessionId}\n`
      if (Object.keys(log.details).length > 0) {
        textContent += `Details: ${JSON.stringify(log.details)}\n`
      }
      textContent += '\n'
    })

    const blob = new Blob([textContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `user_tracking_${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Get statistics
  async getStats() {
    try {
      const response = await fetch(`${API_URL}/api/tracking/stats`)
      if (!response.ok) {
        throw new Error('Failed to fetch stats')
      }
      return await response.json()
    } catch (error) {
      console.error('❌ Failed to get stats:', error)
      return {
        totalActions: 0,
        uniqueSessions: 0,
        devices: [],
        actionTypes: {}
      }
    }
  }

  // Clear all tracking data
  async clearLogs() {
    try {
      const response = await fetch(`${API_URL}/api/tracking/logs`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to clear logs')
      }
      return await response.json()
    } catch (error) {
      console.error('❌ Failed to clear logs:', error)
      return { success: false }
    }
  }

  // Get logs for current session
  async getCurrentSessionLogs() {
    const sessionId = this.getSessionId()
    const allLogs = await this.getAllLogs()
    return allLogs.filter(log => log.sessionId === sessionId)
  }
}

// Create singleton instance
const trackingService = new TrackingService()

export default trackingService
