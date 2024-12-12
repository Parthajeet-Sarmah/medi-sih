import React from 'react';
import { Building2, Users, Bed, Stethoscope } from 'lucide-react';
import { StatCard } from './StatCard';
import { HospitalDistribution } from './HospitalDistribution';
import { DistrictMetrics } from './DistrictMetrics';

export function StateOverview() {
  const stats = [
    {
      title: 'Total Hospitals',
      value: '448',
      icon: Building2,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Total Patients',
      value: '24,789',
      icon: Users,
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Available Beds',
      value: '1,245',
      icon: Bed,
      trend: { value: 5, isPositive: false }
    },
    {
      title: 'Active Doctors',
      value: '1,950',
      icon: Stethoscope,
      trend: { value: 3, isPositive: true }
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">State Healthcare Overview</h1>
        <p className="text-gray-600 mt-1">Monitor and manage healthcare facilities across districts</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DistrictMetrics />
        </div>
        <div>
          <HospitalDistribution />
        </div>
      </div>
    </div>
  );
}