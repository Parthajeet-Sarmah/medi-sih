import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { StateAdminHeader } from './StateAdminHeader';
import { StateAdminSidebar } from './StateAdminSidebar';
import { StateAdminMobileNav } from './StateAdminMobileNav';

export function StateAdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <StateAdminHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex pt-16">
        <StateAdminSidebar />
        <StateAdminMobileNav 
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