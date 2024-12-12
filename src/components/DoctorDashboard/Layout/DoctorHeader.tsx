import React from 'react';
import { Bell, Menu, X, Settings } from 'lucide-react';

interface DoctorHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function DoctorHeader({ isMobileMenuOpen, setIsMobileMenuOpen }: DoctorHeaderProps) {
  const doctorInfo = {
    name: "Dr. Sarah Wilson",
    specialization: "Cardiologist",
    hospitalName: "City General Hospital"
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="ml-4">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                {doctorInfo.name}
              </h1>
              <p className="text-sm text-gray-500">
                {doctorInfo.specialization} • {doctorInfo.hospitalName}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="search"
                placeholder="Search patients..."
                className="w-48 lg:w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </div>
            <button className="relative text-gray-500 hover:text-gray-600">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-gray-500 hover:text-gray-600 hidden sm:block">
              <Settings className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=256&h=256&q=80"
                alt="Doctor Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}