import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#F5F5DC] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-[#556B2F]" />
            <span className="ml-2 text-xl font-semibold text-[#556B2F]">MedMate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#556B2F] hover:text-[#6B8E23] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-[#556B2F] text-[#F5F5DC] px-4 py-2 rounded-md hover:bg-[#6B8E23] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#556B2F]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F5F5DC]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-[#556B2F] hover:text-[#6B8E23] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full text-center bg-[#556B2F] text-[#F5F5DC] px-4 py-2 rounded-md hover:bg-[#6B8E23] transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}