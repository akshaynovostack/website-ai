import React, { useState } from 'react';
import { LayoutGrid, Users, Settings, Bell, Search, LogOut } from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
  email: string;
}

const UserDashboard: React.FC = () => {
  const [users] = useState<UserData[]>([
    { id: '1', name: 'Alex Rivera', role: 'SDE2', status: 'Active', email: 'alex@novostack.com' },
    { id: '2', name: 'Sarah Chen', role: 'Lead Designer', status: 'Active', email: 'sarah@novostack.com' },
    { id: '3', name: 'James Wilson', role: 'Product Manager', status: 'Inactive', email: 'james@novostack.com' },
  ]);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">Novostack</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[ 
            { icon: <LayoutGrid size={20} />, label: 'Dashboard' },
            { icon: <Users size={20} />, label: 'Team' },
            { icon: <Settings size={20} />, label: 'Settings' }
          ].map((item) => (
            <button key={item.label} className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="text-slate-500 group-hover:text-indigo-500">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="flex items-center space-x-3 w-full p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Bell size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Team Overview</h2>
            <p className="text-slate-500">Manage your engineering squad and permissions.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold">{user.name}</span>
                        <span className="text-xs text-slate-500">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{user.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;