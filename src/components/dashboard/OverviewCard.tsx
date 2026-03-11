import React from 'react';
import { LucideIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface OverviewCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

/**
 * OverviewCard Component - SDE2 Standard
 * Reusable metric card for dashboard analytics with support for accessibility and dynamic styling.
 */
export const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <Icon size={24} aria-hidden="true" />
        </div>
      </div>

      {(description || trend) && (
        <div className="mt-4 flex items-center gap-2">
          {trend && (
            <span
              className={cn(
                'flex items-center text-xs font-semibold',
                trend.isPositive ? 'text-emerald-600' : 'text-rose-600'
              )}
            >
              {trend.isPositive ? '+' : '-'}
              {Math.abs(trend.value)}%
            </span>
          )}
          {description && (
            <span className="text-xs text-slate-400">{description}</span>
          )}
        </div>
      )}
      
      {/* Decorative background element */}
      <div className="absolute -bottom-2 -right-2 h-16 w-16 opacity-[0.02] text-slate-900">
        <Icon size={64} strokeWidth={1} />
      </div>
    </div>
  );
};

export default OverviewCard;