import React from 'react';
import { Heart, Activity, Weight, Thermometer, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { usePatientStore } from '../../../store/usePatientStore';

export function Vitals() {
  const vitals = usePatientStore((state) => state.vitals);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Heart Rate':
        return Heart;
      case 'Blood Pressure':
        return Activity;
      case 'Weight':
        return Weight;
      case 'Temperature':
        return Thermometer;
      default:
        return Activity;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      default:
        return <Minus className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vitals Monitoring</h1>
        <button className="btn-primary">Add New Reading</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {vitals.map((vital) => {
          const Icon = getIcon(vital.type);
          return (
            <div key={vital.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">{vital.type}</h2>
                </div>
                {getTrendIcon(vital.trend)}
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">
                  {vital.value}
                  <span className="text-base font-normal text-gray-500 ml-1">
                    {vital.unit}
                  </span>
                </div>
                <p className="text-sm text-gray-500">Last updated: {new Date(vital.date).toLocaleDateString()}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Recent History</h3>
                <div className="flex items-end justify-between h-20">
                  {/* Placeholder for history chart */}
                  <div className="flex-1 mx-1">
                    <div
                      className="bg-teal-100 rounded-t"
                      style={{ height: `${vital.value / 2}px` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}