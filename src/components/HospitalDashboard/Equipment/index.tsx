import React, { useState } from 'react';
import { Search, Plus, Filter, Activity } from 'lucide-react';
import { EquipmentCard } from './EquipmentCard';
import { EquipmentModal } from './EquipmentModal';

const equipmentData = [
  {
    id: 1,
    name: 'MRI Scanner',
    category: 'Diagnostic Equipment',
    totalUnits: 2,
    availableUnits: 1,
    inMaintenance: 1,
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-03-15',
    status: 'operational' as const,
    department: 'Radiology'
  },
  {
    id: 2,
    name: 'Ventilator',
    category: 'Life Support Equipment',
    totalUnits: 20,
    availableUnits: 5,
    inMaintenance: 2,
    lastMaintenance: '2024-02-20',
    nextMaintenance: '2024-03-20',
    status: 'critical' as const,
    department: 'ICU'
  },
  {
    id: 3,
    name: 'X-Ray Machine',
    category: 'Diagnostic Equipment',
    totalUnits: 5,
    availableUnits: 4,
    inMaintenance: 1,
    lastMaintenance: '2024-02-10',
    nextMaintenance: '2024-03-10',
    status: 'maintenance' as const,
    department: 'Radiology'
  }
];

const categories = [
  'All Categories',
  'Diagnostic Equipment',
  'Therapeutic Equipment',
  'Monitoring Equipment',
  'Life Support Equipment',
  'Laboratory Equipment'
];

const departments = [
  'All Departments',
  'Radiology',
  'ICU',
  'Emergency',
  'Laboratory',
  'Operation Theater',
  'General Ward'
];

export function Equipment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEquipment = (data: any) => {
    console.log('New equipment data:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Equipment Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage medical equipment</p>
        </div>
        <button 
          className="btn-primary flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-5 w-5" />
          Add Equipment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Equipment</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">27</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">-2%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">In Maintenance</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-red-600">Critical</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Needs Attention</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-sm font-medium text-green-600">Good</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Overall Status</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search equipment..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field sm:w-48"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="input-field sm:w-48"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      {/* Equipment List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentData.map((equipment) => (
          <EquipmentCard key={equipment.id} {...equipment} />
        ))}
      </div>

      <EquipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEquipment}
      />
    </div>
  );
}