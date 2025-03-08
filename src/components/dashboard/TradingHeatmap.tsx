import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

interface TradingHeatmapProps {
  isLoading?: boolean;
}

const TradingHeatmap: React.FC<TradingHeatmapProps> = ({ isLoading = false }) => {
  const [heatmapData, setHeatmapData] = useState([
    { pair: 'EUR/USD', value: 1.2, change: 0.35, isPositive: true },
    { pair: 'GBP/JPY', value: -0.8, change: -0.22, isPositive: false },
    { pair: 'USD/CAD', value: -0.5, change: -0.15, isPositive: false },
    { pair: 'AUD/USD', value: 0.9, change: 0.28, isPositive: true },
    { pair: 'USD/JPY', value: -1.1, change: -0.42, isPositive: false },
    { pair: 'EUR/GBP', value: 0.6, change: 0.18, isPositive: true },
    { pair: 'NZD/USD', value: 0.4, change: 0.12, isPositive: true },
    { pair: 'USD/CHF', value: -0.3, change: -0.08, isPositive: false }
  ]);
  
  // Simulate data changes
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setHeatmapData(prev => 
        prev.map(item => {
          const changeValue = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.1).toFixed(2);
          const newValue = parseFloat((item.value + parseFloat(changeValue)).toFixed(2));
          return {
            ...item,
            value: newValue,
            change: parseFloat(changeValue),
            isPositive: parseFloat(changeValue) > 0
          };
        })
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isLoading]);
  
  // Get color based on value
  const getHeatmapColor = (value: number) => {
    if (value > 1) return 'bg-green-500';
    if (value > 0.5) return 'bg-green-400';
    if (value > 0) return 'bg-green-300';
    if (value > -0.5) return 'bg-red-300';
    if (value > -1) return 'bg-red-400';
    return 'bg-red-500';
  };

  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trading Heatmap</h2>
        <select className="text-xs px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse">
          <div className="grid grid-cols-2 gap-2">
            {Array(8).fill(0).map((_, index) => (
              <div key={index} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {heatmapData.map((item, index) => (
            <div 
              key={index} 
              className={`${getHeatmapColor(item.value)} rounded p-2 transition-colors duration-500`}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-white">{item.pair}</span>
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
                  item.isPositive ? 'bg-green-800 bg-opacity-30' : 'bg-red-800 bg-opacity-30'
                } text-white`}>
                  {item.isPositive ? '+' : ''}{item.change}%
                </span>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-lg font-bold text-white">
                  {Math.abs(item.value).toFixed(1)}%
                </span>
                <div className={`text-xs ${item.isPositive ? 'text-green-100' : 'text-red-100'}`}>
                  {item.isPositive ? 'Bullish' : 'Bearish'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default TradingHeatmap;
