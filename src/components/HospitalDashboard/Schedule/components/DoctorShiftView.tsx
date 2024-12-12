import React from 'react';
import { DoctorShift } from '../types/shifts';
import { getShiftLabel, getShiftColor } from '../utils/shiftUtils';

interface DoctorShiftViewProps {
  doctor: {
    id: string;
    name: string;
    department: string;
    avatar?: string;
  };
  shifts: DoctorShift[];
  onEditShift: (shift: DoctorShift) => void;
}

export function DoctorShiftView({ doctor, shifts, onEditShift }: DoctorShiftViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={doctor.avatar || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=64&h=64&q=80"}
          alt={doctor.name}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-500">{doctor.department}</p>
        </div>
      </div>

      <div className="space-y-2">
        {shifts.map((shift) => (
          <div
            key={shift.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => onEditShift(shift)}
          >
            <div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getShiftColor(shift.type)}`}>
                {getShiftLabel(shift.type)}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(shift.date).toLocaleDateString()}
              </p>
            </div>
            {shift.isOnCall && (
              <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                On Call
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}