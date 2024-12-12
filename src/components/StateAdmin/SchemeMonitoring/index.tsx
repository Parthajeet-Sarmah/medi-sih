import React, { useState } from 'react';
import { Search, Filter, Users, Wallet, TrendingUp, AlertCircle } from 'lucide-react';

const schemes = [
  {
    id: 1,
    name: 'Ayushman Bharat',
    type: 'National',
    beneficiaries: 125000,
    hospitals: 280,
    budget: '₹450 Cr',
    utilized: '₹320 Cr',
    status: 'active',
    progress: 71,
    districts: {
      'Central District': 45000,
      'Northern District': 35000,
      'Southern District': 25000,
      'Eastern District': 20000
    }
  },
  {
    id: 2,
    name: 'State Health Insurance',
    type: 'State',
    beneficiaries: 85000,
    hospitals: 180,
    budget: '₹250 Cr',
    utilized: '₹180 Cr',
    status: 'active',
    progress: 68,
    districts: {
      'Central District': 30000,
      'Northern District': 25000,
      'Southern District': 20000,
      'Eastern District': 10000
    }
  },
  {
    id: 3,
    name: 'Maternal Care Program',
    type: 'State',
    beneficiaries: 45000,
    hospitals: 150,
    budget: '₹120 Cr',
    utilized: '₹95 Cr',
    status: 'warning',
    progress: 85,
    districts: {
      'Central District': 15000,
      'Northern District': 12000,
      'Southern District': 10000,
      'Eastern District': 8000
    }
  }
];

export function SchemeMonitoring() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scheme Monitoring</h1>
          <p className="text-gray-600 mt-1">Track and manage healthcare schemes</p>
        </div>
        <button className="btn-primary">Add New Scheme</button>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Beneficiaries</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">255,000</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Wallet className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Budget</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">₹820 Cr</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">+5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Fund Utilization</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">72.5%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-red-600">2</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Critical Updates</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>
      </div>

      {/* Scheme List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex gap-4 mb-6">
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
            className="input-field"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="national">National</option>
            <option value="state">State</option>
          </select>
        </div>

        <div className="space-y-4">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{scheme.name}</h3>
                      <span className="text-sm text-gray-500">{scheme.type} Scheme</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        scheme.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {scheme.status.charAt(0).toUpperCase() + scheme.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Beneficiaries</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {scheme.beneficiaries.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Hospitals</p>
                      <p className="text-lg font-semibold text-gray-900">{scheme.hospitals}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Budget</p>
                      <p className="text-lg font-semibold text-gray-900">{scheme.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Utilized</p>
                      <p className="text-lg font-semibold text-gray-900">{scheme.utilized}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-500">{scheme.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          scheme.progress >= 80 ? 'bg-yellow-500' : 'bg-teal-500'
                        }`}
                        style={{ width: `${scheme.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-primary">Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}