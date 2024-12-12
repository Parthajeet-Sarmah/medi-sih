import React from 'react';
import { Building2, Building, Home, MapPin, Bed, Users } from 'lucide-react';

interface HospitalCardProps {
  hospital: {
    id: number;
    name: string;
    type: string;
    district: string;
    totalBeds: number;
    occupiedBeds: number;
    totalStaff: number;
    status: 'active' | 'maintenance' | 'critical';
  };
  onViewDetails: () => void;
}

export function HospitalCard({ hospital, onViewDetails }: HospitalCardProps) {
  const getTypeIcon = () => {
    switch (hospital.type) {
      case 'government':
        return <Building2 className="h-5 w-5 text-teal-600" />;
      case 'private':
        return <Building className="h-5 w-5 text-teal-600" />;
      default:
        return <Home className="h-5 w-5 text-teal-600" />;
    }
  };

  const getStatusColor = () => {
    switch (hospital.status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const occupancyRate = Math.round((hospital.occupiedBeds / hospital.totalBeds) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-50 rounded-lg">
            {getTypeIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {hospital.district}
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor()}`}>
          {hospital.status.charAt(0).toUpperCase() + hospital.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
            <Bed className="h-4 w-4" />
            <span>Beds</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {hospital.occupiedBeds}/{hospital.totalBeds}
          </p>
          <p className="text-xs text-gray-500">{occupancyRate}% Occupied</p>
        </div>

        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
            <Users className="h-4 w-4" />
            <span>Staff</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{hospital.totalStaff}</p>
          <p className="text-xs text-gray-500">Total Members</p>
        </div>

        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
            <Building2 className="h-4 w-4" />
            <span>Type</span>
          </div>
          <p className="text-lg font-semibold text-gray-900 capitalize">{hospital.type}</p>
          <p className="text-xs text-gray-500">Facility</p>
        </div>
      </div>

      <button 
        onClick={onViewDetails}
        className="btn-primary w-full"
      >
        View Details
      </button>
    </div>
  );
}