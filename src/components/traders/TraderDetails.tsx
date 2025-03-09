import React from 'react';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import Badge from '../ui/Badge';
import { Trader } from '../../types';
import { ArrowLeft, Edit, Trash2, PieChart, BarChart2, TrendingUp, TrendingDown } from 'lucide-react';

interface TraderDetailsProps {
  trader: Trader;
  onBack: () => void;
  onEdit: (trader: Trader) => void;
  onDelete: (traderId: string) => void;
  onEditProfitSplit: (trader: Trader) => void;
}

const TraderDetails: React.FC<TraderDetailsProps> = ({ 
  trader, 
  onBack, 
  onEdit, 
  onDelete,
  onEditProfitSplit
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'inactive':
        return <Badge variant="warning">Inactive</Badge>;
      case 'suspended':
        return <Badge variant="danger">Suspended</Badge>;
      case 'on leave':
        return <Badge variant="info">On Leave</Badge>;
      default:
        return null;
    }
  };

  // Extract performance values from the trader object
  const performance = typeof trader.performance === 'object' ? trader.performance : { monthlyProfit: 0, winRate: 0, totalTrades: 0, averageRR: 0 };
  const performanceValue = typeof trader.performance === 'number' ? trader.performance : 0;
  const winRate = typeof trader.winRate === 'number' ? trader.winRate : (performance.winRate || 0);
  const trades = typeof trader.trades === 'number' ? trader.trades : (performance.totalTrades || 0);
  const profitLoss = typeof trader.profitLoss === 'number' ? trader.profitLoss : (performance.monthlyProfit || 0);
  
  // Get profit split values or default to 50/50
  const traderSplit = trader.profitSplit?.trader || 50;
  const companySplit = trader.profitSplit?.company || 50;
  
  // Calculate actual profit amounts based on split
  const traderProfit = profitLoss > 0 ? (profitLoss * traderSplit / 100).toFixed(0) : '0';
  const companyProfit = profitLoss > 0 ? (profitLoss * companySplit / 100).toFixed(0) : '0';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to Traders
        </button>
      </div>

      <GlassCard>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex flex-col items-center p-4">
            <img
              src={trader.avatar}
              alt={trader.name}
              className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-center">{trader.name}</h2>
            <p className="text-gray-600 mb-2">{trader.email}</p>
            <div className="mb-4">{getStatusBadge(trader.status)}</div>
            
            {trader.role && (
              <div className="text-center mb-4">
                <span className="text-gray-700 font-medium">Role:</span>
                <span className="ml-2 text-gray-900">{trader.role}</span>
              </div>
            )}
            
            {trader.specialties && trader.specialties.length > 0 && (
              <div className="w-full">
                <h3 className="text-gray-700 font-medium mb-2 text-center">Specialties</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {trader.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 flex flex-col w-full space-y-3">
              <GlassButton 
                variant="primary" 
                className="w-full flex items-center justify-center"
                onClick={() => onEdit(trader)}
              >
                <Edit size={16} className="mr-2" />
                Edit Trader
              </GlassButton>
              <GlassButton 
                variant="secondary" 
                className="w-full flex items-center justify-center"
                onClick={() => onEditProfitSplit(trader)}
              >
                <PieChart size={16} className="mr-2" />
                Edit Profit Split
              </GlassButton>
              <GlassButton 
                variant="danger" 
                className="w-full flex items-center justify-center"
                onClick={() => onDelete(trader.id)}
              >
                <Trash2 size={16} className="mr-2" />
                Delete Trader
              </GlassButton>
            </div>
          </div>
          
          <div className="md:w-2/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">Performance</p>
                  <BarChart2 size={16} className="text-blue-500" />
                </div>
                <p className="mt-1 text-xl font-semibold text-gray-900">{performanceValue}%</p>
              </div>
              
              <div className="bg-blue-50/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">Win Rate</p>
                  {winRate >= 50 ? (
                    <TrendingUp size={16} className="text-green-500" />
                  ) : (
                    <TrendingDown size={16} className="text-red-500" />
                  )}
                </div>
                <p className="mt-1 text-xl font-semibold text-gray-900">{winRate}%</p>
              </div>
              
              <div className="bg-blue-50/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">Trades</p>
                </div>
                <p className="mt-1 text-xl font-semibold text-gray-900">{trades}</p>
              </div>
              
              <div className="bg-blue-50/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">P/L</p>
                  {profitLoss >= 0 ? (
                    <TrendingUp size={16} className="text-green-500" />
                  ) : (
                    <TrendingDown size={16} className="text-red-500" />
                  )}
                </div>
                <p className={`mt-1 text-xl font-semibold ${profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${profitLoss.toLocaleString()}
                </p>
              </div>
            </div>
            
            {typeof performance === 'object' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Additional Metrics</h3>
                <div className="bg-blue-50/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Average Risk/Reward</p>
                      <p className="text-lg font-semibold text-gray-900">{performance.averageRR.toFixed(2)}</p>
                    </div>
                    {/* Add more metrics here as needed */}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Profit Split</h3>
              <div className="bg-indigo-50/50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${traderSplit}%` }}
                    ></div>
                  </div>
                  <div className="ml-2 text-sm font-medium text-gray-700 min-w-[80px] text-right">
                    {traderSplit}% / {companySplit}%
                  </div>
                </div>
                
                <div className="mt-2 flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Trader:</span>
                    <span className="ml-1 font-medium text-indigo-700">${traderProfit}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Company:</span>
                    <span className="ml-1 font-medium text-indigo-700">${companyProfit}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default TraderDetails;
