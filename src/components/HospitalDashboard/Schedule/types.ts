import { LucideIcon } from 'lucide-react';

export type ScheduleStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';

export interface Doctor {
  id: string;
  name: string;
  department: string;
  avatar?: string;
}

export interface Schedule {
  id: string;
  title: string;
  doctor: Doctor;
  patientName: string;
  patientId: string;
  date: string;
  startTime: string;
  endTime: string;
  type: 'appointment' | 'surgery' | 'consultation';
  status: ScheduleStatus;
  notes?: string;
  room?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  hasEvents: boolean;
}