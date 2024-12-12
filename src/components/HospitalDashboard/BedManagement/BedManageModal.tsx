import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { Bed } from '../../../store/types/hospital';
import { useHospitalStore } from '../../../store/hospitalStore';

interface BedManageModalProps {
  isOpen: boolean;
  onClose: () => void;
  bed: Bed;
}

export function BedManageModal({ isOpen, onClose, bed }: BedManageModalProps) {
  const [newStatus, setNewStatus] = useState(bed.status);
  const updateBedStatus = useHospitalStore((state) => state.updateBedStatus);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBedStatus(bed.id, newStatus);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="relative bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Manage Bed {bed.number}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Status
              </label>
              <select
                className="input-field"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as Bed['status'])}
              >
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
                {bed.status === 'occupied' && <option value="occupied">Occupied</option>}
              </select>
            </div>

            {bed.patient && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Patient</h4>
                <p className="text-sm text-gray-600">Name: {bed.patient.name}</p>
                <p className="text-sm text-gray-600">ID: {bed.patient.id}</p>
                <p className="text-sm text-gray-600">
                  Admitted: {new Date(bed.patient.admissionDate).toLocaleDateString()}
                </p>
              </div>
            )}

            {newStatus === 'maintenance' && (
              <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-2" />
                <p className="text-sm text-yellow-700">
                  Setting bed to maintenance will make it unavailable for new patients.
                </p>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button type="button" onClick={onClose} className="btn-secondary flex-1">
                Cancel
              </button>
              <button type="submit" className="btn-primary flex-1">
                Update Status
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}