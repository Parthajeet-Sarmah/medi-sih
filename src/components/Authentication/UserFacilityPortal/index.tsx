import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { UserPortal } from './UserPortal';
import { FacilityPortal } from './FacilityPortal';

export function UserFacilityPortal() {
  const [activeTab, setActiveTab] = useState<'user' | 'facility'>('user');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <Link
          to="/auth"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200 touch-target"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portal Selection
        </Link>

        <div className="mt-6 sm:mt-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <div className="flex space-x-4 mb-6 sm:mb-8">
              <button
                className={`flex-1 py-3 px-4 text-center rounded-lg transition-colors duration-200 touch-target
                  ${activeTab === 'user'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab('user')}
              >
                User
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center rounded-lg transition-colors duration-200 touch-target
                  ${activeTab === 'facility'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab('facility')}
              >
                Facility
              </button>
            </div>

            {activeTab === 'user' ? <UserPortal /> : <FacilityPortal />}
          </div>
        </div>
      </div>
    </div>
  );
}