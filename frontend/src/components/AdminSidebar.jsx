import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  CreditCard,
  Layers,
  TicketPercent,
  Settings,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

export default function AdminSidebar({ isMobileOpen, onCloseMobile }) {
  const adminNavItems = [
    { name: 'Admin Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Manage CV Templates', path: '/admin/templates', icon: FileText },
    { name: 'Manage Portfolio Templates', path: '/admin/portfolio-templates', icon: Briefcase },
    { name: 'Manage Users', path: '/admin/users', icon: Users },
    { name: 'Manage Orders & Payments', path: '/admin/orders', icon: CreditCard },
    { name: 'Manage Categories', path: '/admin/categories', icon: Layers },
    { name: 'Manage Coupons', path: '/admin/coupons', icon: TicketPercent },
    { name: 'Website Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 text-slate-200 border-r border-slate-800 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <Link to="/admin" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white tracking-tight flex items-center space-x-1">
                <span>Portify</span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Business Control Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <p className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Admin Dashboard
          </p>
          {adminNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer link to public site */}
        <div className="p-3 border-t border-slate-800">
          <Link
            to="/"
            className="flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Public Site</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
