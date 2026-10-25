import express from 'express';
import { getSettings, updateSettings, getAdminOverviewStats } from '../controllers/settingController.js';

const router = express.Router();

// Routes for /api/settings
router.get('/', getSettings);
router.put('/', updateSettings);
router.get('/overview-stats', getAdminOverviewStats);

export default router;
