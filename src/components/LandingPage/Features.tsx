import React from 'react';
import { Shield, Clock, Globe, Smartphone, Lock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '24/7 Support',
    description: 'Round-the-clock medical assistance and support whenever you need it.'
  },
  {
    icon: Clock,
    title: 'Instant Access',
    description: 'Quick access to your medical records, prescriptions, and test results.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with healthcare providers worldwide for expert medical opinions.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Health',
    description: 'Track your health metrics and manage appointments from your smartphone.'
  },
  {
    icon: Lock,
    title: 'Secure Platform',
    description: 'Advanced encryption and security measures to protect your medical data.'
  },
  {
    icon: Award,
    title: 'Quality Care',
    description: 'Access to certified healthcare professionals and accredited facilities.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Features that Set Us Apart
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience healthcare management reimagined with our innovative features
            designed for your convenience and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card group">
              <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}