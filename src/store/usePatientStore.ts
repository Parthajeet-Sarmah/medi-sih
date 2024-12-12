import { create } from 'zustand';
import { AppointmentSlice, createAppointmentSlice } from './slices/appointmentSlice';
import { MedicalRecordSlice, createMedicalRecordSlice } from './slices/medicalRecordSlice';
import { PrescriptionSlice, createPrescriptionSlice } from './slices/prescriptionSlice';
import { VitalSlice, createVitalSlice } from './slices/vitalSlice';
import { MessageSlice, createMessageSlice } from './slices/messageSlice';

type PatientStore = AppointmentSlice & MedicalRecordSlice & PrescriptionSlice & VitalSlice & MessageSlice;

export const usePatientStore = create<PatientStore>()((...args) => ({
  ...createAppointmentSlice(...args),
  ...createMedicalRecordSlice(...args),
  ...createPrescriptionSlice(...args),
  ...createVitalSlice(...args),
  ...createMessageSlice(...args),
}));