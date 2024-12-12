import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Printer } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'Monthly Healthcare Statistics',
    type: 'Monthly Report',
    date: '2024-03-01',
    size: '2.4 MB',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Hospital Performance Analysis',
    type: 'Quarterly Report',
    date: '2024-01-01',
    size: '4.8 MB',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Resource Utilization Summary',
    type: 'Monthly Report',
    date: '2024-02-01',
    size: '1.8 MB',
    status: 'completed'
  }
];

const reportTypes = [
  'Monthly Healthcare Statistics',
  'Hospital Performance Analysis',
  'Resource Utilization Summary',
  'Scheme Implementation Status',
  'District-wise Health Metrics'
];

export function Reports() {
  const [selectedReportType, setSelectedReportType] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Generate and manage healthcare reports</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Printer className="h-5 w-5" />
            Print Report
          </button>
          <button className="btn-primary flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Generator */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate New Report</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Report Type
            </label>
            <select
              className="input-field"
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
            >
              <option value="">Select Report Type</option>
              {reportTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="input-field"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="input-field"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Reports</h2>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{report.type}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary flex items-center gap-2">
                  <Printer className="h-5 w-5" />
                  Print
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}