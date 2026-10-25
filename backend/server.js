import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas Cloud
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Welcome & Documentation Route
app.get('/', (req, res) => {
  res.json({
    name: 'Portify API Server',
    description: 'REST API for Portify CV & Portfolio Template Builder',
    version: '1.0.0',
    documentation: '/api/health',
    endpoints: {
      auth: '/api/auth',
      cvTemplates: '/api/cv-templates',
      portfolioTemplates: '/api/portfolio-templates',
      users: '/api/users',
      orders: '/api/orders',
      categories: '/api/categories',
      coupons: '/api/coupons',
      settings: '/api/settings',
    },
  });
});

// Mount Centralized API Routes
app.use('/api', apiRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Portify Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api`);
});
