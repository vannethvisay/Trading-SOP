import React from 'react';
import GlassCard from '../ui/GlassCard';

interface Trader {
  id: number;
  name: string;
  status: string;
  trading: string;
  positions: number;
  pnl: string;
  pnlValue: number;
}

const ActiveTraders: React.FC = () => {
  const traders: Trader[] = [
    {
      id: 1,
      name: 'John Smith',
      status: 'active',
      trading: 'EUR/USD, GBP/JPY',
      positions: 3,
      pnl: '+$1,250',
      pnlValue: 1250
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      status: 'active',
      trading: 'USD/JPY, AUD/USD',
      positions: 2,
      pnl: '+$850',
      pnlValue: 850
    }
  ];

  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Active Traders</h2>
        <span className="status-badge active">2 Online</span>
      </div>
      
      <div className="space-y-4">
        {traders.map(trader => (
          <div key={trader.id} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">{trader.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{trader.name}</p>
                  <p className="text-xs text-gray-500">Trading: {trader.trading}</p>
                </div>
              </div>
              <span className="status-badge active">Active</span>
            </div>
            
            <div className="flex justify-between text-sm mt-3">
              <div>
                <p className="text-gray-500">Positions:</p>
                <p className="font-medium text-gray-800">{trader.positions}</p>
              </div>
              <div>
                <p className="text-gray-500">P&L:</p>
                <p className={`font-medium ${trader.pnlValue >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {trader.pnl}
                </p>
              </div>
              <div>
                <button className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ActiveTraders;
