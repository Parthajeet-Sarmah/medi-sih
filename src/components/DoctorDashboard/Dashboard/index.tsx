import React from 'react';
import { Users, Calendar, IndianRupee, FileText, Star, Activity, UserPlus } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { PatientSection } from './components/PatientSection';
import { RecentPatients } from './components/RecentPatients';

const stats = [
  {
    title: "Today's Appointments",
    value: 12,
    icon: Calendar,
    trend: { value: 20, isPositive: true },
    subtitle: "3 pending"
  },
  {
    title: "Total Patients",
    value: 1250,
    icon: Users,
    trend: { value: 10, isPositive: true },
    subtitle: "45 this month"
  },
  {
    title: "Total Revenue",
    value: "₹2,50,000",
    icon: IndianRupee,
    trend: { value: 15, isPositive: true },
    subtitle: "₹25,000 pending"
  },
  {
    title: "Prescriptions",
    value: 450,
    icon: FileText,
    trend: { value: 5, isPositive: true },
    subtitle: "45 this week"
  }
];

export function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, Dr. Sarah Wilson</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <PatientSection />
        <RecentPatients />
      </div>
    </div>
  );
}