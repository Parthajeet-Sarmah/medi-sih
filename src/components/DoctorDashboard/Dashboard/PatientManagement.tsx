import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';

export function PatientManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Patient Management</h2>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm">Create Prescription</button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="recovered">Recovered</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Use the search bar to find patients and manage their records
      </div>
    </div>
  );
}