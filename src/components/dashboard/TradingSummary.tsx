import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

interface TradingSummaryProps {
  profitValue?: number;
  period?: 'today' | 'week' | 'month';
  isLoading?: boolean;
}

const TradingSummary: React.FC<TradingSummaryProps> = ({ 
  profitValue = 2450,
  period = 'today',
  isLoading = false
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [stats, setStats] = useState([
    { label: 'Win Rate', value: '68%', change: '+2.5%', isPositive: true },
    { label: 'Avg. Win', value: '$320', change: '+$15', isPositive: true },
    { label: 'Avg. Loss', value: '$180', change: '-$8', isPositive: true },
    { label: 'Profit Factor', value: '1.8', change: '+0.2', isPositive: true }
  ]);
  
  // Update stats based on period
  useEffect(() => {
    if (period === 'week') {
      setStats([
        { label: 'Win Rate', value: '72%', change: '+4.0%', isPositive: true },
        { label: 'Avg. Win', value: '$350', change: '+$30', isPositive: true },
        { label: 'Avg. Loss', value: '$165', change: '-$15', isPositive: true },
        { label: 'Profit Factor', value: '2.1', change: '+0.3', isPositive: true }
      ]);
    } else if (period === 'month') {
      setStats([
        { label: 'Win Rate', value: '65%', change: '-3.0%', isPositive: false },
        { label: 'Avg. Win', value: '$380', change: '+$60', isPositive: true },
        { label: 'Avg. Loss', value: '$210', change: '+$30', isPositive: false },
        { label: 'Profit Factor', value: '1.9', change: '-0.2', isPositive: false }
      ]);
    } else {
      setStats([
        { label: 'Win Rate', value: '68%', change: '+2.5%', isPositive: true },
        { label: 'Avg. Win', value: '$320', change: '+$15', isPositive: true },
        { label: 'Avg. Loss', value: '$180', change: '-$8', isPositive: true },
        { label: 'Profit Factor', value: '1.8', change: '+0.2', isPositive: true }
      ]);
    }
  }, [period]);
  
  // Animated counter effect
  useEffect(() => {
    if (isLoading) {
      setDisplayValue(0);
      return;
    }
    
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
  }, [profitValue, isLoading]);
  
  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  return (
    <GlassCard className="relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full transform -translate-x-16 translate-y-16"></div>
      
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Trading Summary</h2>
      
      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-32 h-8 bg-gray-200 rounded mb-2"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <div className="w-16 h-3 bg-gray-200 rounded mb-2"></div>
                <div className="w-12 h-5 bg-gray-200 rounded mb-2"></div>
                <div className="w-10 h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center mb-6 relative">
            <div className="shimmer absolute inset-0 pointer-events-none"></div>
            <p className="text-sm text-gray-500">
              {period === 'today' ? 'Daily P&L' : period === 'week' ? 'Weekly P&L' : 'Monthly P&L'}
            </p>
            <p className="gradient-text text-4xl font-bold counter">
              ${displayValue.toLocaleString()}
            </p>
            <p className="text-sm text-emerald-600 font-medium">
              {period === 'today' ? '+2.5% from yesterday' : 
               period === 'week' ? '+12.3% from last week' : 
               '+18.7% from last month'}
            </p>
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
        </>
      )}
    </GlassCard>
  );
};

export default TradingSummary;
