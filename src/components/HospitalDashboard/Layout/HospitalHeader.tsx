import React from 'react';
import { Bell, Menu, X, Settings } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HospitalHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function HospitalHeader({ isMobileMenuOpen, setIsMobileMenuOpen }: HospitalHeaderProps) {
  const location = useLocation();
  const hospitalInfo = {
    name: "City General Hospital",
    address: "123 Healthcare Avenue, Medical District, NY 10001",
    admin: "Thomas Anderson",
    role: "Hospital Super Admin"
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 md:hidden touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="ml-4">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                {hospitalInfo.name}
              </h1>
              <p className="text-sm text-gray-500 hidden sm:block truncate">
                {hospitalInfo.address}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden sm:block">
              <input
                type="search"
                placeholder="Search..."
                className="w-48 lg:w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </div>
            <button 
              className="relative p-2 text-gray-500 hover:text-gray-600 touch-manipulation"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              className="p-2 text-gray-500 hover:text-gray-600 hidden sm:block touch-manipulation"
              aria-label="Settings"
            >
              <Settings className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Admin Profile"
                className="h-8 w-8 rounded-full"
              />
              <div className="ml-2 hidden sm:block">
                <p className="text-sm font-medium text-gray-900 truncate">{hospitalInfo.admin}</p>
                <p className="text-xs text-gray-500 truncate">{hospitalInfo.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}