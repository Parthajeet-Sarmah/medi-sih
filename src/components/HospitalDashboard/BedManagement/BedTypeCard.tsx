import React from 'react';
import { Bed } from 'lucide-react';

interface BedTypeCardProps {
  type: string;
  total: number;
  available: number;
  occupied: number;
}

export function BedTypeCard({ type, total, available, occupied }: BedTypeCardProps) {
  const occupancyRate = (occupied / total) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-teal-100 rounded-lg">
            <Bed className="h-5 w-5 text-teal-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
        </div>
        <button className="text-sm text-teal-600 hover:text-teal-700">Manage</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Total Beds</p>
          <p className="text-xl font-semibold text-gray-900">{total}</p>
        </div>
        <div>
          <p className="text-sm text-green-600">Available</p>
          <p className="text-xl font-semibold text-green-600">{available}</p>
        </div>
        <div>
          <p className="text-sm text-red-600">Occupied</p>
          <p className="text-xl font-semibold text-red-600">{occupied}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Occupancy Rate</span>
          <span className="font-medium text-gray-900">{Math.round(occupancyRate)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              occupancyRate >= 90 ? 'bg-red-500' : 
              occupancyRate >= 75 ? 'bg-yellow-500' : 
              'bg-green-500'
            }`}
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}