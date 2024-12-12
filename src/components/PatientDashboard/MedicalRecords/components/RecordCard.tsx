import React from 'react';
import { FileText, Download } from 'lucide-react';

interface RecordCardProps {
  name: string;
  date: string;
  type: string;
  doctor: string;
  size: string;
}

export function RecordCard({ name, date, type, doctor, size }: RecordCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-teal-100 rounded-lg shrink-0">
          <FileText className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {type} • {size} • {doctor}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {new Date(date).toLocaleDateString()}
              </p>
            </div>
            
            <div className="flex gap-2 self-start sm:self-center">
              <button className="btn-secondary text-xs sm:text-sm py-1.5 px-3 flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button className="btn-primary text-xs sm:text-sm py-1.5 px-3">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}