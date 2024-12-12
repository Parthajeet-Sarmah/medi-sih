import React from 'react';
import { DoctorShift, ShiftType } from '../types/shifts';
import { getShiftLabel, getShiftColor } from '../utils/shiftUtils';

interface ShiftCalendarProps {
  shifts: DoctorShift[];
  selectedDate: Date;
}

export function ShiftCalendar({ shifts, selectedDate }: ShiftCalendarProps) {
  const shiftTypes: ShiftType[] = ['morning', 'afternoon', 'night'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Shift Schedule - {selectedDate.toLocaleDateString()}
      </h3>
      
      <div className="space-y-4">
        {shiftTypes.map((shiftType) => {
          const shiftDoctors = shifts.filter(shift => shift.type === shiftType);
          
          return (
            <div key={shiftType} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getShiftColor(shiftType)}`}>
                  {getShiftLabel(shiftType)}
                </span>
                <span className="text-sm text-gray-500">
                  {shiftDoctors.length} doctors assigned
                </span>
              </div>

              <div className="space-y-2">
                {shiftDoctors.map((shift) => (
                  <div key={shift.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={shift.doctor.avatar || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=32&h=32&q=80"}
                        alt={shift.doctor.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{shift.doctor.name}</p>
                        <p className="text-sm text-gray-500">{shift.doctor.department}</p>
                      </div>
                    </div>
                    {shift.isOnCall && (
                      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                        On Call
                      </span>
                    )}
                  </div>
                ))}

                {shiftDoctors.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-2">
                    No doctors assigned to this shift
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}