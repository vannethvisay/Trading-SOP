import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

const TradingSummary: React.FC = () => {
  const [profitValue, setProfitValue] = useState(2450);
  const [displayValue, setDisplayValue] = useState(0);
  
  // Animated counter effect
  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = easeOutQuart(progress);
      setDisplayValue(Math.floor(easedProgress * profitValue));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(profitValue);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [profitValue]);
  
  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  const stats = [
    { label: 'Win Rate', value: '68%', change: '+2.5%', isPositive: true },
    { label: 'Avg. Win', value: '$320', change: '+$15', isPositive: true },
    { label: 'Avg. Loss', value: '$180', change: '-$8', isPositive: true },
    { label: 'Profit Factor', value: '1.8', change: '+0.2', isPositive: true }
  ];

  return (
    <GlassCard className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full transform -translate-x-16 translate-y-16"></div>
      
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Trading Summary</h2>
      
      <div className="flex flex-col items-center mb-6 relative">
        <div className="shimmer absolute inset-0 pointer-events-none"></div>
        <p className="text-sm text-gray-500">Daily P&L</p>
        <p className="gradient-text text-4xl font-bold counter">
          ${displayValue.toLocaleString()}
        </p>
        <p className="text-sm text-emerald-600 font-medium">+2.5% from yesterday</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">{stat.label}</p>
            <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            <p className={`text-xs font-medium ${stat.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default TradingSummary;
