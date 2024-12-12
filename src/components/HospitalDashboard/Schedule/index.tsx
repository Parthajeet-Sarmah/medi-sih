import React, { useState } from 'react';
import { Plus, Calendar as CalendarIcon, Filter } from 'lucide-react';
import { Calendar } from './components/Calendar';
import { ScheduleList } from './components/ScheduleList';
import { ScheduleModal } from './components/ScheduleModal';
import { Schedule, Doctor } from './types';
import { isSameDay } from './utils/dateUtils';

// Mock data for doctors
const mockDoctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Wilson', department: 'Cardiology' },
  { id: '2', name: 'Dr. Michael Chen', department: 'Neurology' },
  { id: '3', name: 'Dr. Emily Brown', department: 'Pediatrics' },
];

// Mock data for schedules
const mockSchedules: Schedule[] = [
  {
    id: '1',
    title: 'Regular Checkup',
    doctor: mockDoctors[0],
    patientName: 'John Doe',
    patientId: 'P001',
    date: '2024-03-20',
    startTime: '09:00',
    endTime: '09:30',
    type: 'appointment',
    status: 'scheduled',
    room: '302'
  },
  {
    id: '2',
    title: 'Heart Surgery',
    doctor: mockDoctors[1],
    patientName: 'Jane Smith',
    patientId: 'P002',
    date: '2024-03-20',
    startTime: '10:00',
    endTime: '12:00',
    type: 'surgery',
    status: 'in-progress',
    room: 'OR-1'
  }
];

export function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedules, setSchedules] = useState<Schedule[]>(mockSchedules);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | undefined>();
  const [filterType, setFilterType] = useState<Schedule['type'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (month: number) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), month, 1));
  };

  const handleScheduleSelect = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setIsModalOpen(true);
  };

  const handleScheduleSubmit = (scheduleData: Partial<Schedule>) => {
    if (selectedSchedule) {
      // Update existing schedule
      setSchedules(schedules.map(schedule => 
        schedule.id === selectedSchedule.id 
          ? { ...schedule, ...scheduleData }
          : schedule
      ));
    } else {
      // Create new schedule
      const newSchedule: Schedule = {
        id: Math.random().toString(36).substr(2, 9),
        ...scheduleData
      } as Schedule;
      setSchedules([...schedules, newSchedule]);
    }
    setIsModalOpen(false);
    setSelectedSchedule(undefined);
  };

  const filteredSchedules = schedules.filter(schedule => {
    const scheduleDate = new Date(schedule.date);
    const isDateMatch = isSameDay(scheduleDate, selectedDate);
    const isTypeMatch = filterType === 'all' || schedule.type === filterType;
    const isSearchMatch = searchTerm === '' || 
      schedule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return isDateMatch && isTypeMatch && isSearchMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600 mt-1">Manage appointments and surgeries</p>
        </div>
        <button 
          className="btn-primary flex items-center gap-2"
          onClick={() => {
            setSelectedSchedule(undefined);
            setIsModalOpen(true);
          }}
        >
          <Plus className="h-5 w-5" />
          New Schedule
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div>
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            schedules={schedules}
            onMonthChange={handleMonthChange}
          />
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schedules..."
                className="pl-10 input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="input-field sm:w-48"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as Schedule['type'] | 'all')}
            >
              <option value="all">All Types</option>
              <option value="appointment">Appointments</option>
              <option value="surgery">Surgeries</option>
              <option value="consultation">Consultations</option>
            </select>
          </div>

          {filteredSchedules.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No schedules found for this date</p>
            </div>
          ) : (
            <ScheduleList
              schedules={filteredSchedules}
              onScheduleSelect={handleScheduleSelect}
            />
          )}
        </div>
      </div>

      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSchedule(undefined);
        }}
        onSubmit={handleScheduleSubmit}
        doctors={mockDoctors}
        editSchedule={selectedSchedule}
      />
    </div>
  );
}