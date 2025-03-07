import React from 'react';
import GlassCard from '../ui/GlassCard';

interface DrawdownItem {
  title: string;
  value: string;
  color: string;
}

const RiskMetrics: React.FC = () => {
  const drawdowns: DrawdownItem[] = [
    {
      title: 'Daily Drawdown',
      value: '0.5%',
      color: 'green'
    },
    {
      title: 'Weekly Drawdown',
      value: '1.2%',
      color: 'orange'
    },
    {
      title: 'Monthly Drawdown',
      value: '2.8%',
      color: 'red'
    }
  ];

  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Risk Metrics</h2>
        <span className="status-badge warning">Caution</span>
      </div>
      
      <div className="space-y-6">
        {drawdowns.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
                <p className="text-lg font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-bar-fill ${item.color}`} 
                style={{ width: item.value }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default RiskMetrics;
