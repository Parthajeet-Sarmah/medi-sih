import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Pill,
  Activity,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/patient/dashboard' },
  { icon: Calendar, label: 'Appointments', path: '/patient/dashboard/appointments' },
  { icon: FileText, label: 'Medical Records', path: '/patient/dashboard/records' },
  { icon: Pill, label: 'Prescriptions', path: '/patient/dashboard/prescriptions' },
  { icon: Activity, label: 'Vitals', path: '/patient/dashboard/vitals' },
  { icon: MessageSquare, label: 'Messages', path: '/patient/dashboard/messages' },
  { icon: Settings, label: 'Settings', path: '/patient/dashboard/settings' },
];

export function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Portal</h2>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200 ${
                isActive ? 'bg-teal-50 text-teal-600 border-r-4 border-teal-600' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
        <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full mt-auto">
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </nav>
    </aside>
  );
}