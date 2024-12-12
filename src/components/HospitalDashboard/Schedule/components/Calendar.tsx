import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getMonthDays, isSameDay } from '../utils/dateUtils';
import { Schedule } from '../types';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  schedules: Schedule[];
  onMonthChange: (month: number) => void;
}

export function Calendar({ selectedDate, onDateSelect, schedules, onMonthChange }: CalendarProps) {
  const days = getMonthDays(selectedDate.getFullYear(), selectedDate.getMonth());
  const today = new Date();

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentMonth = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const handlePrevMonth = () => {
    onMonthChange(selectedDate.getMonth() - 1);
  };

  const handleNextMonth = () => {
    onMonthChange(selectedDate.getMonth() + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{currentMonth}</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {days.map((date, index) => {
          const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
          const isSelected = isSameDay(date, selectedDate);
          const isToday = isSameDay(date, today);
          const hasEvents = schedules.some((schedule) => 
            isSameDay(new Date(schedule.date), date)
          );

          return (
            <button
              key={index}
              onClick={() => onDateSelect(date)}
              className={`
                aspect-square p-1 relative hover:bg-gray-100 rounded-lg transition-colors
                ${!isCurrentMonth && 'text-gray-400'}
                ${isSelected && 'bg-teal-50 text-teal-600 hover:bg-teal-100'}
                ${isToday && !isSelected && 'text-teal-600 font-semibold'}
              `}
            >
              <span className="text-sm">{date.getDate()}</span>
              {hasEvents && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}