import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../services/api';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking'); // 'connected', 'offline', 'checking'
  const location = useLocation();

  // Test backend connection on load
  useEffect(() => {
    let mounted = true;
    api.checkHealth()
      .then((res) => {
        if (mounted) {
          if (res?.status === 'ok') setBackendStatus('connected');
          else setBackendStatus('offline');
        }
      })
      .catch(() => {
        if (mounted) setBackendStatus('offline');
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'CV Templates', path: '/cv-templates' },
    { name: 'Portfolio Templates', path: '/portfolio-templates' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Career Tips', path: '/career-tips' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2">
      {/* Top Banner for Backend Status & Admin Quick Access */}
      <div className="flex items-center justify-between text-xs px-3 py-1.5 mb-2 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-slate-700">Team Workspace:</span>
          <span className="flex items-center space-x-1">
            <span
              className={`w-2 h-2 rounded-full ${
                backendStatus === 'connected'
                  ? 'bg-emerald-500 animate-pulse'
                  : backendStatus === 'offline'
                  ? 'bg-amber-500'
                  : 'bg-slate-400'
              }`}
            />
            <span className="text-[11px] text-slate-500 font-medium">
              API {backendStatus === 'connected' ? 'Connected (Port 5000)' : 'Offline / Standalone'}
            </span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/admin"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium transition"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admin Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Main Portify Navigation Container (Styled as per Image 2) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5 transition-all">
        {/* Top row: Logo + Hamburger */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              {/* Distinctive Portify App Document Icon */}
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M9 13v4" />
                  <path d="M15 13v4" />
                  <path d="M9 15h6" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-blue-600">
              Portify
            </span>
          </Link>

          {/* Right Hamburger Icon Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <div className="flex flex-col space-y-1.5 w-6 items-end">
                <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
                <span className="w-4 h-0.5 bg-slate-800 rounded-full"></span>
              </div>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links (Pill Style from Image 2) */}
        <div className="hidden md:flex flex-wrap items-center gap-1.5 mt-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-200 text-slate-900 font-semibold'
                    : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-3 border-t border-slate-100 space-y-1 animate-fadeIn">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3.5 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/admin"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 transition"
              >
                <Shield className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
            </div>
          </div>
        )}

        {/* Prominent Action Button (Matching "Design the Portify Homepage" in Image 2) */}
        <div className="mt-4">
          <Link
            to="/portfolio-templates"
            className="w-full flex items-center justify-center space-x-2 bg-black hover:bg-slate-900 active:bg-slate-800 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-150 shadow-sm hover:shadow"
          >
            <span>Design the Portify Homepage</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
