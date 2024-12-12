import React from 'react';
import { Search, Filter } from 'lucide-react';

interface DepartmentFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
}

export function DepartmentFilter({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedRole,
  onRoleChange
}: DepartmentFilterProps) {
  const departments = [
    'All Departments',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Emergency',
    'Surgery',
    'Radiology'
  ];

  const roles = [
    'All Roles',
    'Doctor',
    'Nurse',
    'Technician',
    'Administrative',
    'Support Staff'
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search staff..."
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
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}