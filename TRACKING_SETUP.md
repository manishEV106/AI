# Running the App with Tracking

The tracking system now uses a backend server to store data in a JSON file. This allows all devices to share the same tracking data.

## Development

Run both the frontend and backend together:

```bash
npm run dev:all
```

This starts:
- Frontend (Vite): http://localhost:5173
- Backend (Express): http://localhost:3001

Or run them separately:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## Production Deployment

For production, you need to:

1. **Deploy the backend server** somewhere (e.g., Vercel, Railway, Heroku)
2. **Update the API URL** in your environment:
   - Create `.env.production` file
   - Set `VITE_API_URL=https://your-backend-url.com`
3. **Build and deploy the frontend**

## How It Works

- All tracking data is stored in `tracking-data.json` on the server
- All devices accessing the app write to the same file
- Tracking persists across deployments and devices
- Data is shared between laptop, phone, and any other device

## API Endpoints

- `GET /api/tracking/logs` - Get all logs
- `POST /api/tracking/log` - Add a new log
- `DELETE /api/tracking/logs` - Clear all logs
- `GET /api/tracking/stats` - Get statistics
- `GET /api/health` - Health check

## Accessing from Phone

1. Start both servers: `npm run dev:all`
2. Find your computer's IP address (e.g., `192.168.1.100`)
3. Update `.env`: `VITE_API_URL=http://192.168.1.100:3001`
4. Access from phone: `http://192.168.1.100:5173`

Now both laptop and phone will write to the same tracking file!
