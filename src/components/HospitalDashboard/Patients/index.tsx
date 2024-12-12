import React, { useState } from 'react';
import { Search, UserPlus, Users, Activity, FileText, Calendar } from 'lucide-react';
import { PatientCard } from './components/PatientCard';
import { LabReportsList } from './components/LabReportsList';
import { AppointmentsList } from './components/AppointmentsList';
import { HealthInsightCard } from './components/HealthInsightCard';
import type { Patient, LabReport, Appointment, HealthInsight } from './types';

// Mock data would go here...
// (I'll include sample data in the implementation details below)

export function Patients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'reports' | 'appointments' | 'insights'>('reports');

  const handleViewDetails = (patientId: string) => {
    setSelectedPatient(patientId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600 mt-1">View and manage patient records</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Add New Patient
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Patients</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">2,845</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">+5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Active Cases</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">482</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Calendar className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Appointments Today</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">124</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Lab Reports</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">89</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              className="pl-10 input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="input-field sm:w-48">
            <option>All Status</option>
            <option>Active</option>
            <option>Admitted</option>
            <option>Discharged</option>
            <option>Critical</option>
          </select>
        </div>

        {/* Patient List or Details */}
        <div className="mt-6">
          {selectedPatient ? (
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex gap-4 border-b border-gray-200">
                {(['reports', 'appointments', 'insights'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-teal-600 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === 'reports' && (
                  <LabReportsList reports={[]} /> // Pass actual reports here
                )}
                {activeTab === 'appointments' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
                    <AppointmentsList appointments={[]} type="upcoming" />
                    <h3 className="text-lg font-semibold text-gray-900">Previous Appointments</h3>
                    <AppointmentsList appointments={[]} type="previous" />
                  </div>
                )}
                {activeTab === 'insights' && (
                  <div className="space-y-4">
                    {/* Pass actual insights here */}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Pass actual patients here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}