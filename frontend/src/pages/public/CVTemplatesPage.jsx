import React, { useState, useEffect } from 'react';
import { FileText, Download, Star, Filter, Check } from 'lucide-react';
import api from '../../services/api';

export default function CVTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let mounted = true;
    api.getCVTemplates()
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

  const categories = ['All', 'Technology', 'Executive', 'Creative', 'Academic'];

  const filtered = filter === 'All'
    ? templates
    : templates.filter((t) => t.category?.toLowerCase() === filter.toLowerCase());

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Curated Resumes
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            CV & Resume Templates
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Engineered to pass ATS scans and impress top hiring managers. Choose a template to get started.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col"
          >
            {/* Visual Header / Mock Preview */}
            <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-200 p-4 flex flex-col justify-between border-b border-slate-100 relative group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-white/90 text-slate-700 shadow-sm">
                  {item.category || 'General'}
                </span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {item.price === 0 ? 'FREE' : `$${item.price}`}
                </span>
              </div>

              {/* Template thumbnail representation */}
              <div className="bg-white/90 rounded-lg p-3 shadow-inner space-y-1.5 opacity-90">
                <div className="h-2 w-1/3 bg-slate-400 rounded"></div>
                <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                <div className="h-1.5 w-4/5 bg-slate-200 rounded"></div>
                <div className="h-1.5 w-2/3 bg-slate-200 rounded"></div>
              </div>
            </div>

            {/* Template Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Downloaded by {item.downloadsCount || 100}+ job seekers
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition">
                  Preview
                </button>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition">
                  <Download className="w-3.5 h-3.5" />
                  <span>Use Template</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
