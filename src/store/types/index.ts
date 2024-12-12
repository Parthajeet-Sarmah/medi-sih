// Common types used across the application
export interface Appointment {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending';
  location: string;
}

export interface MedicalRecord {
  id: number;
  name: string;
  date: string;
  type: string;
  doctor: string;
  size: string;
}

export interface Prescription {
  id: number;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  doctor: string;
  date: string;
  status: 'active' | 'completed';
  refills: number;
}

export interface VitalRecord {
  id: number;
  type: string;
  value: number;
  unit: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
}

export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: number;
  doctor: string;
  specialty: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}