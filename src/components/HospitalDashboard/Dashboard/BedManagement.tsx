import React from 'react';
import { Bed } from 'lucide-react';

interface BedSectionProps {
  title: string;
  total: number;
  available: number;
  occupied: number;
}

function BedSection({ title, total, available, occupied }: BedSectionProps) {
  const occupancyRate = (occupied / total) * 100;

  return (
    <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Bed className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
          <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">{title}</h3>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">Total: {total}</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-green-600">Available: {available}</span>
          <span className="text-red-600">Occupied: {occupied}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-teal-600 h-1.5 sm:h-2 rounded-full"
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function BedManagement() {
  const bedSections = [
    { title: 'ICU', total: 50, available: 8, occupied: 42 },
    { title: 'Emergency', total: 30, available: 12, occupied: 18 },
    { title: 'General Ward', total: 200, available: 45, occupied: 155 },
    { title: 'Private Room', total: 80, available: 25, occupied: 55 },
    { title: 'Pediatric', total: 40, available: 15, occupied: 25 },
    { title: 'Maternity', total: 35, available: 10, occupied: 25 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Bed Management</h2>
        <button className="btn-primary text-xs sm:text-sm py-2">Add Bed</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {bedSections.map((section) => (
          <BedSection key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
}