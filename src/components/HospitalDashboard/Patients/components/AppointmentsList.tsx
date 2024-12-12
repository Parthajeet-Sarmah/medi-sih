import React from 'react';
import { Calendar, Clock, User, FileText } from 'lucide-react';
import { Appointment } from '../types';

interface AppointmentsListProps {
  appointments: Appointment[];
  type: 'upcoming' | 'previous';
}

export function AppointmentsList({ appointments, type }: AppointmentsListProps) {
  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-900">
                  {new Date(appointment.date).toLocaleDateString()}
                </span>
                <Clock className="h-4 w-4 text-gray-400 ml-2" />
                <span className="text-sm text-gray-600">{appointment.time}</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Dr. {appointment.doctorId}</span>
              </div>
            </div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>

          {appointment.notes && (
            <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
              <FileText className="h-4 w-4 text-gray-400 mt-0.5" />
              <p>{appointment.notes}</p>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            {type === 'upcoming' ? (
              <>
                <button className="btn-secondary text-sm py-1.5 px-3">Reschedule</button>
                <button className="btn-primary text-sm py-1.5 px-3">Start Consultation</button>
              </>
            ) : (
              <button className="btn-primary text-sm py-1.5 px-3">View Details</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}