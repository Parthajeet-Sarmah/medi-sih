import { StateCreator } from 'zustand';
import { MedicalRecord } from '../types';

export interface MedicalRecordSlice {
  medicalRecords: MedicalRecord[];
  addMedicalRecord: (record: Omit<MedicalRecord, 'id'>) => void;
}

export const createMedicalRecordSlice: StateCreator<MedicalRecordSlice> = (set) => ({
  medicalRecords: [
    {
      id: 1,
      name: 'Blood Test Results',
      date: '2024-03-15',
      type: 'Lab Report',
      doctor: 'Dr. Sarah Wilson',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Vaccination Certificate',
      date: '2024-03-10',
      type: 'Certificate',
      doctor: 'Dr. Michael Chen',
      size: '1.8 MB'
    }
  ],
  addMedicalRecord: (record) =>
    set((state) => ({
      medicalRecords: [
        ...state.medicalRecords,
        { ...record, id: state.medicalRecords.length + 1 }
      ]
    }))
});