import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: LucideIcon;
  helperText?: string;
}

/**
 * @description A reusable dashboard metric card component built with Next.js, Tailwind CSS, and TypeScript.
 * Features responsive layout, conditional trend styling, and Lucide icon support.
 */
const DashboardMetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  trend,
  icon: Icon,
  helperText,
}) => {
  const isPositive = trend === 'up';

  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-semibold ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} strokeWidth={3} />
          ) : (
            <ArrowDownRight size={14} strokeWidth={3} />
          )}
          {change}%
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {value}
        </h3>
        {helperText && (
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardMetricCard;