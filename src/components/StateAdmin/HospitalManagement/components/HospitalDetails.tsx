import React from 'react';
import { 
  Building2, Users, Bed, Stethoscope, Wallet, Package, Activity, 
  ArrowLeft, Download, Printer, Calendar, ChevronDown 
} from 'lucide-react';

interface HospitalDetailsProps {
  hospital: {
    id: number;
    name: string;
    type: string;
    district: string;
    totalBeds: number;
    occupiedBeds: number;
    doctors: number;
    staff: number;
    schemes: string[];
    equipment: {
      ventilators: number;
      xrayMachines: number;
      mriScanners: number;
      ctScanners: number;
    };
    fundDetails?: {
      totalAllocation: string;
      utilized: string;
      remaining: string;
      utilizationByDepartment: {
        infrastructure: number;
        equipment: number;
        salaries: number;
        medicines: number;
        maintenance: number;
      };
    };
    staffBreakdown: {
      doctors: {
        specialists: number;
        general: number;
        residents: number;
      };
      nurses: {
        senior: number;
        junior: number;
        trainees: number;
      };
      paramedical: {
        technicians: number;
        assistants: number;
        others: number;
      };
    };
    bedTypes: {
      icu: number;
      general: number;
      emergency: number;
      pediatric: number;
      maternity: number;
    };
  };
  onBack: () => void;
}

export function HospitalDetails({ hospital, onBack }: HospitalDetailsProps) {
  const occupancyRate = Math.round((hospital.occupiedBeds / hospital.totalBeds) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{hospital.name}</h1>
            <p className="text-gray-600">{hospital.district}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Printer className="h-5 w-5" />
            Print Report
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Data
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Bed className="h-6 w-6 text-teal-600" />
            </div>
            <span className={`text-sm font-medium ${
              occupancyRate >= 80 ? 'text-red-600' : 'text-green-600'
            }`}>
              {occupancyRate}% Occupied
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Beds</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{hospital.totalBeds}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Stethoscope className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+5% MTD</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Medical Staff</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{hospital.doctors + hospital.staff}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Package className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">2 Need Service</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Equipment</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {Object.values(hospital.equipment).reduce((a, b) => a + b, 0)}
          </p>
        </div>

        {hospital.type === 'government' && hospital.fundDetails && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Wallet className="h-6 w-6 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-green-600">On Track</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Fund Utilization</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {hospital.fundDetails.utilized}
            </p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bed Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Bed Distribution</h3>
          <div className="space-y-4">
            {Object.entries(hospital.bedTypes).map(([type, count]) => (
              <div key={type}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {type} Beds
                  </span>
                  <span className="text-sm text-gray-500">{count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: `${(count / hospital.totalBeds) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Status */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Equipment Status</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(hospital.equipment).map(([key, value]) => (
              <div key={key} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Staff Distribution</h3>
          <div className="space-y-6">
            {Object.entries(hospital.staffBreakdown).map(([category, breakdown]) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-gray-700 capitalize mb-3">
                  {category}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(breakdown).map(([role, count]) => (
                    <div key={role} className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 capitalize">{role}</p>
                      <p className="text-lg font-semibold text-gray-900">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fund Utilization for Government Hospitals */}
        {hospital.type === 'government' && hospital.fundDetails && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Fund Utilization</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Allocation</p>
                <p className="text-lg font-semibold text-gray-900">
                  {hospital.fundDetails.totalAllocation}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Utilized</p>
                <p className="text-lg font-semibold text-green-600">
                  {hospital.fundDetails.utilized}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Remaining</p>
                <p className="text-lg font-semibold text-blue-600">
                  {hospital.fundDetails.remaining}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {Object.entries(hospital.fundDetails.utilizationByDepartment).map(([dept, percentage]) => (
                <div key={dept}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {dept}
                    </span>
                    <span className="text-sm text-gray-500">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}