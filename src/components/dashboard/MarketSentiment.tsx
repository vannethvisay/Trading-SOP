import React from 'react';
import GlassCard from '../ui/GlassCard';

interface SentimentItem {
  symbol: string;
  name: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  strength: number;
  change: number;
}

const MarketSentiment: React.FC = () => {
  const sentimentData: SentimentItem[] = [
    {
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      sentiment: 'bullish',
      strength: 72,
      change: 3.5
    },
    {
      symbol: 'GBP/JPY',
      name: 'British Pound / Japanese Yen',
      sentiment: 'bearish',
      strength: 65,
      change: -2.1
    },
    {
      symbol: 'USD/CAD',
      name: 'US Dollar / Canadian Dollar',
      sentiment: 'neutral',
      strength: 48,
      change: 0.2
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish':
        return 'text-emerald-600';
      case 'bearish':
        return 'text-rose-600';
      default:
        return 'text-amber-600';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        );
      case 'bearish':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v3.586l-4.293-4.293a1 1 0 00-1.414 0L8 10.586 3.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 10.414 14.586 14H12z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <GlassCard className="gradient-border">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800">Market Sentiment</h2>
          <span className="live-indicator ml-2">LIVE</span>
        </div>
        <div className="tooltip">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="tooltip-text">Based on institutional positioning and retail sentiment</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {sentimentData.map((item, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">{item.symbol}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    item.sentiment === 'bullish' ? 'bg-emerald-100 text-emerald-800' : 
                    item.sentiment === 'bearish' ? 'bg-rose-100 text-rose-800' : 
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.sentiment.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{item.name}</p>
              </div>
              <div className="flex items-center">
                {getSentimentIcon(item.sentiment)}
                <span className={`ml-1 font-medium ${getSentimentColor(item.sentiment)}`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            </div>
            
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Bearish</span>
                <span>Bullish</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    item.sentiment === 'bullish' ? 'bg-emerald-500' : 
                    item.sentiment === 'bearish' ? 'bg-rose-500' : 
                    'bg-amber-500'
                  }`}
                  style={{ width: `${item.strength}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">
                Strength: {item.strength}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default MarketSentiment;
