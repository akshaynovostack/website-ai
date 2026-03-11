import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MoreVertical, 
  Plus, 
  Search
} from 'lucide-react';

type TaskStatus = 'Todo' | 'In Progress' | 'Completed';

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: 'Low' | 'Medium' | 'High';
  assignee: string;
  dueDate: string;
}

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Refactor Authentication Middleware', status: 'In Progress', priority: 'High', assignee: 'Alex Chen', dueDate: '2023-11-24' },
  { id: '2', title: 'Update API Documentation', status: 'Todo', priority: 'Medium', assignee: 'Sarah Miller', dueDate: '2023-11-26' },
  { id: '3', title: 'Fix CSS Grid on Dashboard', status: 'Completed', priority: 'Low', assignee: 'Alex Chen', dueDate: '2023-11-20' },
  { id: '4', title: 'Implement Stripe Webhooks', status: 'Todo', priority: 'High', assignee: 'Jordan Smith', dueDate: '2023-11-28' },
];

const ProjectDashboard: React.FC = () => {
  const [tasks] = useState<Task[]>(INITIAL_TASKS);

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case 'Completed': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'In Progress': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'Todo': return <AlertCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Low': return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
              Engineering Sprint 42
            </h1>
            <p className="text-slate-500 text-sm mt-1">Manage your team's tasks and project progress.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all w-64"
              />
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" />
              New Task
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[ 
            { label: 'Total Tasks', count: tasks.length, color: 'border-l-indigo-500' },
            { label: 'In Progress', count: tasks.filter(t => t.status === 'In Progress').length, color: 'border-l-blue-500' },
            { label: 'Completed', count: tasks.filter(t => t.status === 'Completed').length, color: 'border-l-emerald-500' }
          ].map((stat, i) => (
            <div key={i} className={`bg-white p-5 rounded-xl border border-slate-200 border-l-4 ${stat.color} shadow-sm transition-transform hover:scale-[1.02]`}>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold mt-1">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Task List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-bottom border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Task Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Assignee</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-700">{task.title}</span>
                    <p className="text-xs text-slate-400 mt-0.5">Due: {task.dueDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(task.status)}
                      <span className="text-sm text-slate-600">{task.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700 border border-indigo-200">
                        {task.assignee.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-slate-600">{task.assignee}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100">
                      <MoreVertical className="w-4 h-4" />
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
};

export default ProjectDashboard;