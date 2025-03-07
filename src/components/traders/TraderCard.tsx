import React from 'react';
import { Trader } from '../../types';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';
import GlassButton from '../ui/GlassButton';

interface TraderCardProps {
  trader: Trader;
}

const TraderCard: React.FC<TraderCardProps> = ({ trader }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'inactive':
        return <Badge variant="warning">Inactive</Badge>;
      case 'suspended':
        return <Badge variant="danger">Suspended</Badge>;
      default:
        return null;
    }
  };

  // Extract performance values from the trader object
  const performance = typeof trader.performance === 'object' ? trader.performance : { monthlyProfit: 0, winRate: 0, totalTrades: 0, averageRR: 0 };
  const performanceValue = typeof trader.performance === 'number' ? trader.performance : 0;
  const winRate = typeof trader.winRate === 'number' ? trader.winRate : (performance.winRate || 0);
  const trades = typeof trader.trades === 'number' ? trader.trades : (performance.totalTrades || 0);
  const profitLoss = typeof trader.profitLoss === 'number' ? trader.profitLoss : (performance.monthlyProfit || 0);

  return (
    <GlassCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-4">
          <img
            src={trader.avatar}
            alt={trader.name}
            className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{trader.name}</h3>
            <p className="text-sm text-gray-500">{trader.email}</p>
            <div className="mt-1">{getStatusBadge(trader.status)}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">Performance</p>
              <BarChart2 size={16} className="text-blue-500" />
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{performanceValue}%</p>
          </div>
          
          <div className="bg-blue-50/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">Win Rate</p>
              {winRate >= 50 ? (
                <TrendingUp size={16} className="text-green-500" />
              ) : (
                <TrendingDown size={16} className="text-red-500" />
              )}
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{winRate}%</p>
          </div>
          
          <div className="bg-blue-50/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">Trades</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{trades}</p>
          </div>
          
          <div className="bg-blue-50/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">P/L</p>
              {profitLoss >= 0 ? (
                <TrendingUp size={16} className="text-green-500" />
              ) : (
                <TrendingDown size={16} className="text-red-500" />
              )}
            </div>
            <p className={`mt-1 text-xl font-semibold ${profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${profitLoss.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-6 flex space-x-2">
          <GlassButton variant="primary" className="flex-1">
            View Profile
          </GlassButton>
          <GlassButton variant="secondary" className="flex-1">
            Manage
          </GlassButton>
        </div>
      </div>
    </GlassCard>
  );
};

export default TraderCard;
