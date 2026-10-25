import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import CVTemplatesPage from '../pages/public/CVTemplatesPage';
import PortfolioTemplatesPage from '../pages/public/PortfolioTemplatesPage';
import PricingPage from '../pages/public/PricingPage';
import CareerTipsPage from '../pages/public/CareerTipsPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';

// Admin Pages
import AdminOverviewPage from '../pages/admin/AdminOverviewPage';
import ManageCVTemplatesPage from '../pages/admin/ManageCVTemplatesPage';
import ManagePortfolioTemplatesPage from '../pages/admin/ManagePortfolioTemplatesPage';
import ManageUsersPage from '../pages/admin/ManageUsersPage';
import ManageOrdersPage from '../pages/admin/ManageOrdersPage';
import ManageCategoriesPage from '../pages/admin/ManageCategoriesPage';
import ManageCouponsPage from '../pages/admin/ManageCouponsPage';
import WebsiteSettingsPage from '../pages/admin/WebsiteSettingsPage';

// 404 Page
function NotFoundPage() {
  return (
    <div className="py-16 text-center space-y-4">
      <span className="text-4xl font-extrabold text-blue-600">404</span>
      <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
      <p className="text-xs text-slate-500 max-w-sm mx-auto">
        The requested URL was not found on Portify. Use the navigation above or click below.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages with Portify Header & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-templates" element={<CVTemplatesPage />} />
        <Route path="/portfolio-templates" element={<PortfolioTemplatesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/career-tips" element={<CareerTipsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Admin Dashboard Pages with Admin Sidebar */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverviewPage />} />
        <Route path="templates" element={<ManageCVTemplatesPage />} />
        <Route path="portfolio-templates" element={<ManagePortfolioTemplatesPage />} />
        <Route path="users" element={<ManageUsersPage />} />
        <Route path="orders" element={<ManageOrdersPage />} />
        <Route path="categories" element={<ManageCategoriesPage />} />
        <Route path="coupons" element={<ManageCouponsPage />} />
        <Route path="settings" element={<WebsiteSettingsPage />} />
      </Route>

      {/* Fallback 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
