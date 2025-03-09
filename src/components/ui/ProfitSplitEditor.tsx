import React, { useState } from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { Trader } from '../../types';
import { PieChart, X } from 'lucide-react';

interface ProfitSplitEditorProps {
  trader: Trader;
  onSave: (traderId: string, traderSplit: number, companySplit: number) => void;
  onCancel: () => void;
}

const ProfitSplitEditor: React.FC<ProfitSplitEditorProps> = ({ trader, onSave, onCancel }) => {
  const [traderSplit, setTraderSplit] = useState(trader.profitSplit?.trader || 50);
  const [companySplit, setCompanySplit] = useState(trader.profitSplit?.company || 50);

  const handleTraderSplitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTraderSplit(value);
    setCompanySplit(100 - value);
  };

  const handleCompanySplitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setCompanySplit(value);
    setTraderSplit(100 - value);
  };

  const handleSave = () => {
    onSave(trader.id, traderSplit, companySplit);
  };

  // Calculate profit amounts based on split
  const profitLoss = typeof trader.profitLoss === 'number' 
    ? trader.profitLoss 
    : (typeof trader.performance === 'object' ? trader.performance.monthlyProfit : 0);
  
  const traderProfit = profitLoss > 0 ? (profitLoss * traderSplit / 100).toFixed(0) : '0';
  const companyProfit = profitLoss > 0 ? (profitLoss * companySplit / 100).toFixed(0) : '0';

  return (
    <GlassCard className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Edit Profit Split for {trader.name}
        </h2>
        <button 
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img
            src={trader.avatar}
            alt={trader.name}
            className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{trader.name}</h3>
            <p className="text-sm text-gray-500">{trader.email}</p>
          </div>
        </div>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-700">Current Profit Split</p>
            <PieChart size={16} className="text-indigo-500" />
          </div>
          
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${traderSplit}%` }}
              ></div>
            </div>
            <div className="ml-2 text-sm font-medium text-gray-700 min-w-[80px] text-right">
              {traderSplit}% / {companySplit}%
            </div>
          </div>
          
          <div className="mt-2 flex justify-between text-sm">
            <div>
              <span className="text-gray-500">Trader:</span>
              <span className="ml-1 font-medium text-indigo-700">${traderProfit}</span>
            </div>
            <div>
              <span className="text-gray-500">Company:</span>
              <span className="ml-1 font-medium text-indigo-700">${companyProfit}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trader Split (%)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={traderSplit}
            onChange={handleTraderSplitChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            <input
              type="number"
              min="0"
              max="100"
              value={traderSplit}
              onChange={handleTraderSplitChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center"
            />
            <span className="text-gray-500">Trader's share of profits</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Split (%)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={companySplit}
            onChange={handleCompanySplitChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            <input
              type="number"
              min="0"
              max="100"
              value={companySplit}
              onChange={handleCompanySplitChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center"
            />
            <span className="text-gray-500">Company's share of profits</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Profit Distribution Preview</h4>
          <p className="text-sm text-gray-600 mb-3">
            Based on current monthly profit of ${profitLoss.toLocaleString()}:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Trader Receives</p>
              <p className="text-lg font-semibold text-indigo-700">${traderProfit}</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Company Receives</p>
              <p className="text-lg font-semibold text-indigo-700">${companyProfit}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <GlassButton 
          variant="secondary" 
          onClick={onCancel}
        >
          Cancel
        </GlassButton>
        <GlassButton 
          variant="primary" 
          onClick={handleSave}
        >
          Save Changes
        </GlassButton>
      </div>
    </GlassCard>
  );
};

export default ProfitSplitEditor;
