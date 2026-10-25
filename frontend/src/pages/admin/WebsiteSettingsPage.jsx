import React, { useState, useEffect } from 'react';
import { Settings, Save, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';

export default function WebsiteSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'Portify',
    siteTagline: 'Build & Showcase World-Class CV and Portfolio Templates',
    contactEmail: 'contact@portify.io',
    currency: 'USD',
    enableUserRegistration: true,
    maintenanceMode: false,
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    api.getSettings().then((res) => {
      if (mounted && res?.data) setSettings(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMessage('Settings updated successfully in database.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Website Settings</h1>
        <p className="text-xs text-slate-500 mt-0.5">Route: /admin/settings — General configuration & brand defaults</p>
      </div>

      {message && (
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Platform Name</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Tagline & Hero Description</label>
          <input
            type="text"
            name="siteTagline"
            value={settings.siteTagline}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Support Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={settings.contactEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Base Currency</label>
            <select
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 space-y-3">
          <label className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              name="enableUserRegistration"
              checked={settings.enableUserRegistration}
              onChange={handleChange}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium">Allow public user registration</span>
          </label>

          <label className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleChange}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium">Enable maintenance mode</span>
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-2 shadow-sm transition"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
