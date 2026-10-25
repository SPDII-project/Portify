import React, { useState, useEffect } from 'react';
import { Users, Shield, UserCheck, Trash2, Mail } from 'lucide-react';
import api from '../../services/api';

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.getUsers().then((res) => {
      if (mounted && res?.data) setUsers(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const toggleRole = (id) => {
    setUsers(
      users.map((u) => {
        if (u.id === id) {
          const newRole = u.role === 'admin' ? 'user' : 'admin';
          return { ...u, role: newRole };
        }
        return u;
      })
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manage Users</h1>
        <p className="text-xs text-slate-500 mt-0.5">Route: /admin/users — Accounts, permissions, and security roles</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200/60">
              <tr>
                <th className="px-5 py-3">User</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Joined</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-5 py-3 font-semibold text-slate-900 flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[11px]">
                      {user.name?.charAt(0) || 'U'}
                    </div>
                    <span>{user.name}</span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{user.email}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.role === 'admin'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{user.createdAt || 'Recent'}</td>
                  <td className="px-5 py-3 text-right space-x-2">
                    <button
                      onClick={() => toggleRole(user.id)}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-medium transition"
                    >
                      Toggle Admin
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                      title="Remove User"
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
