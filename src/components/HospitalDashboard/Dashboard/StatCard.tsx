import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  change: {
    value: number;
    type: 'increase' | 'decrease';
  };
  subtitle: string;
}

export function StatCard({ icon: Icon, title, value, change, subtitle }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <Icon className="h-6 w-6 text-teal-600" />
        <span className={`text-xs sm:text-sm font-medium ${
          change.type === 'increase' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change.type === 'increase' ? '+' : '-'}{Math.abs(change.value)} today
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
        <p className="mt-2 text-xl sm:text-3xl font-bold text-gray-900">{value}</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-500 truncate">{subtitle}</p>
      </div>
    </div>
  );
}