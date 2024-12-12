import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
                Healthcare Made Simple
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Health,{' '}
              <span className="text-teal-600">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience comprehensive healthcare management with our integrated platform.
              Streamlined appointments, secure records, and personalized care all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => navigate('/auth')}
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Healthcare Professional"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}