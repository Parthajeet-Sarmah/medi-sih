import React from 'react';
import { User, Phone, Mail, Calendar, Activity } from 'lucide-react';
import { Patient } from '../types';

interface PatientCardProps {
  patient: Patient;
  onViewDetails: (id: string) => void;
}

export function PatientCard({ patient, onViewDetails }: PatientCardProps) {
  const getStatusColor = (status: Patient['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'admitted':
        return 'bg-yellow-100 text-yellow-800';
      case 'discharged':
        return 'bg-blue-100 text-blue-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-100 rounded-lg">
          <User className="h-6 w-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
              <p className="text-sm text-gray-500">
                {patient.age} years • {patient.gender} • {patient.bloodGroup}
              </p>
            </div>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(patient.status)}`}>
              {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{patient.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{patient.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Registered: {new Date(patient.registrationDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Dr. {patient.assignedDoctor.name}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button 
              className="btn-secondary text-sm py-2"
              onClick={() => onViewDetails(patient.id)}
            >
              View Details
            </button>
            <button className="btn-primary text-sm py-2">Update Status</button>
          </div>
        </div>
      </div>
    </div>
  );
}