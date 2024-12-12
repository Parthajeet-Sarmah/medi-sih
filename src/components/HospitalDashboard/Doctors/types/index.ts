export interface Doctor {
  id: string;
  uniqueId: string;
  name: string;
  department: string;
  specialization: string;
  qualification: string;
  experience: number;
  email: string;
  phone: string;
  avatar?: string;
  status: 'available' | 'in-consultation' | 'on-leave' | 'off-duty';
  nextAvailableSlot?: string;
  consultationRoom?: string;
}

export interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'present' | 'absent' | 'half-day' | 'on-leave';
  totalHours: number;
  consultations: number;
}

export interface DoctorStats {
  totalPatients: number;
  averageRating: number;
  consultationsToday: number;
  attendancePercentage: number;
}