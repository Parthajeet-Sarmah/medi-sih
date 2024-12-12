import React from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';
import type { Patient } from '../types';

interface PatientInsightsProps {
  recentPatients: Patient[];
}

export function PatientInsights({ recentPatients }: PatientInsightsProps) {
  const getStatusIcon = (status: Patient['status']) => {
    switch (status) {
      case 'active':
        return <Activity className="h-5 w-5 text-yellow-500" />;
      case 'recovered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Patient Insights</h2>
      <div className="space-y-4">
        {recentPatients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{patient.name}</h3>
              <p className="text-sm text-gray-500">
                {patient.age} years • {patient.gender} • {patient.condition}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                {getStatusIcon(patient.status)}
                <span className="text-sm font-medium capitalize">{patient.status}</span>
              </div>
              {patient.nextAppointment && (
                <p className="text-xs text-gray-500">
                  Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                </p>
              )}
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