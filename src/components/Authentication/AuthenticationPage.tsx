import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Users, ArrowLeft } from 'lucide-react';

export function AuthenticationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Portal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Select the appropriate portal to access your healthcare management dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* User/Facility Portal Card */}
          <div 
            className="card group cursor-pointer hover:scale-105"
            onClick={() => navigate('/auth/user-facility')}
          >
            <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              User/Facility Portal
            </h2>
            <p className="text-gray-600 mb-6">
              Access your personal health records, schedule appointments, and manage your healthcare journey.
            </p>
            <button className="btn-primary w-full">
              Access Portal
            </button>
          </div>

          {/* Administrative Portal Card */}
          <div 
            className="card group cursor-pointer hover:scale-105"
            onClick={() => navigate('/auth/administrative')}
          >
            <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
              <Building2 className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Administrative Portal
            </h2>
            <p className="text-gray-600 mb-6">
              Manage healthcare facilities, staff, and administrative operations efficiently.
            </p>
            <button className="btn-primary w-full">
              Access Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}