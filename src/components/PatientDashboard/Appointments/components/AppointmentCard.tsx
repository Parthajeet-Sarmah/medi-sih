import React from 'react';
import { Calendar, Clock } from 'lucide-react';


interface AppointmentCardProps {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: string;
  location: string;
}

export function AppointmentCard({ doctor, specialty, date, time, status, location }: AppointmentCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-2">
          <div>
            <h3 className="font-medium text-gray-900 text-sm sm:text-base">{doctor}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{specialty}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {time}
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500">{location}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span
            className={`self-start px-2 py-1 text-xs font-medium rounded-full ${
              status === 'confirmed'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          
          <div className="flex gap-2">
            <button className="btn-secondary text-xs sm:text-sm py-1.5 px-3">Reschedule</button>
            <button className="btn-primary text-xs sm:text-sm py-1.5 px-3">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}