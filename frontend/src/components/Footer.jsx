import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4 py-8 mt-auto">
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-blue-600">Portify</span>
          <span>© {new Date().getFullYear()} — Built for team collaboration.</span>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-slate-900 transition">Home</Link>
          <Link to="/cv-templates" className="hover:text-slate-900 transition">CV Templates</Link>
          <Link to="/portfolio-templates" className="hover:text-slate-900 transition">Portfolio Templates</Link>
          <Link to="/pricing" className="hover:text-slate-900 transition">Pricing</Link>
          <Link to="/admin" className="text-blue-600 font-medium hover:underline">Admin Panel</Link>
        </div>
      </div>
    </footer>
  );
}
