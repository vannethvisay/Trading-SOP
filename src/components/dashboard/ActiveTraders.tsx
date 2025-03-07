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
    <GlassCard className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Active Traders</h2>
        <span className="status-badge active">2 Online</span>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {traders.map(trader => (
          <div key={trader.id} className="p-2 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-medium text-xs">{trader.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{trader.name}</p>
                  <p className="text-xs text-gray-500">Trading: {trader.trading}</p>
                </div>
              </div>
              <span className="status-badge active text-xs">Active</span>
            </div>
            
            <div className="flex justify-between text-xs mt-2">
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
                <button className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ActiveTraders;
