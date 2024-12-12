import React, { useEffect, useState } from 'react';
import { AppointmentCard } from './components/AppointmentCard';
import { AppointmentFilters } from './components/AppointmentFilters';
import { usePatientStore } from '../../../store/usePatientStore';
import { createAppointment } from '../../../services/appointmentService';

export function Appointments() {
  const [searchTerm, setSearchTerm] = useState('');
  const appointments = usePatientStore((state) => ({ appointments: state.appointments, fetchAppointments: state.fetchAppointments }));

  useEffect(() => {
    appointments.fetchAppointments();
  }, [appointments.fetchAppointments])

  const filteredAppointments = appointments.appointments.filter((appointment) =>
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateAppointment = async () => {
    try {
      const appointmentData = {
        doctorName: "Dr. Keira Samson",
        designation: "Dermatologist",
        date: "2024-12-15",
        location: "City Hospital, Room 301",
        time: "10:00 AM",
        status: "pending",
      };
  
      const appointmentId = await createAppointment(appointmentData);
      alert(`Appointment created with ID: ${appointmentId}`);
      appointments.fetchAppointments();

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      alert(errorMessage);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your upcoming appointments</p>
        </div>
        <button className="btn-primary text-sm sm:text-base py-2 px-4" onClick={handleCreateAppointment}>
          Book New Appointment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <AppointmentFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mt-6 space-y-4">
          {filteredAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              doctor={appointment.doctor}
              specialty={appointment.specialty}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              location={appointment.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}