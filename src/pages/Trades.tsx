import React from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import TradeRow from '../components/trades/TradeRow';
import GlassButton from '../components/ui/GlassButton';
import { trades } from '../data/mockData';
import { Plus, Filter, Download } from 'lucide-react';

const Trades: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trade Management</h1>
          <p className="text-gray-600">Track and manage all your trading positions.</p>
        </div>
        <div className="flex space-x-3">
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </GlassButton>
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </GlassButton>
          <GlassButton variant="primary" size="md" className="flex items-center">
            <Plus size={16} className="mr-2" />
            New Trade
          </GlassButton>
        </div>
      </div>
      
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pair
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entry Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exit Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  P/L
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Checklist
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {trades.map((trade) => (
                <TradeRow key={trade.id} trade={trade} />
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </Layout>
  );
};

export default Trades;
