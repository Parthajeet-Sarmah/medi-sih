import { StateCreator } from 'zustand';
import { Prescription } from '../types';

export interface PrescriptionSlice {
  prescriptions: Prescription[];
  addPrescription: (prescription: Omit<Prescription, 'id'>) => void;
}

export const createPrescriptionSlice: StateCreator<PrescriptionSlice> = (set) => ({
  prescriptions: [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      duration: '7 days',
      doctor: 'Dr. Sarah Wilson',
      date: '2024-03-15',
      status: 'active',
      refills: 2
    },
    {
      id: 2,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: '30 days',
      doctor: 'Dr. Michael Chen',
      date: '2024-03-10',
      status: 'active',
      refills: 5
    }
  ],
  addPrescription: (prescription) =>
    set((state) => ({
      prescriptions: [
        ...state.prescriptions,
        { ...prescription, id: state.prescriptions.length + 1 }
      ]
    }))
});