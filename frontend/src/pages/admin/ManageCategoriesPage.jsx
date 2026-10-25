import React, { useState, useEffect } from 'react';
import { Layers, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';

export default function ManageCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('both');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    api.getCategories().then((res) => {
      if (mounted && res?.data) setCategories(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newCat = {
      id: `cat_${Date.now()}`,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      type,
      templateCount: 0,
    };
    setCategories([...categories, newCat]);
    setName('');
    setMessage('Category added successfully.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manage Categories</h1>
        <p className="text-xs text-slate-500 mt-0.5">Route: /admin/categories — Template taxonomies and filters</p>
      </div>

      {message && (
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Add Form */}
      <form onSubmit={handleAdd} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Add New Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name (e.g. Cybersecurity & Cloud)"
            required
            className="sm:col-span-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option value="both">Both CV & Portfolio</option>
            <option value="cv">CV Only</option>
            <option value="portfolio">Portfolio Only</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Category</span>
          </button>
        </div>
      </form>

      {/* Categories Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">Category Name</th>
                <th className="px-5 py-3">Slug</th>
                <th className="px-5 py-3">Applies To</th>
                <th className="px-5 py-3">Templates</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-semibold text-slate-900 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{cat.name}</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-slate-500">{cat.slug}</td>
                  <td className="px-5 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium text-[11px] uppercase">
                      {cat.type}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{cat.templateCount || 0}</td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                      title="Delete Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
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
