import React from 'react';
import { Search, Calendar } from 'lucide-react';

interface AppointmentFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function AppointmentFilters({ searchTerm, onSearchChange }: AppointmentFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search appointments..."
          className="pl-10 input-field"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <button className="btn-secondary flex items-center justify-center gap-2">
        <Calendar className="h-5 w-5" />
        <span>Filter by Date</span>
      </button>
    </div>
  );
}