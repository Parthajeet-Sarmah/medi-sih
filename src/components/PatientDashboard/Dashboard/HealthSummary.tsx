import React from 'react';
import { Activity, Heart, Thermometer, Weight } from 'lucide-react';

const healthMetrics = [
  {
    icon: Heart,
    label: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    trend: 'up',
    change: '3%'
  },
  {
    icon: Activity,
    label: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    trend: 'stable',
    change: '0%'
  },
  {
    icon: Weight,
    label: 'Weight',
    value: '68',
    unit: 'kg',
    trend: 'down',
    change: '1%'
  },
  {
    icon: Thermometer,
    label: 'Temperature',
    value: '36.6',
    unit: '°C',
    trend: 'stable',
    change: '0%'
  }
];

export function HealthSummary() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Health Summary</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {healthMetrics.map((metric) => (
          <div
            key={metric.label}
            className="p-3 sm:p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
              <span
                className={`text-xs sm:text-sm font-medium ${
                  metric.trend === 'up'
                    ? 'text-green-600'
                    : metric.trend === 'down'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-xs sm:text-sm text-gray-500">{metric.label}</p>
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                {metric.value}
                <span className="text-xs sm:text-sm font-normal text-gray-500 ml-1">
                  {metric.unit}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}