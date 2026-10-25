import React, { useState, useEffect } from 'react';
import { TicketPercent, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';

export default function ManageCouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(20);
  const [validUntil, setValidUntil] = useState('2025-12-31');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    api.getCoupons().then((res) => {
      if (mounted && res?.data) setCoupons(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    const newCoupon = {
      id: `cpn_${Date.now()}`,
      code: code.toUpperCase().trim(),
      discountPercentage: Number(discount),
      validUntil,
      timesUsed: 0,
      isActive: true,
    };
    setCoupons([...coupons, newCoupon]);
    setCode('');
    setMessage(`Coupon ${newCoupon.code} created.`);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id) => {
    setCoupons(coupons.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manage Coupons</h1>
        <p className="text-xs text-slate-500 mt-0.5">Route: /admin/coupons — Promotional discount codes</p>
      </div>

      {message && (
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Add Coupon Form */}
      <form onSubmit={handleAdd} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Create New Coupon Code</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="COUPONCODE (e.g. PORTIFY50)"
            required
            className="px-3 py-2 text-xs uppercase font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount %"
            min="1"
            max="100"
            required
            className="px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
          <input
            type="date"
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value)}
            required
            className="px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Coupon</span>
          </button>
        </div>
      </form>

      {/* Coupons Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">Coupon Code</th>
                <th className="px-5 py-3">Discount</th>
                <th className="px-5 py-3">Times Used</th>
                <th className="px-5 py-3">Valid Until</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {coupons.map((cpn) => (
                <tr key={cpn.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-mono font-bold text-blue-600 flex items-center space-x-2">
                    <TicketPercent className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{cpn.code}</span>
                  </td>
                  <td className="px-5 py-3 font-bold text-slate-900">{cpn.discountPercentage}% OFF</td>
                  <td className="px-5 py-3 text-slate-500">{cpn.timesUsed || 0} times</td>
                  <td className="px-5 py-3 text-slate-500">{cpn.validUntil}</td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => handleDelete(cpn.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                      title="Delete Coupon"
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
