import React from 'react';
import { Calendar, ClipboardList, Users, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Book appointments with healthcare providers instantly through our platform.',
  },
  {
    icon: ClipboardList,
    title: 'Health Records',
    description: 'Access and manage your medical records securely in one place.',
  },
  {
    icon: Users,
    title: 'Patient Portal',
    description: 'Connect with healthcare providers and access personalized care plans.',
  },
  {
    icon: HeartPulse,
    title: 'Health Monitoring',
    description: 'Track your vital signs and health metrics with our integrated tools.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to make managing your health easier and more efficient.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}