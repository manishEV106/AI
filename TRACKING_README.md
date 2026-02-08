# User Activity Tracking System

This application includes a comprehensive tracking system that records all user interactions and stores them locally.

## Features

### 📊 What Gets Tracked

The system automatically tracks:
- **App Initialization** - When the app loads
- **User Login** - With user type (bugdieee266 or merijaanbugdiee)
- **User Logout** - When user locks the heart
- **Navigation** - All page transitions (Memories, Love Story, Heart, Valentine Steps, Tracking Dashboard)
- **Love Story Book** - Page turns with chapter information
- **Memories** - Page views with user type and memory set
- **Valentine Steps** - Day navigation
- **Heart Page** - Page visits

### 🔍 Device Information Captured

Each action is logged with:
- **Device Name** - OS and Browser (e.g., "macOS - Chrome")
- **Operating System** - Windows, macOS, Linux, Android, iOS
- **Browser** - Chrome, Safari, Firefox, Edge, Opera
- **Screen Resolution** - e.g., "1920x1080"
- **Language** - Browser language setting
- **Platform** - Hardware platform
- **User Agent** - Full browser user agent string
- **Timestamp** - ISO format timestamp
- **Session ID** - Unique identifier for each browsing session

### 📥 Export Options

You can export tracking data in two formats:

1. **JSON Format** - Structured data with all details
   - File name: `user_tracking_YYYY-MM-DD.json`
   - Contains complete log entries with nested device info

2. **Text Format** - Human-readable format
   - File name: `user_tracking_YYYY-MM-DD.txt`
   - Formatted with headers and sections
   - Easy to read and share

### 📈 Statistics Dashboard

The tracking dashboard shows:
- **Total Actions** - Count of all recorded actions
- **Unique Sessions** - Number of different browsing sessions
- **Devices Used** - List of all devices that accessed the app
- **Action Types** - Breakdown of actions by category with counts

### 🔧 How to Use

1. **Access the Dashboard**
   - Click the "📊 Activity Tracking" button on the Welcome page

2. **View Logs**
   - See all actions in reverse chronological order (newest first)
   - Filter by "All Logs" or "Current Session"
   - Search for specific actions, devices, or details

3. **Export Data**
   - Click "📥 Export JSON" for structured data
   - Click "📄 Export TXT" for readable text format
   - Files download to your default downloads folder

4. **Clear Logs**
   - Click "🗑️ Clear Logs" to delete all tracking data
   - Confirmation required before deletion

### 💾 Storage

- All tracking data is stored in browser **localStorage**
- Data persists across browser sessions
- Data is cleared when:
  - App version is updated (deployment)
  - User clears browser data
  - User clicks "Clear Logs" button

### 🔒 Privacy

- All data is stored **locally** on your device
- No data is sent to any server
- Data remains private and accessible only to you
- You can export or delete data at any time

### 📝 Technical Details

#### Storage Key
- Data is stored under the key: `userActionTracker`

#### Session Tracking
- Each browser session gets a unique session ID
- Format: `session_[timestamp]_[random]`
- Sessions are tracked in sessionStorage

#### Log Entry Structure
```json
{
  "timestamp": "2026-02-08T10:30:00.000Z",
  "date": "2/8/2026, 10:30:00 AM",
  "action": "USER_LOGIN",
  "details": {
    "userType": "bugdieee266"
  },
  "device": "macOS - Chrome",
  "deviceInfo": {
    "deviceName": "macOS - Chrome",
    "os": "macOS",
    "browser": "Chrome",
    "userAgent": "...",
    "screenResolution": "1920x1080",
    "language": "en-US",
    "platform": "MacIntel"
  },
  "sessionId": "session_1707387000_abc123xyz"
}
```

### 🎯 Use Cases

1. **Personal Analytics** - See how you interact with the app
2. **Device Tracking** - Know which devices you've used
3. **Session History** - Track when and how long you used the app
4. **Export for Records** - Save your interaction history
5. **Privacy Control** - Full control over your data

## Development

The tracking system consists of three main files:

1. **trackingService.js** - Core tracking logic and storage
2. **TrackingDashboard.jsx** - UI component for viewing/exporting data
3. **TrackingDashboard.css** - Styling for the dashboard

### Adding New Tracking Events

To track a new action:

```javascript
import trackingService from './trackingService'

// Log a simple action
trackingService.logAction('ACTION_NAME')

// Log with additional details
trackingService.logAction('ACTION_NAME', { 
  detail1: 'value1',
  detail2: 'value2'
})
```

## Support

For questions or issues with the tracking system, check the browser console for debug logs. Each tracked action is also logged to the console with the 📊 emoji prefix.
