import React from 'react';
import { Building2, Building, Home } from 'lucide-react';

const hospitalTypes = [
  { 
    type: 'Government', 
    icon: Building2,
    count: 156,
    color: 'bg-blue-500',
    percentage: 35
  },
  { 
    type: 'Private', 
    icon: Building,
    count: 203,
    color: 'bg-purple-500',
    percentage: 45
  },
  { 
    type: 'Nursing Homes', 
    icon: Home,
    count: 89,
    color: 'bg-teal-500',
    percentage: 20
  }
];

export function HospitalDistribution() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Hospital Distribution</h2>
      <div className="space-y-6">
        {hospitalTypes.map((type) => {
          const Icon = type.icon;
          return (
            <div key={type.type} className="flex items-center">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Icon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{type.type}</span>
                  <span className="text-sm text-gray-500">{type.count}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${type.color} h-2 rounded-full`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}