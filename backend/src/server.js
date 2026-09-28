import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { candidatesRouter } from './routes/candidates.js';
import { noticesRouter } from './routes/notices.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Middleware
app.use(cors({
  origin: CORS_ORIGIN === '*' ? true : CORS_ORIGIN.split(',').map(o => o.trim()),
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Karnataka Examinations Authority (KEA) API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/candidates', candidatesRouter);
app.use('/api/notices', noticesRouter);

// Root fallback
app.get('/', (req, res) => {
  res.json({
    message: 'Karnataka Examinations Authority (KEA) API Service is active',
    endpoints: {
      health: '/api/health',
      candidates: '/api/candidates',
      verify: 'POST /api/candidates/verify',
      notices: '/api/notices',
      flash: '/api/notices/flash'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 KEA Backend Server running on http://localhost:${PORT}`);
  console.log(`   Healthcheck: http://localhost:${PORT}/api/health`);
});
