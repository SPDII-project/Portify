import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  FileText,
  Briefcase,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Code2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portify Portfolio & CV Builder</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Craft World-Class <span className="text-blue-600">Portfolios</span> & CVs Effortlessly
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pick professionally engineered templates, customize your content, and deploy a stunning web showcase in minutes. Built for developers, designers, and ambitious creators.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/portfolio-templates"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full text-sm transition shadow-sm hover:shadow"
            >
              <span>Explore Portfolio Templates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/cv-templates"
              className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-5 py-3 rounded-full text-sm transition"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Browse CVs</span>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Quick Team Routing Matrix */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Project Routes & Team Modules</h2>
            <p className="text-xs text-slate-500">
              Direct links to test all pages and verify routing across your workspace.
            </p>
          </div>
          <span className="text-xs bg-slate-200/80 text-slate-700 px-2.5 py-1 rounded-full font-medium">
            React Router v6 + Vite
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/cv-templates"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">CV Templates</h3>
            <p className="text-xs text-slate-500 mt-1">Route: /cv-templates</p>
            <span className="text-xs text-blue-600 font-medium mt-3 inline-flex items-center space-x-1">
              <span>View collection</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/portfolio-templates"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Portfolio Templates</h3>
            <p className="text-xs text-slate-500 mt-1">Route: /portfolio-templates</p>
            <span className="text-xs text-indigo-600 font-medium mt-3 inline-flex items-center space-x-1">
              <span>View collection</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/pricing"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Pricing Plans</h3>
            <p className="text-xs text-slate-500 mt-1">Route: /pricing</p>
            <span className="text-xs text-emerald-600 font-medium mt-3 inline-flex items-center space-x-1">
              <span>Check tiers</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/career-tips"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Career Tips</h3>
            <p className="text-xs text-slate-500 mt-1">Route: /career-tips</p>
            <span className="text-xs text-amber-600 font-medium mt-3 inline-flex items-center space-x-1">
              <span>Read guides</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/login"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Login & Auth</h3>
            <p className="text-xs text-slate-500 mt-1">Route: /login</p>
            <span className="text-xs text-purple-600 font-medium mt-3 inline-flex items-center space-x-1">
              <span>Sign in</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/admin"
            className="group p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Admin Dashboard</h3>
            <p className="text-xs text-slate-400 mt-1">Route: /admin</p>
            <span className="text-xs text-blue-400 font-medium mt-3 inline-flex items-center space-x-1">
              <span>Manage templates & business</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
