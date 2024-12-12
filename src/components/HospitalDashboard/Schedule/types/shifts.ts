export type ShiftType = 'morning' | 'afternoon' | 'night';

export interface Shift {
  id: string;
  doctorId: string;
  type: ShiftType;
  startTime: string;
  endTime: string;
  date: string;
  isOnCall?: boolean;
}

export interface DoctorShift extends Shift {
  doctor: {
    id: string;
    name: string;
    department: string;
    avatar?: string;
  };
}

export interface ShiftTimings {
  morning: { start: string; end: string };
  afternoon: { start: string; end: string };
  night: { start: string; end: string };
}