import React, { useState } from 'react';
import { Search, Plus, Filter, FileText } from 'lucide-react';

export function PatientSection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Patient Management</h2>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm flex items-center gap-2">
            <FileText className="h-4 w-4" />
            New Prescription
          </button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
          <option value="all">All Patients</option>
          <option value="recent">Recent</option>
          <option value="critical">Critical</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Create Appointment', color: 'bg-blue-50 text-blue-600' },
          { label: 'Add Medical Record', color: 'bg-purple-50 text-purple-600' },
          { label: 'Generate Bill', color: 'bg-green-50 text-green-600' },
          { label: 'View Reports', color: 'bg-orange-50 text-orange-600' }
        ].map((action) => (
          <button
            key={action.label}
            className={`p-3 rounded-lg text-sm font-medium ${action.color} text-center hover:opacity-90 transition-opacity`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}