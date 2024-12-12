import React, { useState } from 'react';
import { Search, Map, Building2, Users, Bed, Activity, Filter } from 'lucide-react';

const districts = [
  {
    id: 1,
    name: 'Central District',
    hospitals: {
      government: 45,
      private: 65,
      nursing: 25
    },
    population: 2500000,
    bedCapacity: 3500,
    occupancyRate: 78,
    doctors: 850,
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics'],
    schemes: ['Ayushman Bharat', 'State Health Scheme', 'Maternal Care Program'],
    equipment: {
      ventilators: 180,
      xrayMachines: 90,
      mriScanners: 12,
      ctScanners: 15
    }
  },
  {
    id: 2,
    name: 'Northern District',
    hospitals: {
      government: 35,
      private: 55,
      nursing: 20
    },
    population: 1800000,
    bedCapacity: 2800,
    occupancyRate: 82,
    doctors: 650,
    specialties: ['Orthopedics', 'ENT', 'Ophthalmology', 'Dermatology'],
    schemes: ['Ayushman Bharat', 'Rural Health Mission', 'Child Care Program'],
    equipment: {
      ventilators: 150,
      xrayMachines: 75,
      mriScanners: 8,
      ctScanners: 10
    }
  }
];

export function DistrictData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMetric, setSelectedMetric] = useState('hospitals');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">District Data Analysis</h1>
          <p className="text-gray-600 mt-1">Comprehensive healthcare statistics by district</p>
        </div>
        <button className="btn-primary">Generate Report</button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search districts..."
                className="pl-10 input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="input-field"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              <option value="hospitals">Hospitals</option>
              <option value="beds">Bed Capacity</option>
              <option value="doctors">Medical Staff</option>
              <option value="equipment">Equipment</option>
            </select>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Total Hospitals</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">245</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Map className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Districts</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* District Cards */}
      <div className="space-y-6">
        {districts.map((district) => (
          <div key={district.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* District Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Map className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{district.name}</h2>
                    <p className="text-sm text-gray-500">Population: {district.population.toLocaleString()}</p>
                  </div>
                </div>

                {/* Hospital Distribution */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Government</p>
                    <p className="text-lg font-semibold text-gray-900">{district.hospitals.government}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Private</p>
                    <p className="text-lg font-semibold text-gray-900">{district.hospitals.private}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Nursing Homes</p>
                    <p className="text-lg font-semibold text-gray-900">{district.hospitals.nursing}</p>
                  </div>
                </div>

                {/* Healthcare Metrics */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Bed Occupancy</span>
                      <span className="text-sm text-gray-500">{district.occupancyRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          district.occupancyRate >= 80 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${district.occupancyRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Total Beds</p>
                        <p className="font-semibold text-gray-900">{district.bedCapacity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Doctors</p>
                        <p className="font-semibold text-gray-900">{district.doctors}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment and Schemes */}
              <div className="lg:w-96 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Medical Equipment</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(district.equipment).map(([key, value]) => (
                      <div key={key} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-lg font-semibold text-gray-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Healthcare Schemes</h3>
                  <div className="flex flex-wrap gap-2">
                    {district.schemes.map((scheme) => (
                      <span
                        key={scheme}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-teal-100 text-teal-700"
                      >
                        {scheme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}