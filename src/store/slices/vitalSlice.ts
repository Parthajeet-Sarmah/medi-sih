import { StateCreator } from 'zustand';
import { format } from 'date-fns';
import { VitalRecord } from '../types';

export interface VitalSlice {
  vitals: VitalRecord[];
  addVitalRecord: (vital: Omit<VitalRecord, 'id'>) => void;
}

export const createVitalSlice: StateCreator<VitalSlice> = (set) => ({
  vitals: [
    {
      id: 1,
      type: 'Heart Rate',
      value: 72,
      unit: 'bpm',
      date: format(new Date(), 'yyyy-MM-dd'),
      trend: 'stable'
    },
    {
      id: 2,
      type: 'Blood Pressure',
      value: 120,
      unit: 'mmHg',
      date: format(new Date(), 'yyyy-MM-dd'),
      trend: 'up'
    }
  ],
  addVitalRecord: (vital) =>
    set((state) => ({
      vitals: [
        ...state.vitals,
        { ...vital, id: state.vitals.length + 1 }
      ]
    }))
});