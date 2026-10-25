import React, { useState, useEffect } from 'react';
import { CreditCard, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import api from '../../services/api';

export default function ManageOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.getOrders().then((res) => {
      if (mounted && res?.data) setOrders(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manage Orders & Payments</h1>
        <p className="text-xs text-slate-500 mt-0.5">Route: /admin/orders — Sales, transactions, and payment statuses</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Customer Email</th>
                <th className="px-5 py-3">Purchased Item</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-mono font-bold text-slate-900">{order.id}</td>
                  <td className="px-5 py-3 text-slate-600">{order.customerEmail}</td>
                  <td className="px-5 py-3 font-medium text-slate-900">{order.item}</td>
                  <td className="px-5 py-3 font-bold text-slate-900">${order.amount}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {order.status === 'completed' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-amber-600" />
                      )}
                      <span>{order.status}</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right text-slate-400">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
