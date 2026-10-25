import React, { useState, useEffect } from 'react';
import { Briefcase, ExternalLink, Sparkles, Eye } from 'lucide-react';
import api from '../../services/api';

export default function PortfolioTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    let mounted = true;
    api.getPortfolioTemplates()
      .then((res) => {
        if (mounted && res?.data) {
          setTemplates(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const categories = ['All', 'Software Engineer', 'Design', 'Photography', 'Business'];

  const filtered = activeCategory === 'All'
    ? templates
    : templates.filter((t) => t.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Web Showcases
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Portfolio Templates
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Responsive, dynamic portfolio designs with clean code, sleek dark modes, and interactive project cards.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col group"
          >
            {/* Visual Header / Mockup */}
            <div className="h-44 bg-gradient-to-tr from-slate-900 to-indigo-950 p-4 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                  {item.category || 'Tech'}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                  {item.price === 0 ? 'FREE' : `$${item.price}`}
                </span>
              </div>

              {/* Minimal mockup illustration */}
              <div className="z-10 bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 shadow-lg space-y-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="h-1.5 w-1/2 bg-indigo-400/60 rounded" />
                <div className="h-1 w-full bg-slate-600 rounded" />
              </div>

              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors pointer-events-none" />
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <div className="flex items-center space-x-3 text-xs text-slate-500 mt-1.5">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.viewsCount || 2400} views</span>
                  </span>
                  {item.isFeatured && (
                    <span className="flex items-center space-x-1 text-amber-600 font-medium">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button className="text-xs font-semibold text-slate-700 hover:text-indigo-600 transition flex items-center space-x-1">
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm transition">
                  Customize
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
