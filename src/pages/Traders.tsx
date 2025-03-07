import React from 'react';
import Layout from '../components/layout/Layout';
import TraderCard from '../components/traders/TraderCard';
import GlassButton from '../components/ui/GlassButton';
import { traders } from '../data/mockData';
import { UserPlus, Filter } from 'lucide-react';

const Traders: React.FC = () => {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {traders.map((trader) => (
          <TraderCard key={trader.id} trader={trader} />
        ))}
      </div>
    </Layout>
  );
};

export default Traders;
