import React, { useState } from 'react';
import { Trader } from '../../types';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

interface ProfitSplitEditorProps {
  trader: Trader;
  onSave: (traderId: string, traderSplit: number, companySplit: number) => void;
  onCancel: () => void;
}

const ProfitSplitEditor: React.FC<ProfitSplitEditorProps> = ({ trader, onSave, onCancel }) => {
  const [traderSplit, setTraderSplit] = useState(trader.profitSplit?.trader || 50);
  const [companySplit, setCompanySplit] = useState(trader.profitSplit?.company || 50);

  const handleTraderSplitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTraderSplit = parseInt(e.target.value);
    setTraderSplit(newTraderSplit);
    setCompanySplit(100 - newTraderSplit);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(trader.id, traderSplit, companySplit);
  };

  return (
    <GlassCard className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Edit Profit Split for {trader.name}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trader Split: {traderSplit}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={traderSplit}
            onChange={handleTraderSplitChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Split: {companySplit}%
          </label>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full" 
              style={{ width: `${companySplit}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between space-x-4">
          <GlassButton 
            type="button" 
            variant="secondary" 
            className="flex-1"
            onClick={onCancel}
          >
            Cancel
          </GlassButton>
          <GlassButton 
            type="submit" 
            variant="primary" 
            className="flex-1"
          >
            Save Changes
          </GlassButton>
        </div>
      </form>
    </GlassCard>
  );
};

export default ProfitSplitEditor;
