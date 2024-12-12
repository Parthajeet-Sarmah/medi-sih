export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  lastVisit: string;
  nextAppointment?: string;
  condition: string;
  status: 'active' | 'recovered' | 'critical';
}

export interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  time: string;
  type: 'checkup' | 'follow-up' | 'emergency';
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Bill {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  type: 'consultation' | 'procedure' | 'test';
}

export interface DoctorStats {
  totalPatients: number;
  totalAppointments: number;
  totalEarnings: number;
  pendingBills: number;
  appointmentsToday: number;
  newPatientsThisMonth: number;
  averageRating: number;
}