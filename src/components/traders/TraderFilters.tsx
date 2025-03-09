import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { X } from 'lucide-react';

interface TraderFiltersProps {
  onFilter: (filters: {
    status: string[];
    specialties: string[];
    performance: string;
  }) => void;
  onClose: () => void;
  availableSpecialties: string[];
}

const TraderFilters: React.FC<TraderFiltersProps> = ({ 
  onFilter, 
  onClose,
  availableSpecialties
}) => {
  const [filters, setFilters] = useState({
    status: [] as string[],
    specialties: [] as string[],
    performance: ''
  });

  const handleStatusChange = (status: string) => {
    setFilters(prev => {
      const newStatus = prev.status.includes(status)
        ? prev.status.filter(s => s !== status)
        : [...prev.status, status];
      
      return { ...prev, status: newStatus };
    });
  };

  const handleSpecialtyChange = (specialty: string) => {
    setFilters(prev => {
      const newSpecialties = prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty];
      
      return { ...prev, specialties: newSpecialties };
    });
  };

  const handlePerformanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, performance: e.target.value }));
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  const handleClearFilters = () => {
    setFilters({
      status: [],
      specialties: [],
      performance: ''
    });
  };

  return (
    <GlassCard className="max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filter Traders</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
        <div className="space-y-2">
          {['active', 'inactive', 'suspended', 'on leave'].map(status => (
            <label key={status} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.status.includes(status)}
                onChange={() => handleStatusChange(status)}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              <span className="text-gray-700 capitalize">{status}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties</h4>
        <div className="space-y-2">
          {availableSpecialties.map(specialty => (
            <label key={specialty} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.specialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              <span className="text-gray-700">{specialty}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Performance</h4>
        <select
          value={filters.performance}
          onChange={handlePerformanceChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All</option>
          <option value="positive">Positive (Profit)</option>
          <option value="negative">Negative (Loss)</option>
          <option value="high">{"High Win Rate (>60%)"}</option>
          <option value="low">{"Low Win Rate (<50%)"}</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleClearFilters}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Clear Filters
        </button>
        <button
          onClick={handleApplyFilters}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Apply Filters
        </button>
      </div>
    </GlassCard>
  );
};

export default TraderFilters;
