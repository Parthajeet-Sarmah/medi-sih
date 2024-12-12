export interface Bed {
  id: string;
  type: 'icu' | 'general' | 'emergency' | 'pediatric' | 'maternity';
  number: string;
  status: 'available' | 'occupied' | 'maintenance';
  patient?: {
    name: string;
    id: string;
    admissionDate: string;
  };
}

export interface BedAllocation {
  patientName: string;
  patientId: string;
  bedType: string;
  bedNumber: string;
  admissionDate: string;
  notes: string;
}

export interface BedManagementState {
  beds: Bed[];
  allocateBed: (allocation: BedAllocation) => void;
  updateBedStatus: (bedId: string, status: Bed['status']) => void;
  getBedsByType: (type: string) => Bed[];
  getBedOccupancyByType: (type: string) => {
    total: number;
    occupied: number;
    available: number;
  };
}