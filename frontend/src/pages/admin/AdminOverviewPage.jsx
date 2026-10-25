import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Briefcase,
  Users,
  CreditCard,
  Layers,
  TicketPercent,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import api from '../../services/api';

export default function AdminOverviewPage() {
  const [stats, setStats] = useState({
    totalCVTemplates: 24,
    totalPortfolioTemplates: 18,
    totalUsers: 1240,
    totalOrders: 382,
    totalRevenue: 8490,
  });

  useEffect(() => {
    let mounted = true;
    api.getAdminStats()
      .then((res) => {
        if (mounted && res?.data) {
          setStats(res.data);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, []);

  const statCards = [
    { label: 'CV Templates', value: stats.totalCVTemplates, icon: FileText, route: '/admin/templates', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Portfolio Templates', value: stats.totalPortfolioTemplates, icon: Briefcase, route: '/admin/portfolio-templates', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Registered Users', value: stats.totalUsers, icon: Users, route: '/admin/users', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Total Orders', value: stats.totalOrders, icon: CreditCard, route: '/admin/orders', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: TrendingUp, route: '/admin/orders', color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-6">
      {/* Title & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Admin Overview</h1>
          <p className="text-xs text-slate-500 mt-0.5">Route: /admin — Business metrics & quick management</p>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            to="/admin/templates"
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition inline-flex items-center space-x-1.5"
          >
            <span>+ Add Template</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              to={card.route}
              className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-xl ${card.bg} ${card.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              </div>
              <div className="mt-3">
                <p className="text-xs text-slate-500">{card.label}</p>
                <p className="text-xl font-bold text-slate-900 mt-0.5">{card.value}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Admin Routing Hub (Image 1 mapping table) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">4. Admin Dashboard Routes Directory</h2>
            <p className="text-xs text-slate-500 mt-0.5">Mapped according to project specifications</p>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
            8 Routes Active
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">Page Name</th>
                <th className="px-5 py-3">Route Path</th>
                <th className="px-5 py-3">Backend Controller</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                { name: 'Admin Overview', route: '/admin', controller: 'settingController.js' },
                { name: 'Manage CV Templates', route: '/admin/templates', controller: 'cvTemplateController.js' },
                { name: 'Manage Portfolio Templates', route: '/admin/portfolio-templates', controller: 'portfolioTemplateController.js' },
                { name: 'Manage Users', route: '/admin/users', controller: 'userController.js' },
                { name: 'Manage Orders & Payments', route: '/admin/orders', controller: 'orderController.js' },
                { name: 'Manage Categories', route: '/admin/categories', controller: 'categoryController.js' },
                { name: 'Manage Coupons', route: '/admin/coupons', controller: 'couponController.js' },
                { name: 'Website Settings', route: '/admin/settings', controller: 'settingController.js' },
              ].map((row) => (
                <tr key={row.route} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-medium text-slate-900">{row.name}</td>
                  <td className="px-5 py-3 font-mono text-blue-600">{row.route}</td>
                  <td className="px-5 py-3 font-mono text-slate-500">{row.controller}</td>
                  <td className="px-5 py-3 text-right">
                    <Link
                      to={row.route}
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      <span>Open Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
