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

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/hospital/dashboard' },
  { icon: Bed, label: 'Bed Management', path: '/hospital/beds' },
  { icon: Users, label: 'Staff', path: '/hospital/staff' },
  { icon: Stethoscope, label: 'Doctors', path: '/hospital/doctors' },
  { icon: UserRound, label: 'Patients', path: '/hospital/patients' },
  { icon: Boxes, label: 'Equipment', path: '/hospital/equipment' },
  { icon: ClipboardList, label: 'Schemes', path: '/hospital/schemes' },
  { icon: Calendar, label: 'Schedule', path: '/hospital/schedule' },
  { icon: Settings, label: 'Settings', path: '/hospital/settings' },
  { icon: HelpCircle, label: 'Help', path: '/hospital/help' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HospitalMobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 md:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose}></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-64 bg-white">
        <div className="p-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-teal-600">MediCare</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200 ${
                  isActive ? 'bg-teal-50 text-teal-600 border-r-4 border-teal-600' : ''
                }`
              }
              onClick={onClose}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </div>
        <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full">
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}