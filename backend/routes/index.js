import express from 'express';
import authRoutes from './authRoutes.js';
import cvTemplateRoutes from './cvTemplateRoutes.js';
import portfolioTemplateRoutes from './portfolioTemplateRoutes.js';
import userRoutes from './userRoutes.js';
import orderRoutes from './orderRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import couponRoutes from './couponRoutes.js';
import settingRoutes from './settingRoutes.js';

const router = express.Router();

// Centralized API Route Registration for Portify Team
router.use('/auth', authRoutes);
router.use('/cv-templates', cvTemplateRoutes);
router.use('/portfolio-templates', portfolioTemplateRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/categories', categoryRoutes);
router.use('/coupons', couponRoutes);
router.use('/settings', settingRoutes);

// Health & System Info Route
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Portify Backend API',
    timestamp: new Date().toISOString(),
    routesAvailable: [
      '/api/auth',
      '/api/cv-templates',
      '/api/portfolio-templates',
      '/api/users',
      '/api/orders',
      '/api/categories',
      '/api/coupons',
      '/api/settings',
    ],
  });
});

export default router;
