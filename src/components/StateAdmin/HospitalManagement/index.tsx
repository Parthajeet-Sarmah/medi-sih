import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { HospitalCard } from './components/HospitalCard';
import { HospitalFilters } from './components/HospitalFilters';
import { HospitalDetails } from './components/HospitalDetails';

// Complete hospital data structure
const hospitals = [
  {
    id: 1,
    name: 'Central State Hospital',
    type: 'government',
    district: 'Central District',
    totalBeds: 500,
    occupiedBeds: 380,
    doctors: 150,
    staff: 450,
    totalStaff: 600,
    status: 'active' as const,
    schemes: ['Ayushman Bharat', 'State Health Scheme'],
    equipment: {
      ventilators: 50,
      xrayMachines: 8,
      mriScanners: 2,
      ctScanners: 3
    },
    fundDetails: {
      totalAllocation: '₹450 Cr',
      utilized: '₹320 Cr',
      remaining: '₹130 Cr',
      utilizationByDepartment: {
        infrastructure: 30,
        equipment: 25,
        salaries: 20,
        medicines: 15,
        maintenance: 10
      }
    },
    staffBreakdown: {
      doctors: {
        specialists: 50,
        general: 70,
        residents: 30
      },
      nurses: {
        senior: 100,
        junior: 200,
        trainees: 50
      },
      paramedical: {
        technicians: 40,
        assistants: 30,
        others: 30
      }
    },
    bedTypes: {
      icu: 50,
      general: 300,
      emergency: 50,
      pediatric: 50,
      maternity: 50
    }
  },
  {
    id: 2,
    name: 'City Private Hospital',
    type: 'private',
    district: 'Northern District',
    totalBeds: 300,
    occupiedBeds: 220,
    doctors: 80,
    staff: 250,
    totalStaff: 330,
    status: 'active' as const,
    schemes: ['Private Insurance', 'Corporate Health Plans'],
    equipment: {
      ventilators: 30,
      xrayMachines: 5,
      mriScanners: 1,
      ctScanners: 2
    },
    staffBreakdown: {
      doctors: {
        specialists: 30,
        general: 40,
        residents: 10
      },
      nurses: {
        senior: 60,
        junior: 120,
        trainees: 30
      },
      paramedical: {
        technicians: 20,
        assistants: 15,
        others: 15
      }
    },
    bedTypes: {
      icu: 30,
      general: 180,
      emergency: 30,
      pediatric: 30,
      maternity: 30
    }
  },
  {
    id: 3,
    name: 'Community Nursing Home',
    type: 'nursing',
    district: 'Eastern District',
    totalBeds: 100,
    occupiedBeds: 65,
    doctors: 20,
    staff: 60,
    totalStaff: 80,
    status: 'maintenance' as const,
    schemes: ['Basic Health Coverage'],
    equipment: {
      ventilators: 10,
      xrayMachines: 2,
      mriScanners: 0,
      ctScanners: 1
    },
    staffBreakdown: {
      doctors: {
        specialists: 5,
        general: 10,
        residents: 5
      },
      nurses: {
        senior: 15,
        junior: 30,
        trainees: 10
      },
      paramedical: {
        technicians: 8,
        assistants: 5,
        others: 2
      }
    },
    bedTypes: {
      icu: 10,
      general: 60,
      emergency: 10,
      pediatric: 10,
      maternity: 10
    }
  },
  {
    id: 4,
    name: 'District General Hospital',
    type: 'government',
    district: 'Southern District',
    totalBeds: 400,
    occupiedBeds: 350,
    doctors: 120,
    staff: 360,
    totalStaff: 480,
    status: 'critical' as const,
    schemes: ['Ayushman Bharat', 'District Health Program'],
    equipment: {
      ventilators: 40,
      xrayMachines: 6,
      mriScanners: 1,
      ctScanners: 2
    },
    fundDetails: {
      totalAllocation: '₹350 Cr',
      utilized: '₹280 Cr',
      remaining: '₹70 Cr',
      utilizationByDepartment: {
        infrastructure: 25,
        equipment: 30,
        salaries: 25,
        medicines: 15,
        maintenance: 5
      }
    },
    staffBreakdown: {
      doctors: {
        specialists: 40,
        general: 60,
        residents: 20
      },
      nurses: {
        senior: 80,
        junior: 160,
        trainees: 40
      },
      paramedical: {
        technicians: 30,
        assistants: 25,
        others: 25
      }
    },
    bedTypes: {
      icu: 40,
      general: 240,
      emergency: 40,
      pediatric: 40,
      maternity: 40
    }
  },
  {
    id: 5,
    name: 'Metro Healthcare Center',
    type: 'private',
    district: 'Central District',
    totalBeds: 250,
    occupiedBeds: 180,
    doctors: 75,
    staff: 200,
    totalStaff: 275,
    status: 'active' as const,
    schemes: ['Private Insurance', 'International Health Coverage'],
    equipment: {
      ventilators: 25,
      xrayMachines: 4,
      mriScanners: 1,
      ctScanners: 2
    },
    staffBreakdown: {
      doctors: {
        specialists: 25,
        general: 35,
        residents: 15
      },
      nurses: {
        senior: 50,
        junior: 100,
        trainees: 25
      },
      paramedical: {
        technicians: 15,
        assistants: 10,
        others: 10
      }
    },
    bedTypes: {
      icu: 25,
      general: 150,
      emergency: 25,
      pediatric: 25,
      maternity: 25
    }
  }
];

export function HospitalManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedHospital, setSelectedHospital] = useState<typeof hospitals[0] | null>(null);

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || hospital.type === selectedType;
    const matchesDistrict = selectedDistrict === 'all' || 
                           hospital.district.toLowerCase().includes(selectedDistrict.toLowerCase());
    
    return matchesSearch && matchesType && matchesDistrict;
  });

  if (selectedHospital) {
    return (
      <HospitalDetails 
        hospital={selectedHospital} 
        onBack={() => setSelectedHospital(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hospital Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage healthcare facilities</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Hospital
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <HospitalFilters
          searchTerm={searchTerm}
          selectedType={selectedType}
          selectedDistrict={selectedDistrict}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedType}
          onDistrictChange={setSelectedDistrict}
        />

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              onViewDetails={() => setSelectedHospital(hospital)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}