import React, { useState } from 'react';
import { Users, UserPlus, Briefcase, Award } from 'lucide-react';
import { StaffCard } from './components/StaffCard';
import { DepartmentFilter } from './components/DepartmentFilter';

const staffMembers = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    role: 'Senior Doctor',
    department: 'Cardiology',
    email: 'sarah.wilson@hospital.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2022-03-15',
    specialization: 'Interventional Cardiology',
    status: 'active' as const,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Doctor',
    department: 'Neurology',
    email: 'michael.chen@hospital.com',
    phone: '+1 (555) 234-5678',
    joinDate: '2023-01-10',
    specialization: 'Neurological Surgery',
    status: 'active' as const,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    role: 'Head Nurse',
    department: 'Emergency',
    email: 'emma.thompson@hospital.com',
    phone: '+1 (555) 345-6789',
    joinDate: '2021-06-20',
    status: 'on-leave' as const,
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&h=300&q=80'
  }
];

export function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedRole, setSelectedRole] = useState('All Roles');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital staff and departments</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Add Staff Member
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Staff</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">215</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">+3%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Departments</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Doctors</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">85</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-red-600">-2%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">On Leave</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <DepartmentFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />

        <div className="mt-6 space-y-6">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} {...staff} />
          ))}
        </div>
      </div>
    </div>
  );
}