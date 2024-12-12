import React from 'react';
import { Search, Filter } from 'lucide-react';

interface DoctorFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
}

export function DoctorFilters({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedStatus,
  onStatusChange
}: DoctorFiltersProps) {
  const departments = [
    'All Departments',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'ENT'
  ];

  const statuses = [
    'All Statuses',
    'Available',
    'In Consultation',
    'On Leave',
    'Off Duty'
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search doctors by name or ID..."
          className="pl-10 input-field"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="input-field sm:w-48"
        value={selectedDepartment}
        onChange={(e) => onDepartmentChange(e.target.value)}
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
      <select
        className="input-field sm:w-48"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}