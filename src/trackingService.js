// Tracking Service - Records user actions with device information

class TrackingService {
  constructor() {
    this.storageKey = 'userActionTracker'
    this.deviceInfo = this.getDeviceInfo()
    this.initializeTracking()
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

  // Initialize tracking storage
  initializeTracking() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]))
    }
  }

  // Log an action
  logAction(action, details = {}) {
    try {
      const trackingData = JSON.parse(localStorage.getItem(this.storageKey) || '[]')
      
      const logEntry = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        action: action,
        details: details,
        device: this.deviceInfo.deviceName,
        deviceInfo: this.deviceInfo,
        sessionId: this.getSessionId()
      }

      trackingData.push(logEntry)
      localStorage.setItem(this.storageKey, JSON.stringify(trackingData))

      // Also log to console for development
      console.log('📊 Tracking:', action, details, 'Total logs:', trackingData.length)
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
  getAllLogs() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]')
  }

  // Export tracking data to downloadable file
  exportToFile() {
    const logs = this.getAllLogs()
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
  exportToTextFile() {
    const logs = this.getAllLogs()
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
  getStats() {
    const logs = this.getAllLogs()
    const stats = {
      totalActions: logs.length,
      uniqueSessions: [...new Set(logs.map(l => l.sessionId))].length,
      devices: [...new Set(logs.map(l => l.device))],
      actionTypes: {}
    }

    logs.forEach(log => {
      stats.actionTypes[log.action] = (stats.actionTypes[log.action] || 0) + 1
    })

    return stats
  }

  // Clear all tracking data
  clearLogs() {
    localStorage.setItem(this.storageKey, JSON.stringify([]))
  }

  // Get logs for current session
  getCurrentSessionLogs() {
    const sessionId = this.getSessionId()
    return this.getAllLogs().filter(log => log.sessionId === sessionId)
  }
}

// Create singleton instance
const trackingService = new TrackingService()

export default trackingService
