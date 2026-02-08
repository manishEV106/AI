import { useState, useEffect } from 'react'
import trackingService from './trackingService'
import './TrackingDashboard.css'

function TrackingDashboard({ onBack }) {
  const [logs, setLogs] = useState([])
  const [stats, setStats] = useState({})
  const [filter, setFilter] = useState('all') // all, current-session
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const allLogs = trackingService.getAllLogs()
    setLogs(allLogs)
    setStats(trackingService.getStats())
  }

  const getFilteredLogs = () => {
    let filtered = filter === 'current-session' 
      ? trackingService.getCurrentSessionLogs() 
      : logs

    if (searchTerm) {
      filtered = filtered.filter(log => 
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
        JSON.stringify(log.details).toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered.reverse() // Show newest first
  }

  const handleExportJSON = () => {
    trackingService.exportToFile()
  }

  const handleExportText = () => {
    trackingService.exportToTextFile()
  }

  const handleClearLogs = () => {
    if (window.confirm('Are you sure you want to clear all tracking logs? This cannot be undone.')) {
      trackingService.clearLogs()
      loadData()
    }
  }

  const filteredLogs = getFilteredLogs()

  return (
    <div className="tracking-dashboard">
      <div className="dashboard-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h1>📊 Activity Tracking Dashboard</h1>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.totalActions || 0}</div>
          <div className="stat-label">Total Actions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.uniqueSessions || 0}</div>
          <div className="stat-label">Sessions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.devices?.length || 0}</div>
          <div className="stat-label">Devices</div>
        </div>
      </div>

      <div className="action-types">
        <h3>Action Types</h3>
        <div className="action-list">
          {Object.entries(stats.actionTypes || {}).map(([action, count]) => (
            <div key={action} className="action-item">
              <span className="action-name">{action}</span>
              <span className="action-count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="controls-section">
        <div className="filters">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All Logs
          </button>
          <button 
            className={filter === 'current-session' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('current-session')}
          >
            Current Session
          </button>
        </div>

        <input 
          type="text"
          className="search-input"
          placeholder="Search logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="export-buttons">
          <button className="export-btn" onClick={handleExportJSON}>
            📥 Export JSON
          </button>
          <button className="export-btn" onClick={handleExportText}>
            📄 Export TXT
          </button>
          <button className="clear-btn" onClick={handleClearLogs}>
            🗑️ Clear Logs
          </button>
        </div>
      </div>

      <div className="logs-section">
        <h3>Activity Logs ({filteredLogs.length})</h3>
        <div className="logs-container">
          {filteredLogs.length === 0 ? (
            <div className="no-logs">No tracking data found</div>
          ) : (
            filteredLogs.map((log, index) => (
              <div key={index} className="log-entry">
                <div className="log-header">
                  <span className="log-action">{log.action}</span>
                  <span className="log-time">{new Date(log.timestamp).toLocaleString()}</span>
                </div>
                <div className="log-details">
                  <div className="log-info">
                    <span className="log-label">Device:</span> {log.device}
                  </div>
                  {Object.keys(log.details).length > 0 && (
                    <div className="log-info">
                      <span className="log-label">Details:</span> {JSON.stringify(log.details)}
                    </div>
                  )}
                  <div className="log-info">
                    <span className="log-label">Session:</span> {log.sessionId}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TrackingDashboard
