import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import { Menu, Bell, ExternalLink, Shield } from 'lucide-react';

export default function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <AdminSidebar
        isMobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600 hidden sm:block" />
              <span className="font-semibold text-slate-800 text-sm sm:text-base">
                Portify Admin Area
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 transition"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center space-x-2 border-l border-slate-200 pl-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-semibold text-xs flex items-center justify-center">
                AD
              </div>
              <span className="text-xs font-semibold text-slate-700 hidden md:inline">
                Admin Team
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
