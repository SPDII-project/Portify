import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, FileText, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';

export default function ManageCVTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Technology');
  const [price, setPrice] = useState(19);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    api.getCVTemplates().then((res) => {
      if (mounted && res?.data) setTemplates(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newT = {
      id: Date.now().toString(),
      title,
      category,
      price: Number(price),
      downloadsCount: 0,
    };
    setTemplates([newT, ...templates]);
    setTitle('');
    setMessage('CV Template added successfully (team state).');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id) => {
    setTemplates(templates.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manage CV Templates</h1>
          <p className="text-xs text-slate-500 mt-0.5">Route: /admin/templates — Create, edit, and organize resume designs</p>
        </div>
      </div>

      {message && (
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Add new template quick form */}
      <form onSubmit={handleAdd} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Add CV Template</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Template Title (e.g. Minimalist Tech Resume)"
            required
            className="sm:col-span-2 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option value="Technology">Technology</option>
            <option value="Executive">Executive</option>
            <option value="Creative">Creative</option>
            <option value="Academic">Academic</option>
          </select>
          <div className="flex space-x-2">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price ($)"
              className="w-24 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>

      {/* Templates Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">Template</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Downloads</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {templates.map((tpl) => (
                <tr key={tpl.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-medium text-slate-900 flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{tpl.title}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">
                      {tpl.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-semibold text-slate-900">
                    {tpl.price === 0 ? 'Free' : `$${tpl.price}`}
                  </td>
                  <td className="px-5 py-3 text-slate-500">{tpl.downloadsCount || 0}</td>
                  <td className="px-5 py-3 text-right space-x-2">
                    <button
                      onClick={() => handleDelete(tpl.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                      title="Delete Template"
                    >
                      <Trash2 className="w-4 h-4" />
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
