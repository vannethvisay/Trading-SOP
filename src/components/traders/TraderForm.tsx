import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import { Trader } from '../../types';
import { X } from 'lucide-react';

interface TraderFormProps {
  trader?: Trader;
  onSubmit: (trader: Omit<Trader, 'id'>) => void;
  onCancel: () => void;
}

const TraderForm: React.FC<TraderFormProps> = ({ trader, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Trader, 'id'>>({
    name: trader?.name || '',
    email: trader?.email || '',
    status: trader?.status || 'active',
    avatar: trader?.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg',
    role: trader?.role || '',
    specialties: trader?.specialties || [],
    performance: trader?.performance || {
      monthlyProfit: 0,
      winRate: 0,
      totalTrades: 0,
      averageRR: 0
    },
    profitSplit: trader?.profitSplit || {
      trader: 50,
      company: 50
    }
  });

  const [specialty, setSpecialty] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: parent === 'performance' ? Number(value) : value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddSpecialty = () => {
    if (specialty && !formData.specialties?.includes(specialty)) {
      setFormData(prev => ({
        ...prev,
        specialties: [...(prev.specialties || []), specialty]
      }));
      setSpecialty('');
    }
  };

  const handleRemoveSpecialty = (item: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties?.filter(s => s !== item) || []
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <GlassCard className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          {trader ? 'Edit Trader' : 'Add New Trader'}
        </h2>
        <button 
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
              <option value="on leave">On Leave</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Avatar URL
            </label>
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialties
            </label>
            <div className="flex">
              <input
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add a specialty (e.g., Forex, Stocks)"
              />
              <button
                type="button"
                onClick={handleAddSpecialty}
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.specialties?.map((item, index) => (
                <div key={index} className="bg-indigo-100 px-3 py-1 rounded-full flex items-center">
                  <span className="text-indigo-800 text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSpecialty(item)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Profit ($)
                </label>
                <input
                  type="number"
                  name="performance.monthlyProfit"
                  value={typeof formData.performance === 'object' ? formData.performance.monthlyProfit : 0}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Win Rate (%)
                </label>
                <input
                  type="number"
                  name="performance.winRate"
                  value={typeof formData.performance === 'object' ? formData.performance.winRate : 0}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Trades
                </label>
                <input
                  type="number"
                  name="performance.totalTrades"
                  value={typeof formData.performance === 'object' ? formData.performance.totalTrades : 0}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Risk/Reward
                </label>
                <input
                  type="number"
                  name="performance.averageRR"
                  value={typeof formData.performance === 'object' ? formData.performance.averageRR : 0}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Profit Split</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trader (%)
                </label>
                <input
                  type="number"
                  name="profitSplit.trader"
                  value={formData.profitSplit?.trader || 50}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company (%)
                </label>
                <input
                  type="number"
                  name="profitSplit.company"
                  value={formData.profitSplit?.company || 50}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <GlassButton 
            type="button" 
            variant="secondary" 
            onClick={onCancel}
          >
            Cancel
          </GlassButton>
          <GlassButton 
            type="submit" 
            variant="primary"
          >
            {trader ? 'Update Trader' : 'Add Trader'}
          </GlassButton>
        </div>
      </form>
    </GlassCard>
  );
};

export default TraderForm;
