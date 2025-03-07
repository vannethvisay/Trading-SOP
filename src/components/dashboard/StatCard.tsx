import React, { ReactNode } from 'react';
import GlassCard from '../ui/GlassCard';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, className = '' }) => {
  return (
    <GlassCard className={`${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          
          {trend && (
            <div className="mt-2 flex items-center">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="ml-1 text-xs text-gray-500">vs last period</span>
            </div>
          )}
        </div>
        
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg">
          {icon}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatCard;
