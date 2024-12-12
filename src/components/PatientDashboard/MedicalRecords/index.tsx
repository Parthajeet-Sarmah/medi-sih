import React, { useState } from 'react';
import { RecordCard } from './components/RecordCard';
import { RecordFilters } from './components/RecordFilters';
import { usePatientStore } from '../../../store/usePatientStore';

export function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const records = usePatientStore((state) => state.medicalRecords);

  const filteredRecords = records.filter((record) => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || record.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Access and manage your health records</p>
        </div>
        <button className="btn-primary text-sm sm:text-base py-2 px-4">
          Upload New Record
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <RecordFilters
          searchTerm={searchTerm}
          selectedType={selectedType}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedType}
        />

        <div className="mt-6 space-y-4">
          {filteredRecords.map((record) => (
            <RecordCard
              key={record.id}
              name={record.name}
              date={record.date}
              type={record.type}
              doctor={record.doctor}
              size={record.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}