import React from 'react';
import GlassCard from '../ui/GlassCard';
import { format } from 'date-fns';
import { AlertTriangle, TrendingDown, Bell } from 'lucide-react';
import { Trade } from '../../types';

interface RecentAlertsProps {
  trades?: Trade[];
  isLoading?: boolean;
}

const RecentAlerts: React.FC<RecentAlertsProps> = ({ 
  trades = [],
  isLoading = false
}) => {
  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
        <span className="relative">
          <Bell size={18} className="text-gray-500" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </span>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : trades.length > 0 ? (
        <div className="space-y-3">
          {trades.map((trade) => (
            <div key={trade.id} className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 mt-1">
                <TrendingDown size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Loss on {trade.pair} {trade.type}
                </p>
                <p className="text-xs text-gray-500">
                  ${Math.abs(trade.profitLoss).toLocaleString()} loss • {format(new Date(trade.date), 'MMM dd, HH:mm')}
                </p>
              </div>
            </div>
          ))}
          
          <button className="w-full mt-2 text-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
            View All Alerts
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)]">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-2">
            <AlertTriangle size={20} />
          </div>
          <p className="text-sm text-gray-500">No alerts at the moment</p>
        </div>
      )}
    </GlassCard>
  );
};

export default RecentAlerts;
