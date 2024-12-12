import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#556B2F] text-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6" />
              <span className="ml-2 text-lg font-semibold">MedMate</span>
            </div>
            <p className="text-sm opacity-80">
              Providing comprehensive healthcare solutions for a healthier tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:opacity-80">Home</a></li>
              <li><a href="#services" className="hover:opacity-80">Services</a></li>
              <li><a href="#about" className="hover:opacity-80">About</a></li>
              <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Appointments</a></li>
              <li><a href="#" className="hover:opacity-80">Health Records</a></li>
              <li><a href="#" className="hover:opacity-80">Patient Portal</a></li>
              <li><a href="#" className="hover:opacity-80">Monitoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-80">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#F5F5DC] mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}