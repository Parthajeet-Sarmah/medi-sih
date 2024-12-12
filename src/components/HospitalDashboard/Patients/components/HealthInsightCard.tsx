import React from 'react';
import { TrendingUp, AlertTriangle, Heart, Activity } from 'lucide-react';
import { HealthInsight } from '../types';

interface HealthInsightCardProps {
  insight: HealthInsight;
}

export function HealthInsightCard({ insight }: HealthInsightCardProps) {
  const getCategoryIcon = (category: HealthInsight['category']) => {
    switch (category) {
      case 'vital-trends':
        return Activity;
      case 'medication-adherence':
        return Heart;
      case 'lifestyle':
        return TrendingUp;
      case 'risk-factors':
        return AlertTriangle;
      default:
        return Activity;
    }
  };

  const getSeverityColor = (severity: HealthInsight['severity']) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const Icon = getCategoryIcon(insight.category);

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-100 rounded-lg">
            <Icon className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{insight.title}</h3>
            <p className="text-sm text-gray-500">
              {new Date(insight.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getSeverityColor(insight.severity)}`}>
          {insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1)} Priority
        </span>
      </div>

      <p className="mt-3 text-sm text-gray-600">{insight.description}</p>

      {insight.recommendations.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {insight.recommendations.map((rec, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}