import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { BedTypeCard } from './BedTypeCard';
import { BedAllocationModal } from './BedAllocationModal';
import { OtpVerificationModal } from './OtpVerificationModal';
import { BedManageModal } from './BedManageModal';
import { useHospitalStore } from '../../../store/hospitalStore';
import type { BedAllocation, Bed } from '../../../store/types/hospital';

export function BedManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [isAllocationModalOpen, setIsAllocationModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState<Bed | null>(null);
  const [pendingAllocation, setPendingAllocation] = useState<BedAllocation | null>(null);

  const { getBedOccupancyByType, allocateBed } = useHospitalStore();

  const handleAllocation = (data: BedAllocation) => {
    setPendingAllocation(data);
    setIsAllocationModalOpen(false);
    setIsOtpModalOpen(true);
  };

  const handleOtpVerification = () => {
    if (pendingAllocation) {
      allocateBed(pendingAllocation);
      setIsOtpModalOpen(false);
      setPendingAllocation(null);
    }
  };

  const handleManageBed = (bed: Bed) => {
    setSelectedBed(bed);
    setIsManageModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bed Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage hospital bed allocation</p>
        </div>
        <button 
          className="btn-primary flex items-center gap-2"
          onClick={() => setIsAllocationModalOpen(true)}
        >
          <Plus className="h-5 w-5" />
          Allocate Bed
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search beds..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field sm:w-48"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="icu">ICU</option>
          <option value="emergency">Emergency</option>
          <option value="general">General Ward</option>
          <option value="private">Private Room</option>
          <option value="pediatric">Pediatric</option>
          <option value="maternity">Maternity</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['icu', 'emergency', 'general', 'pediatric', 'maternity'].map((type) => {
          const occupancy = getBedOccupancyByType(type);
          return (
            <BedTypeCard
              key={type}
              type={type}
              total={occupancy.total}
              available={occupancy.available}
              occupied={occupancy.occupied}
              onManage={handleManageBed}
            />
          );
        })}
      </div>

      <BedAllocationModal
        isOpen={isAllocationModalOpen}
        onClose={() => setIsAllocationModalOpen(false)}
        onSubmit={handleAllocation}
      />

      <OtpVerificationModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        onVerify={handleOtpVerification}
      />

      {selectedBed && (
        <BedManageModal
          isOpen={isManageModalOpen}
          onClose={() => {
            setIsManageModalOpen(false);
            setSelectedBed(null);
          }}
          bed={selectedBed}
        />
      )}
    </div>
  );
}