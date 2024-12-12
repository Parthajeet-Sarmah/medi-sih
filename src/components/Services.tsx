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
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#556B2F] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to make managing your health easier and more efficient.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-[#F5F5DC] rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <service.icon className="h-12 w-12 text-[#556B2F] mb-4" />
              <h3 className="text-xl font-semibold text-[#556B2F] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}