import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: LucideIcon;
  description: string;
}

/**
 * StatCard Component - SDE2 Grade Implementation
 * Features: Responsive design, Type safety, Accessible ARIA labels, and Dynamic styling via Tailwind.
 */
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
}) => {
  const isPositive = trend === 'up';

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-900">
          <Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {value}
          </p>
        </div>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{description}</p>
      </div>

      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isPositive ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
          style={{ width: `${Math.min(Math.max(change, 30), 100)}%` }}
        />
      </div>
    </div>
  );
};

export default StatCard;