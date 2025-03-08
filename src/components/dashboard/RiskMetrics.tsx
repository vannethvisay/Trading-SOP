import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';

interface RiskMetricsProps {
  isLoading?: boolean;
}

const RiskMetrics: React.FC<RiskMetricsProps> = ({ isLoading = false }) => {
  const [activeTab, setActiveTab] = useState('exposure');
  
  const metrics = {
    exposure: [
      { label: 'EUR/USD', value: '32%', status: 'normal' },
      { label: 'GBP/JPY', value: '28%', status: 'normal' },
      { label: 'USD/CAD', value: '15%', status: 'normal' },
      { label: 'USD/JPY', value: '25%', status: 'warning' }
    ],
    drawdown: [
      { label: 'Daily', value: '1.2%', status: 'normal' },
      { label: 'Weekly', value: '2.8%', status: 'warning' },
      { label: 'Monthly', value: '4.5%', status: 'danger' },
      { label: 'Max', value: '6.2%', status: 'danger' }
    ],
    volatility: [
      { label: 'EUR/USD', value: 'Low', status: 'normal' },
      { label: 'GBP/JPY', value: 'High', status: 'danger' },
      { label: 'USD/CAD', value: 'Medium', status: 'warning' },
      { label: 'USD/JPY', value: 'Medium', status: 'warning' }
    ]
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'danger':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getActiveMetrics = () => {
    switch (activeTab) {
      case 'exposure':
        return metrics.exposure;
      case 'drawdown':
        return metrics.drawdown;
      case 'volatility':
        return metrics.volatility;
      default:
        return metrics.exposure;
    }
  };

  return (
    <GlassCard className="h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Risk Metrics</h2>
      
      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-8 bg-gray-200 rounded w-24"></div>
            ))}
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex space-x-2 mb-4">
            <button
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeTab === 'exposure' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('exposure')}
            >
              Exposure
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeTab === 'drawdown' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('drawdown')}
            >
              Drawdown
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeTab === 'volatility' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('volatility')}
            >
              Volatility
            </button>
          </div>
          
          <div className="space-y-3">
            {getActiveMetrics().map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{metric.label}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(metric.status)}`}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Overall Risk Level</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                  style={{ width: `${activeTab === 'exposure' ? 60 : activeTab === 'drawdown' ? 75 : 65}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {activeTab === 'exposure' 
                ? 'Moderate exposure levels. Consider diversifying currency pairs.' 
                : activeTab === 'drawdown' 
                ? 'High drawdown detected. Review risk management strategy.' 
                : 'Medium volatility environment. Adjust position sizing accordingly.'}
            </p>
          </div>
        </>
      )}
    </GlassCard>
  );
};

export default RiskMetrics;
