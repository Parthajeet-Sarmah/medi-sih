import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#556B2F] mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Experience comprehensive healthcare management with our integrated platform.
              Streamlined appointments, secure records, and personalized care all in one place.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#556B2F] text-[#F5F5DC] px-6 py-3 rounded-md hover:bg-[#6B8E23] transition-colors duration-200">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-6 py-3 border-2 border-[#556B2F] text-[#556B2F] rounded-md hover:bg-[#556B2F] hover:text-[#F5F5DC] transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Healthcare Professional"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}