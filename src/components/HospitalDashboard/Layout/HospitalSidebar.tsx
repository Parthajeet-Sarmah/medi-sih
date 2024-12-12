import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bed, 
  Users, 
  Stethoscope,
  UserRound,
  Boxes,
  ClipboardList,
  Calendar,
  Settings,
  HelpCircle,
  LogOut 
} from 'lucide-react';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/hospital/dashboard' },
  { icon: Bed, label: 'Bed Management', path: '/hospital/beds' },
  { icon: Users, label: 'Staff', path: '/hospital/staff' },
  { icon: Stethoscope, label: 'Doctors', path: '/hospital/doctors' },
  { icon: UserRound, label: 'Patients', path: '/hospital/patients' },
  { icon: Boxes, label: 'Equipment', path: '/hospital/equipment' },
  { icon: ClipboardList, label: 'Schemes', path: '/hospital/schemes' },
];

const systemNavItems = [
  { icon: Calendar, label: 'Schedule', path: '/hospital/schedule' },
  { icon: Settings, label: 'Settings', path: '/hospital/settings' },
  { icon: HelpCircle, label: 'Help', path: '/hospital/help' },
];

export function HospitalSidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-teal-600">MediCare</span>
        </div>
      </div>
      <nav className="mt-6">
        <div className="px-4 mb-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">MAIN</p>
        </div>
        {mainNavItems.map((item) => (
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

        <div className="px-4 mb-2 mt-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SYSTEM</p>
        </div>
        {systemNavItems.map((item) => (
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