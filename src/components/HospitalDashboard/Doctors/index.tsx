import React, { useState } from 'react';
import { UserPlus, Users, Clock, Star, Activity } from 'lucide-react';
import { DoctorCard } from './components/DoctorCard';
import { DoctorFilters } from './components/DoctorFilters';
import { AttendanceTable } from './components/AttendanceTable';
import { Doctor, AttendanceRecord, DoctorStats } from './types';

const mockDoctors: Array<Doctor & { stats: DoctorStats }> = [
  {
    id: '1',
    uniqueId: 'DOC001',
    name: 'Dr. Sarah Wilson',
    department: 'Cardiology',
    specialization: 'Interventional Cardiology',
    qualification: 'MD, DM',
    experience: 12,
    email: 'sarah.wilson@hospital.com',
    phone: '+1 (555) 123-4567',
    status: 'available',
    consultationRoom: '302',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=300&q=80',
    stats: {
      totalPatients: 1250,
      averageRating: 4.8,
      consultationsToday: 8,
      attendancePercentage: 98
    }
  },
  {
    id: '2',
    uniqueId: 'DOC002',
    name: 'Dr. Michael Chen',
    department: 'Neurology',
    specialization: 'Neurological Surgery',
    qualification: 'MD, DNB',
    experience: 15,
    email: 'michael.chen@hospital.com',
    phone: '+1 (555) 234-5678',
    status: 'in-consultation',
    nextAvailableSlot: '2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300&q=80',
    stats: {
      totalPatients: 980,
      averageRating: 4.9,
      consultationsToday: 6,
      attendancePercentage: 95
    }
  }
];

const mockAttendance: AttendanceRecord[] = [
  {
    date: '2024-03-20',
    checkIn: '08:00 AM',
    checkOut: '05:00 PM',
    status: 'present',
    totalHours: 9,
    consultations: 12
  },
  {
    date: '2024-03-19',
    checkIn: '08:15 AM',
    checkOut: '04:30 PM',
    status: 'present',
    totalHours: 8.25,
    consultations: 10
  },
  {
    date: '2024-03-18',
    checkIn: '08:00 AM',
    checkOut: '02:00 PM',
    status: 'half-day',
    totalHours: 6,
    consultations: 6
  }
];

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [showAttendance, setShowAttendance] = useState(false);

  const handleViewProfile = (id: string) => {
    setShowAttendance(!showAttendance);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctors Management</h1>
          <p className="text-gray-600 mt-1">Monitor doctors' availability and performance</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Add New Doctor
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Doctors</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">85</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Available Now</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">32</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Star className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Avg. Rating</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">4.8</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Clock className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+3%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">96%</p>
        </div>
      </div>

      {/* Filters and Doctor List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <DoctorFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        <div className="mt-6 space-y-6">
          {mockDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              stats={doctor.stats}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      </div>

      {/* Attendance Records */}
      {showAttendance && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Attendance Records</h2>
            <button className="btn-secondary text-sm">Download Report</button>
          </div>
          <AttendanceTable records={mockAttendance} />
        </div>
      )}
    </div>
  );
}