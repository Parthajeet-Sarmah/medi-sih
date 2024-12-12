import React from 'react';
import { Users, Plus } from 'lucide-react';

interface StaffCategoryProps {
  title: string;
  count: number;
  departments: Array<{
    name: string;
    count: number;
  }>;
}

function StaffCategory({ title, count, departments }: StaffCategoryProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-sm sm:text-base font-medium text-gray-900">{title}</h3>
        <span className="text-xs sm:text-sm text-gray-500">Total: {count}</span>
      </div>
      <div className="space-y-2">
        {departments.map((dept) => (
          <div key={dept.name} className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-600 truncate">{dept.name}</span>
            <span className="text-xs sm:text-sm font-medium text-gray-900">{dept.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StaffOverview() {
  const staffData = {
    doctors: {
      total: 120,
      departments: [
        { name: 'General Medicine', count: 25 },
        { name: 'Surgery', count: 30 },
        { name: 'Pediatrics', count: 15 },
        { name: 'Emergency', count: 20 },
        { name: 'ICU', count: 30 }
      ]
    },
    nurses: {
      total: 280,
      departments: [
        { name: 'General Ward', count: 100 },
        { name: 'ICU', count: 60 },
        { name: 'Emergency', count: 40 },
        { name: 'OT', count: 50 },
        { name: 'Pediatrics', count: 30 }
      ]
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Staff Overview</h2>
        </div>
        <button className="btn-primary text-xs sm:text-sm py-2 flex items-center gap-1 sm:gap-2">
          <Plus className="h-4 w-4" />
          Manage Staff
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <StaffCategory 
          title="Doctors" 
          count={staffData.doctors.total}
          departments={staffData.doctors.departments}
        />
        <StaffCategory 
          title="Nurses" 
          count={staffData.nurses.total}
          departments={staffData.nurses.departments}
        />
      </div>
    </div>
  );
}