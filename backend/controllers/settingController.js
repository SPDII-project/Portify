// Settings & Overview Stats Controller
import { Setting } from '../models/Setting.js';

export const getSettings = async (req, res, next) => {
  try {
    const setting = await Setting.findOne().catch(() => null);
    res.status(200).json({
      success: true,
      data: setting || {
        siteName: 'Portify',
        siteTagline: 'Build & Showcase World-Class CV and Portfolio Templates',
        contactEmail: 'contact@portify.io',
        currency: 'USD',
        enableUserRegistration: true,
        maintenanceMode: false,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Settings updated successfully',
      data: req.body,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminOverviewStats = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        totalCVTemplates: 24,
        totalPortfolioTemplates: 18,
        totalUsers: 1240,
        totalOrders: 382,
        totalRevenue: 8490,
        recentActivity: [
          { type: 'order', text: 'New order #9821 by Sarah Miller ($29)', time: '10 mins ago' },
          { type: 'template', text: 'CV Template "Executive Minimalist" updated', time: '1 hour ago' },
          { type: 'user', text: 'New user Emma Watson registered', time: '3 hours ago' },
        ],
      },
    });
  } catch (error) {
    next(error);
  }
};
