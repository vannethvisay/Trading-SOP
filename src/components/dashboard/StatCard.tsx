import React from 'react';
import GlassCard from '../ui/GlassCard';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
    text: string;
  };
  iconColor?: string;
  isLoading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  iconColor = 'bg-blue-50',
  isLoading = false
}) => {
  return (
    <GlassCard className="relative overflow-hidden">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex justify-between items-start">
            <div className="w-1/2 h-5 bg-gray-200 rounded"></div>
            <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center`}></div>
          </div>
          <div className="mt-4 w-3/4 h-8 bg-gray-200 rounded"></div>
          <div className="mt-2 w-1/2 h-4 bg-gray-200 rounded"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center`}>
              {icon}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            {trend && (
              <p className={`text-sm ${trend.isPositive ? 'text-emerald-600' : 'text-rose-600'} mt-1 flex items-center`}>
                {trend.isPositive ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v3.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                  </svg>
                )}
                {trend.value > 0 ? `${trend.value}% ` : ''}{trend.text}
              </p>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-blue-500 opacity-5 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-blue-500 opacity-5 rounded-full"></div>
        </>
      )}
    </GlassCard>
  );
};

export default StatCard;
