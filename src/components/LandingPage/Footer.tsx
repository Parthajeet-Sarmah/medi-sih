import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-teal-500" />
              <span className="ml-2 text-lg font-semibold text-white">
                MedMate
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Providing comprehensive healthcare solutions for a healthier
              tomorrow.
            </p>
          </div>

          {[
            {
              title: 'Quick Links',
              links: [
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Appointments', href: '#' },
                { label: 'Health Records', href: '#' },
                { label: 'Patient Portal', href: '#' },
                { label: 'Monitoring', href: '#' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
