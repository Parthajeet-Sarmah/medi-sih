import { StateCreator } from 'zustand';
import { Appointment } from '../types';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface AppointmentSlice {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  fetchAppointments: () => Promise<void>;
}

export const createAppointmentSlice: StateCreator<AppointmentSlice> = (set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [
        ...state.appointments,
        { ...appointment, id: `temp-${state.appointments.length + 1}` },
      ],
    })),
  fetchAppointments: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'appointments'));
      const fetchedAppointments: Appointment[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedAppointments.push({
          id: doc.id, // Firestore document ID is used as the appointment ID
          doctor: data.doctorName,
          specialty: data.designation,
          date: data.date,
          time: data.time,
          status: data.status || 'pending', // Default status if not found
          location: data.location,
        });
      });

      set({ appointments: fetchedAppointments });
    } catch (error) {
      console.error('Error fetching appointments:', error);
      // Optionally, handle the error (e.g., set an error state in Zustand)
    }
  },
});
