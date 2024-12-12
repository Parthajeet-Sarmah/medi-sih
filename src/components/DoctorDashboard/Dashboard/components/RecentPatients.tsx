import React from 'react';
import { Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const recentPatients = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    condition: 'Hypertension',
    lastVisit: '2024-03-15',
    status: 'active',
    nextAppointment: '2024-03-22'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    condition: 'Diabetes Type 2',
    lastVisit: '2024-03-14',
    status: 'critical',
    nextAppointment: '2024-03-20'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    age: 28,
    condition: 'Post Surgery Care',
    lastVisit: '2024-03-13',
    status: 'recovered',
    nextAppointment: '2024-03-25'
  }
];

export function RecentPatients() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Activity className="h-5 w-5 text-blue-500" />;
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'recovered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'recovered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Patients</h2>
      <div className="space-y-4">
        {recentPatients.map((patient) => (
          <div key={patient.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-500">
                  {patient.age} years • {patient.condition}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(patient.status)}`}>
                {getStatusIcon(patient.status)}
                {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
              </div>
              <div>
                Next: {new Date(patient.nextAppointment).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 text-sm text-teal-600 hover:text-teal-700 font-medium">
        View All Patients →
      </button>
    </div>
  );
}