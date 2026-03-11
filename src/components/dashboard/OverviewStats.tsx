import React from 'react';
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, DollarSign } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  description: string;
  trend: 'up' | 'down';
  trendValue: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    label: 'Total Revenue',
    value: '$45,231.89',
    description: 'vs last month',
    trend: 'up',
    trendValue: '20.1%',
    icon: DollarSign,
  },
  {
    label: 'Subscriptions',
    value: '+2,350',
    description: 'vs last month',
    trend: 'up',
    trendValue: '180.1%',
    icon: Users,
  },
  {
    label: 'Sales',
    value: '+12,234',
    description: 'vs last month',
    trend: 'down',
    trendValue: '4.3%',
    icon: CreditCard,
  },
  {
    label: 'Active Now',
    value: '+573',
    description: 'since last hour',
    trend: 'up',
    trendValue: '201',
    icon: Activity,
  },
];

export const OverviewStats: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
            <stat.icon className="h-4 w-4 text-slate-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              {stat.value}
            </div>
            <div className="flex items-center pt-1">
              <span
                className={`flex items-center text-xs font-medium ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                )}
                {stat.trendValue}
              </span>
              <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};