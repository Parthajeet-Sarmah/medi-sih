import React from 'react';
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    id: 1,
    name: 'Blood Test Results',
    date: '2024-03-15',
    type: 'Lab Report',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'Vaccination Certificate',
    date: '2024-03-10',
    type: 'Certificate',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'Prescription',
    date: '2024-03-05',
    type: 'Medical Record',
    size: '1.2 MB'
  }
];

export function RecentDocuments() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recent Documents</h2>
        <FileText className="h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
      </div>
      <div className="space-y-3 sm:space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center flex-1 min-w-0">
              <div className="p-2 bg-teal-100 rounded-lg">
                <FileText className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
              </div>
              <div className="ml-3 sm:ml-4 truncate">
                <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{doc.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {doc.type} • {doc.size}
                </p>
              </div>
            </div>
            <button className="ml-4 p-2 text-gray-400 hover:text-teal-600 transition-colors">
              <Download className="h-4 sm:h-5 w-4 sm:w-5" />
            </button>
          </div>
        ))}
      </div>
      <button className="mt-4 sm:mt-6 text-sm text-teal-600 hover:text-teal-700 font-medium">
        View All Documents →
      </button>
    </div>
  );
}