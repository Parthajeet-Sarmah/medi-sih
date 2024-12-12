import React from 'react';
import { Search } from 'lucide-react';

interface HospitalFiltersProps {
  searchTerm: string;
  selectedType: string;
  selectedDistrict: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
}

export function HospitalFilters({
  searchTerm,
  selectedType,
  selectedDistrict,
  onSearchChange,
  onTypeChange,
  onDistrictChange
}: HospitalFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search hospitals..."
          className="pl-10 input-field"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="input-field sm:w-48"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="all">All Types</option>
        <option value="government">Government</option>
        <option value="private">Private</option>
        <option value="nursing">Nursing Home</option>
      </select>
      <select
        className="input-field sm:w-48"
        value={selectedDistrict}
        onChange={(e) => onDistrictChange(e.target.value)}
      >
        <option value="all">All Districts</option>
        <option value="central">Central District</option>
        <option value="north">Northern District</option>
        <option value="south">Southern District</option>
        <option value="east">Eastern District</option>
      </select>
    </div>
  );
}