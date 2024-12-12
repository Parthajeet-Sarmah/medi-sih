import React from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';

interface EquipmentCardProps {
  id: number;
  name: string;
  category: string;
  totalUnits: number;
  availableUnits: number;
  inMaintenance: number;
  lastMaintenance: string;
  nextMaintenance: string;
  status: 'operational' | 'maintenance' | 'critical';
  department: string;
}

export function EquipmentCard({
  name,
  category,
  totalUnits,
  availableUnits,
  inMaintenance,
  lastMaintenance,
  nextMaintenance,
  status,
  department
}: EquipmentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5" />;
      case 'maintenance':
        return <Activity className="h-5 w-5" />;
      case 'critical':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const utilizationRate = ((totalUnits - availableUnits) / totalUnits) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(status)}`}>
          {getStatusIcon(status)}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Total Units</p>
          <p className="text-lg font-semibold text-gray-900">{totalUnits}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Available</p>
          <p className="text-lg font-semibold text-green-600">{availableUnits}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">In Maintenance</p>
          <p className="text-lg font-semibold text-yellow-600">{inMaintenance}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Utilization Rate</span>
          <span className="font-medium text-gray-900">{Math.round(utilizationRate)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              utilizationRate > 80 ? 'bg-red-500' : utilizationRate > 60 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${utilizationRate}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Last Maintenance</p>
          <p className="text-sm font-medium text-gray-900">{lastMaintenance}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Next Maintenance</p>
          <p className="text-sm font-medium text-gray-900">{nextMaintenance}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{department}</span>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm py-2">Schedule Maintenance</button>
          <button className="btn-primary text-sm py-2">View Details</button>
        </div>
      </div>
    </div>
  );
}