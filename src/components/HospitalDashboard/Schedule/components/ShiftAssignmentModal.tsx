import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Doctor } from '../types';
import { ShiftType, Shift } from '../types/shifts';
import { getShiftLabel, SHIFT_TIMINGS } from '../utils/shiftUtils';

interface ShiftAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (shiftData: Partial<Shift>) => void;
  doctors: Doctor[];
  selectedDate: Date;
  editShift?: Shift;
}

export function ShiftAssignmentModal({
  isOpen,
  onClose,
  onSubmit,
  doctors,
  selectedDate,
  editShift
}: ShiftAssignmentModalProps) {
  const [formData, setFormData] = useState<Partial<Shift>>(
    editShift || {
      doctorId: '',
      type: 'morning',
      date: selectedDate.toISOString().split('T')[0],
      isOnCall: false
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shiftTiming = SHIFT_TIMINGS[formData.type as ShiftType];
    onSubmit({
      ...formData,
      startTime: shiftTiming.start,
      endTime: shiftTiming.end
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="relative bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {editShift ? 'Edit Shift Assignment' : 'New Shift Assignment'}
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Doctor
              </label>
              <select
                className="input-field"
                value={formData.doctorId}
                onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.department}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shift Type
              </label>
              <select
                className="input-field"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as ShiftType })}
                required
              >
                {(['morning', 'afternoon', 'night'] as ShiftType[]).map((type) => (
                  <option key={type} value={type}>
                    {getShiftLabel(type)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isOnCall"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                checked={formData.isOnCall}
                onChange={(e) => setFormData({ ...formData, isOnCall: e.target.checked })}
              />
              <label htmlFor="isOnCall" className="ml-2 block text-sm text-gray-700">
                On Call Duty
              </label>
            </div>

            <div className="flex gap-3 mt-6">
              <button type="button" onClick={onClose} className="btn-secondary flex-1">
                Cancel
              </button>
              <button type="submit" className="btn-primary flex-1">
                {editShift ? 'Update' : 'Assign'} Shift
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}