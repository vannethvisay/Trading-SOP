import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Trader } from '../../types';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface ActiveTradersProps {
  count?: number;
  traders?: Trader[];
  isLoading?: boolean;
}

const ActiveTraders: React.FC<ActiveTradersProps> = ({ 
  count = 3,
  traders = [],
  isLoading = false
}) => {
  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Active Traders</h2>
        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
          {count} Online
        </span>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="w-24 h-4 bg-gray-200 rounded mb-1"></div>
                <div className="w-16 h-3 bg-gray-200 rounded"></div>
              </div>
              <div className="w-16 h-6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {traders.map((trader) => (
            <div key={trader.id} className="flex items-center space-x-3">
              <img 
                src={trader.avatar} 
                alt={trader.name} 
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{trader.name}</p>
                <p className="text-xs text-gray-500">{trader.role}</p>
              </div>
              {typeof trader.performance === 'object' && (
                <div className={`flex items-center text-sm font-medium ${
                  trader.performance.monthlyProfit >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trader.performance.monthlyProfit >= 0 ? (
                    <ArrowUpRight size={16} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={16} className="mr-1" />
                  )}
                  ${Math.abs(trader.performance.monthlyProfit).toLocaleString()}
                </div>
              )}
            </div>
          ))}
          
          <button className="w-full mt-2 text-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
            View All Traders
          </button>
        </div>
      )}
    </GlassCard>
  );
};

export default ActiveTraders;
