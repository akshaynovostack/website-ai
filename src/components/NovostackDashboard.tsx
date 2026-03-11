import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Bell, 
  Search, 
  PlusCircle,
  TrendingUp,
  Activity
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  isPositive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon, isPositive }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
        {icon}
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
  </div>
);

const NovostackDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Novostack</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[ 
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'analytics', icon: BarChart3, label: 'Analytics' },
            { id: 'team', icon: Users, label: 'Team Members' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-xs mb-1">Current Plan</p>
            <p className="text-white text-sm font-bold">Enterprise Pro</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center border border-indigo-200">
              <span className="text-xs font-bold text-indigo-700">JD</span>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
              <p className="text-slate-500 text-sm">Welcome back, here is what is happening today.</p>
            </div>
            <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-shadow shadow-sm active:scale-95">
              <PlusCircle size={18} />
              <span>Generate Report</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              title="Total Revenue" 
              value="$48,250.00" 
              trend="+12.5%" 
              isPositive={true} 
              icon={<TrendingUp size={20} />} 
            />
            <MetricCard 
              title="Active Users" 
              value="2,420" 
              trend="+18.2%" 
              isPositive={true} 
              icon={<Users size={20} />} 
            />
            <MetricCard 
              title="System Load" 
              value="32%" 
              trend="-4.1%" 
              isPositive={true} 
              icon={<Activity size={20} />} 
            />
            <MetricCard 
              title="Avg. Response" 
              value="142ms" 
              trend="+12ms" 
              isPositive={false} 
              icon={<BarChart3 size={20} />} 
            />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 min-h-[400px]">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Performance Analytics</h2>
              <div className="flex items-center justify-center h-full text-slate-400 border-2 border-dashed border-slate-100 rounded-lg">
                Chart visualization would be rendered here
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-slate-900 font-medium">Deployment successful</p>
                      <p className="text-xs text-slate-500">Production environment updated 2h ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NovostackDashboard;