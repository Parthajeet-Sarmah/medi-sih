import React from 'react';
import { Search } from 'lucide-react';

interface RecordFiltersProps {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export function RecordFilters({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange
}: RecordFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search records..."
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
        <option value="lab">Lab Reports</option>
        <option value="certificate">Certificates</option>
        <option value="record">Medical Records</option>
      </select>
    </div>
  );
}