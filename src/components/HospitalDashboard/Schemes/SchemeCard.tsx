import React from 'react';
import { ClipboardList, Users, IndianRupee } from 'lucide-react';

interface SchemeCardProps {
  name: string;
  description: string;
  beneficiaries: number;
  budget: string;
  status: 'active' | 'pending' | 'inactive';
  type: 'central' | 'state';
  coverage: string[];
}

export function SchemeCard({
  name,
  description,
  beneficiaries,
  budget,
  status,
  type,
  coverage
}: SchemeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-100 rounded-lg">
            <ClipboardList className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <span className={`text-sm px-2 py-1 rounded-full ${
              type === 'central' 
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}>
              {type === 'central' ? 'Central Scheme' : 'State Scheme'}
            </span>
          </div>
        </div>
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
          status === 'active' 
            ? 'bg-green-100 text-green-800'
            : status === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Beneficiaries</p>
            <p className="font-semibold text-gray-900">{beneficiaries.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <p className="font-semibold text-gray-900">{budget}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Coverage</p>
        <div className="flex flex-wrap gap-2">
          {coverage.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="btn-secondary flex-1">View Details</button>
        <button className="btn-primary flex-1">Enroll Patient</button>
      </div>
    </div>
  );
}