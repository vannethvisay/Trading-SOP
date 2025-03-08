import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import TraderCard from '../components/traders/TraderCard';
import GlassButton from '../components/ui/GlassButton';
import ProfitSplitEditor from '../components/ui/ProfitSplitEditor';
import { traders as tradersData } from '../data/mockData';
import { UserPlus, Filter, PieChart } from 'lucide-react';
import { Trader } from '../types';

const Traders: React.FC = () => {
  const [traders, setTraders] = useState<Trader[]>(tradersData);
  const [editingTrader, setEditingTrader] = useState<Trader | null>(null);

  const handleEditProfitSplit = (trader: Trader) => {
    setEditingTrader(trader);
  };

  const handleSaveProfitSplit = (traderId: string, traderSplit: number, companySplit: number) => {
    setTraders(prevTraders => 
      prevTraders.map(trader => 
        trader.id === traderId 
          ? { 
              ...trader, 
              profitSplit: { 
                trader: traderSplit, 
                company: companySplit 
              } 
            } 
          : trader
      )
    );
    setEditingTrader(null);
  };

  const handleCancelEdit = () => {
    setEditingTrader(null);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Traders Management</h1>
          <p className="text-gray-600">Manage and monitor your trading team's performance.</p>
        </div>
        <div className="flex space-x-3">
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </GlassButton>
          <GlassButton variant="primary" size="md" className="flex items-center">
            <UserPlus size={16} className="mr-2" />
            Add Trader
          </GlassButton>
        </div>
      </div>
      
      {editingTrader ? (
        <ProfitSplitEditor 
          trader={editingTrader} 
          onSave={handleSaveProfitSplit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map((trader) => (
            <div key={trader.id} className="relative">
              <TraderCard trader={trader} />
              <button 
                onClick={() => handleEditProfitSplit(trader)}
                className="absolute top-3 right-3 p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors"
                title="Edit Profit Split"
              >
                <PieChart size={16} className="text-indigo-600" />
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Traders;
