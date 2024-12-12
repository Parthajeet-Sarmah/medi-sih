import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { SchemeCard } from './SchemeCard';

const schemes = [
  {
    id: 1,
    name: 'Ayushman Bharat PM-JAY',
    description: 'Provides healthcare coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
    beneficiaries: 500000000,
    budget: '₹6,400 Cr',
    status: 'active' as const,
    type: 'central' as const,
    coverage: ['Hospitalization', 'Medicines', 'Diagnostics', 'Pre/Post Care']
  },
  {
    id: 2,
    name: 'Central Government Health Scheme',
    description: 'Provides comprehensive health care facilities for central government employees and pensioners.',
    beneficiaries: 1300000,
    budget: '₹3,200 Cr',
    status: 'active' as const,
    type: 'central' as const,
    coverage: ['OPD', 'Medicines', 'Hospitalization', 'Specialists']
  },
  {
    id: 3,
    name: 'Pradhan Mantri Surakshit Matritva Abhiyan',
    description: 'Provides free antenatal care to pregnant women on the 9th of every month.',
    beneficiaries: 2500000,
    budget: '₹1,800 Cr',
    status: 'active' as const,
    type: 'central' as const,
    coverage: ['Antenatal Care', 'Diagnostics', 'Medicines', 'Consultation']
  },
  {
    id: 4,
    name: 'Rashtriya Swasthya Bima Yojana',
    description: 'Health insurance scheme for Below Poverty Line (BPL) families.',
    beneficiaries: 35000000,
    budget: '₹2,000 Cr',
    status: 'active' as const,
    type: 'central' as const,
    coverage: ['Hospitalization', 'Day Care', 'Transport', 'Pre-existing Conditions']
  },
  {
    id: 5,
    name: 'Chief Minister\'s Comprehensive Health Insurance',
    description: 'State-specific health insurance scheme providing coverage for various medical procedures.',
    beneficiaries: 1800000,
    budget: '₹1,200 Cr',
    status: 'active' as const,
    type: 'state' as const,
    coverage: ['Surgery', 'Therapy', 'Critical Care', 'Organ Transplant']
  }
];

export function Schemes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || scheme.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || scheme.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Healthcare Schemes</h1>
          <p className="text-gray-600 mt-1">Manage and monitor healthcare schemes</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add New Scheme
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search schemes..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field sm:w-48"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="central">Central Schemes</option>
          <option value="state">State Schemes</option>
        </select>
        <select
          className="input-field sm:w-48"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => (
          <SchemeCard key={scheme.id} {...scheme} />
        ))}
      </div>
    </div>
  );
}