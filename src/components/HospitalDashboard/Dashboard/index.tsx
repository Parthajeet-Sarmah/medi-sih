import React from 'react';
import { Bed, Activity, Users, ClipboardList } from 'lucide-react';
import { StatCard } from './StatCard';
import { BedManagement } from './BedManagement';
import { StaffOverview } from './StaffOverview';

export function HospitalDashboard() {
  const stats = [
    {
      icon: Bed,
      title: 'Total Beds',
      value: 486,
      change: { value: 2, type: 'increase' },
      subtitle: 'Available Beds'
    },
    {
      icon: Activity,
      title: 'Available Beds',
      value: 124,
      change: { value: 5, type: 'decrease' },
      subtitle: 'Currently Available'
    },
    {
      icon: Users,
      title: 'Medical Staff',
      value: 215,
      change: { value: 12, type: 'increase' },
      subtitle: 'Active Staff Members'
    },
    {
      icon: ClipboardList,
      title: 'Equipment Units',
      value: 892,
      change: { value: 28, type: 'increase' },
      subtitle: 'Total Equipment'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <BedManagement />
        </div>
        <div>
          <StaffOverview />
        </div>
      </div>
    </div>
  );
}