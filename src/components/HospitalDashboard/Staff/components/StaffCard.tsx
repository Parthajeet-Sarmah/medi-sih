import React from 'react';
import { Mail, Phone, Calendar, Award } from 'lucide-react';

interface StaffCardProps {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  specialization?: string;
  status: 'active' | 'on-leave' | 'inactive';
  avatar?: string;
}

export function StaffCard({
  name,
  role,
  department,
  email,
  phone,
  joinDate,
  specialization,
  status,
  avatar
}: StaffCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <img
          src={avatar || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=80&h=80&q=80"}
          alt={name}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : status === 'on-leave'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{department}</span>
            </div>
            {specialization && (
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{specialization}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Joined {new Date(joinDate).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="btn-secondary text-sm py-2">View Schedule</button>
            <button className="btn-primary text-sm py-2">Edit Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}