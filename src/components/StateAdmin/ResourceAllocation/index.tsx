import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, AlertCircle, Truck, Package, Stethoscope, Syringe } from 'lucide-react';

const resources = [
  {
    id: 1,
    name: 'Ventilators',
    category: 'Equipment',
    totalUnits: 450,
    allocated: 380,
    inMaintenance: 20,
    districts: {
      'Central District': 120,
      'Northern District': 95,
      'Southern District': 85,
      'Eastern District': 80
    },
    status: 'critical',
    lastUpdated: '2024-03-15T10:30:00'
  },
  {
    id: 2,
    name: 'ICU Beds',
    category: 'Infrastructure',
    totalUnits: 800,
    allocated: 600,
    inMaintenance: 30,
    districts: {
      'Central District': 250,
      'Northern District': 200,
      'Southern District': 180,
      'Eastern District': 170
    },
    status: 'normal',
    lastUpdated: '2024-03-15T09:45:00'
  },
  {
    id: 3,
    name: 'Ambulances',
    category: 'Vehicle',
    totalUnits: 200,
    allocated: 175,
    inMaintenance: 15,
    districts: {
      'Central District': 60,
      'Northern District': 45,
      'Southern District': 40,
      'Eastern District': 30
    },
    status: 'warning',
    lastUpdated: '2024-03-15T11:15:00'
  }
];

const categories = ['All', 'Equipment', 'Infrastructure', 'Vehicle', 'Medicine'];
const districts = ['All Districts', 'Central District', 'Northern District', 'Southern District', 'Eastern District'];

export function ResourceAllocation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical':
        return <TrendingDown className="h-5 w-5" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resource Allocation</h1>
          <p className="text-gray-600 mt-1">Manage and monitor resource distribution</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Transfer Resources
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Package className="h-5 w-5" />
            Add Resources
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Package className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Resources</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">1,450</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Stethoscope className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-red-600">-3%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Equipment</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">450</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Truck className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Vehicles</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">200</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Syringe className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Medicine Stock</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">800</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="input-field"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="input-field"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Resource List */}
        <div className="mt-6 space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-700">
                        {resource.category}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(resource.status)}`}>
                      {getStatusIcon(resource.status)}
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Units</p>
                      <p className="text-lg font-semibold text-gray-900">{resource.totalUnits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Allocated</p>
                      <p className="text-lg font-semibold text-gray-900">{resource.allocated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">In Maintenance</p>
                      <p className="text-lg font-semibold text-gray-900">{resource.inMaintenance}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">District Distribution</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {Object.entries(resource.districts).map(([district, count]) => (
                        <div key={district} className="text-center p-2 bg-white rounded-lg">
                          <p className="text-xs text-gray-500">{district}</p>
                          <p className="text-sm font-semibold text-gray-900">{count}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn-secondary">Transfer</button>
                  <button className="btn-primary">Manage</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}