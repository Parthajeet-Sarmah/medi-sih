import React from 'react';
import { Clock, User, MapPin } from 'lucide-react';
import { Schedule } from '../types';
import { formatTime } from '../utils/dateUtils';

interface ScheduleListProps {
  schedules: Schedule[];
  onScheduleSelect: (schedule: Schedule) => void;
}

export function ScheduleList({ schedules, onScheduleSelect }: ScheduleListProps) {
  const getStatusColor = (status: Schedule['status']) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
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
      {schedules.map((schedule) => (
        <div
          key={schedule.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onScheduleSelect(schedule)}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-medium text-gray-900">{schedule.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <User className="h-4 w-4" />
                <span>{schedule.patientName}</span>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
              {schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
              </span>
            </div>
            {schedule.room && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Room {schedule.room}</span>
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <img
              src={schedule.doctor.avatar || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=32&h=32&q=80"}
              alt={schedule.doctor.name}
              className="h-6 w-6 rounded-full"
            />
            <div className="text-sm">
              <span className="text-gray-900 font-medium">{schedule.doctor.name}</span>
              <span className="text-gray-500 mx-1">•</span>
              <span className="text-gray-500">{schedule.doctor.department}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}