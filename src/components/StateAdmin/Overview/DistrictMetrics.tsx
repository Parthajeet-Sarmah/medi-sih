import React from 'react';
import { MapPin } from 'lucide-react';

const districtData = [
  {
    name: 'Central District',
    hospitals: 125,
    occupancy: 78,
    doctors: 450,
    beds: 2800
  },
  {
    name: 'Northern District',
    hospitals: 98,
    occupancy: 82,
    doctors: 380,
    beds: 2200
  },
  {
    name: 'Southern District',
    hospitals: 112,
    occupancy: 75,
    doctors: 420,
    beds: 2500
  },
  {
    name: 'Eastern District',
    hospitals: 87,
    occupancy: 85,
    doctors: 340,
    beds: 1900
  },
  {
    name: 'Western District',
    hospitals: 95,
    occupancy: 80,
    doctors: 360,
    beds: 2100
  }
];

export function DistrictMetrics() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">District-wise Metrics</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                District
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospitals
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bed Occupancy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctors
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Beds
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {districtData.map((district) => (
              <tr key={district.name} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {district.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {district.hospitals}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-100 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          district.occupancy >= 80 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${district.occupancy}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{district.occupancy}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {district.doctors}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {district.beds}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}