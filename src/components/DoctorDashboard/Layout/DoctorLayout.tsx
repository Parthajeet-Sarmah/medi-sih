import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DoctorSidebar } from './DoctorSidebar';
import { DoctorHeader } from './DoctorHeader';
import { DoctorMobileNav } from './DoctorMobileNav';

export function DoctorLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex pt-16">
        <DoctorSidebar />
        <DoctorMobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}