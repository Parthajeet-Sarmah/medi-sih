import { Doctor } from '../../Doctors/types';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  registrationDate: string;
  assignedDoctor: Doctor;
  status: 'active' | 'admitted' | 'discharged' | 'critical';
}

export interface LabReport {
  id: string;
  patientId: string;
  type: string;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
  results?: {
    parameter: string;
    value: string;
    normalRange: string;
    status: 'normal' | 'abnormal' | 'critical';
  }[];
  doctorNotes?: string;
  nextFollowUp?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  type: 'consultation' | 'follow-up' | 'procedure';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface HealthInsight {
  id: string;
  patientId: string;
  category: 'vital-trends' | 'medication-adherence' | 'lifestyle' | 'risk-factors';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  recommendations: string[];
  date: string;
}