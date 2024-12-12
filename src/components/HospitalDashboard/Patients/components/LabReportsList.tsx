import React from 'react';
import { FileText, Download, Calendar, AlertCircle } from 'lucide-react';
import { LabReport } from '../types';

interface LabReportsListProps {
  reports: LabReport[];
}

export function LabReportsList({ reports }: LabReportsListProps) {
  const getStatusColor = (status: LabReport['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div key={report.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 rounded-lg">
                <FileText className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{report.type}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {new Date(report.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(report.status)}`}>
              {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
            </span>
          </div>

          {report.results && (
            <div className="mt-4 space-y-2">
              {report.results.map((result, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{result.parameter}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{result.value}</span>
                    <span className="text-gray-500">({result.normalRange})</span>
                    {result.status !== 'normal' && (
                      <AlertCircle className={`h-4 w-4 ${
                        result.status === 'critical' ? 'text-red-500' : 'text-yellow-500'
                      }`} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <button className="btn-secondary text-sm py-1.5 px-3 flex items-center gap-1">
              <Download className="h-4 w-4" />
              Download
            </button>
            <button className="btn-primary text-sm py-1.5 px-3">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}