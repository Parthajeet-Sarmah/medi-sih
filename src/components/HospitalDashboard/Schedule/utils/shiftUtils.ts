import { ShiftType, ShiftTimings } from '../types/shifts';

export const SHIFT_TIMINGS: ShiftTimings = {
  morning: { start: '06:00', end: '14:00' },
  afternoon: { start: '14:00', end: '22:00' },
  night: { start: '22:00', end: '06:00' }
};

export function getShiftLabel(type: ShiftType): string {
  switch (type) {
    case 'morning':
      return 'Morning Shift (6 AM - 2 PM)';
    case 'afternoon':
      return 'Afternoon Shift (2 PM - 10 PM)';
    case 'night':
      return 'Night Shift (10 PM - 6 AM)';
    default:
      return '';
  }
}

export function getShiftColor(type: ShiftType): string {
  switch (type) {
    case 'morning':
      return 'bg-yellow-100 text-yellow-800';
    case 'afternoon':
      return 'bg-blue-100 text-blue-800';
    case 'night':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}