import { create } from 'zustand';
import { BedManagementState, Bed, BedAllocation } from './types/hospital';

export const useHospitalStore = create<BedManagementState>((set, get) => ({
  beds: [
    // ICU Beds
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `icu-${i + 1}`,
      type: 'icu',
      number: `ICU-${i + 1}`,
      status: 'available'
    } as Bed)),
    // General Ward Beds
    ...Array.from({ length: 200 }, (_, i) => ({
      id: `general-${i + 1}`,
      type: 'general',
      number: `GEN-${i + 1}`,
      status: 'available'
    } as Bed)),
    // Emergency Beds
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `emergency-${i + 1}`,
      type: 'emergency',
      number: `EMG-${i + 1}`,
      status: 'available'
    } as Bed)),
    // Pediatric Beds
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `pediatric-${i + 1}`,
      type: 'pediatric',
      number: `PED-${i + 1}`,
      status: 'available'
    } as Bed)),
    // Maternity Beds
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `maternity-${i + 1}`,
      type: 'maternity',
      number: `MAT-${i + 1}`,
      status: 'available'
    } as Bed))
  ],

  allocateBed: (allocation: BedAllocation) =>
    set((state) => ({
      beds: state.beds.map((bed) =>
        bed.type === allocation.bedType && bed.number === allocation.bedNumber
          ? {
              ...bed,
              status: 'occupied',
              patient: {
                name: allocation.patientName,
                id: allocation.patientId,
                admissionDate: allocation.admissionDate
              }
            }
          : bed
      )
    })),

  updateBedStatus: (bedId: string, status: Bed['status']) =>
    set((state) => ({
      beds: state.beds.map((bed) =>
        bed.id === bedId ? { ...bed, status } : bed
      )
    })),

  getBedsByType: (type: string) => {
    const state = get();
    return state.beds.filter((bed) => bed.type === type);
  },

  getBedOccupancyByType: (type: string) => {
    const state = get();
    const beds = state.beds.filter((bed) => bed.type === type);
    return {
      total: beds.length,
      occupied: beds.filter((bed) => bed.status === 'occupied').length,
      available: beds.filter((bed) => bed.status === 'available').length
    };
  }
}));