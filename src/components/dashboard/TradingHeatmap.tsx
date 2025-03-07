import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

interface HeatmapItem {
  pair: string;
  value: number;
  change: number;
}

const TradingHeatmap: React.FC = () => {
  const [heatmapData, setHeatmapData] = useState<HeatmapItem[]>([
    { pair: 'EUR/USD', value: 1.0876, change: 0.15 },
    { pair: 'GBP/USD', value: 1.2654, change: -0.22 },
    { pair: 'USD/JPY', value: 149.32, change: 0.45 },
    { pair: 'USD/CHF', value: 0.8976, change: -0.08 },
    { pair: 'AUD/USD', value: 0.6543, change: 0.32 },
    { pair: 'USD/CAD', value: 1.3654, change: -0.18 },
    { pair: 'NZD/USD', value: 0.6123, change: 0.21 },
    { pair: 'EUR/GBP', value: 0.8654, change: 0.05 },
    { pair: 'EUR/JPY', value: 162.45, change: 0.62 },
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHeatmapData(prevData => 
        prevData.map(item => ({
          ...item,
          value: parseFloat((item.value + (Math.random() * 0.002 - 0.001)).toFixed(4)),
          change: parseFloat((item.change + (Math.random() * 0.1 - 0.05)).toFixed(2))
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getIntensity = (change: number) => {
    const absChange = Math.abs(change);
    if (absChange > 0.5) return 'bg-opacity-90';
    if (absChange > 0.3) return 'bg-opacity-70';
    if (absChange > 0.1) return 'bg-opacity-50';
    return 'bg-opacity-30';
  };

  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800">Currency Heatmap</h2>
          <span className="live-indicator ml-2">LIVE</span>
        </div>
        <div className="flex space-x-2">
          <button className="tab-button active">Major</button>
          <button className="tab-button">Minor</button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {heatmapData.map((item, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg ${
              item.change > 0 
                ? 'bg-emerald-100 hover:bg-emerald-200' 
                : 'bg-rose-100 hover:bg-rose-200'
            } ${getIntensity(item.change)} transition-all duration-300 cursor-pointer`}
          >
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">{item.pair}</span>
              <span className="text-lg font-bold">{item.value}</span>
              <span className={`text-sm font-medium ${
                item.change > 0 ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {item.change > 0 ? '+' : ''}{item.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default TradingHeatmap;
