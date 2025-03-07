import React, { ReactNode } from 'react';
import GlassCard from '../ui/GlassCard';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
    text?: string;
  };
  className?: string;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className = '',
  iconColor = 'bg-blue-100'
}) => {
  return (
    <GlassCard className={`${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold text-gray-800">{value}</p>
          
          {trend && (
            <div className="mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? 'text-emerald-600' : 'text-rose-500'
                }`}
              >
                {trend.isPositive ? '+' : ''}{trend.value}% {trend.text || 'from yesterday'}
              </span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-full ${iconColor}`}>
          {icon}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatCard;
