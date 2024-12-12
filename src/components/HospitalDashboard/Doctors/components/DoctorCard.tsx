import React from 'react';
import { Clock, Star, Users, Activity } from 'lucide-react';
import { Doctor, DoctorStats } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  stats: DoctorStats;
  onViewProfile: (id: string) => void;
}

export function DoctorCard({ doctor, stats, onViewProfile }: DoctorCardProps) {
  const getStatusColor = (status: Doctor['status']) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'in-consultation':
        return 'bg-yellow-100 text-yellow-800';
      case 'on-leave':
        return 'bg-red-100 text-red-800';
      case 'off-duty':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <img
          src={doctor.avatar || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=80&h=80&q=80"}
          alt={doctor.name}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">
                {doctor.specialization} • {doctor.department}
              </p>
              <p className="text-xs text-gray-400 mt-1">ID: {doctor.uniqueId}</p>
            </div>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(doctor.status)}`}>
              {doctor.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Total Patients</p>
                <p className="text-sm font-semibold text-gray-900">{stats.totalPatients}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <p className="text-sm font-semibold text-gray-900">{stats.averageRating}/5</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Today's Consultations</p>
                <p className="text-sm font-semibold text-gray-900">{stats.consultationsToday}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Attendance</p>
                <p className="text-sm font-semibold text-gray-900">{stats.attendancePercentage}%</p>
              </div>
            </div>
          </div>

          {doctor.status === 'available' && doctor.consultationRoom && (
            <p className="mt-3 text-sm text-green-600">
              Available in Room {doctor.consultationRoom}
            </p>
          )}
          
          {doctor.status === 'in-consultation' && doctor.nextAvailableSlot && (
            <p className="mt-3 text-sm text-yellow-600">
              Next available at {doctor.nextAvailableSlot}
            </p>
          )}

          <div className="mt-4 flex gap-2">
            <button 
              className="btn-secondary text-sm py-2"
              onClick={() => onViewProfile(doctor.id)}
            >
              View Profile
            </button>
            <button className="btn-primary text-sm py-2">Schedule Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}