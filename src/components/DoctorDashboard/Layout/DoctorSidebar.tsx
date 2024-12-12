import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
  Stethoscope
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/doctor/dashboard' },
  { icon: Users, label: 'Patients', path: '/doctor/patients' },
  { icon: Calendar, label: 'Appointments', path: '/doctor/appointments' },
  { icon: ClipboardList, label: 'Prescriptions', path: '/doctor/prescriptions' },
  { icon: FileText, label: 'Medical Records', path: '/doctor/records' },
  { icon: MessageSquare, label: 'Messages', path: '/doctor/messages' },
  { icon: Settings, label: 'Settings', path: '/doctor/settings' },
];

export function DoctorSidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <div className="flex items-center">
          <Stethoscope className="h-8 w-8 text-teal-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">DocCare</span>
        </div>
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