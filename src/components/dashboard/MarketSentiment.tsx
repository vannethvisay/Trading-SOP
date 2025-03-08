import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

interface MarketSentimentProps {
  isLoading?: boolean;
}

const MarketSentiment: React.FC<MarketSentimentProps> = ({ isLoading = false }) => {
  const [sentiments, setSentiments] = useState([
    { pair: 'EUR/USD', bullish: 65, bearish: 35 },
    { pair: 'GBP/JPY', bullish: 42, bearish: 58 },
    { pair: 'USD/CAD', bullish: 51, bearish: 49 },
    { pair: 'AUD/USD', bullish: 38, bearish: 62 }
  ]);
  
  // Simulate sentiment changes
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setSentiments(prev => 
        prev.map(item => ({
          ...item,
          bullish: Math.max(30, Math.min(70, item.bullish + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3))),
          bearish: 100 - (Math.max(30, Math.min(70, item.bullish + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3))))
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <GlassCard className="h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Market Sentiment</h2>
      
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sentiments.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{item.pair}</span>
                <div className="flex space-x-2">
                  <span className="text-green-600">{item.bullish}%</span>
                  <span className="text-red-600">{item.bearish}%</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-red-500"
                  style={{ width: `${item.bullish}%` }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="pt-3 mt-3 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Overall Market Mood</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                getAverageSentiment(sentiments) > 55 
                  ? 'bg-green-100 text-green-800' 
                  : getAverageSentiment(sentiments) < 45
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {getAverageSentiment(sentiments) > 55 
                  ? 'Bullish' 
                  : getAverageSentiment(sentiments) < 45
                  ? 'Bearish'
                  : 'Neutral'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Based on retail trader positioning and institutional forecasts
            </p>
          </div>
        </div>
      )}
    </GlassCard>
  );
};

// Helper function to calculate average sentiment
const getAverageSentiment = (sentiments: Array<{ pair: string; bullish: number; bearish: number }>) => {
  const total = sentiments.reduce((sum, item) => sum + item.bullish, 0);
  return Math.round(total / sentiments.length);
};

export default MarketSentiment;
