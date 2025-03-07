import React from 'react';
import { Report } from '../../types';
import GlassCard from '../ui/GlassCard';
import { Calendar, TrendingUp, BarChart2 } from 'lucide-react';
import GlassButton from '../ui/GlassButton';

interface ReportCardProps {
  report: Report;
}

const ReportCard: React.FC<ReportCardProps> = ({ report }) => {
  const getReportTypeColor = (type: string) => {
    switch (type) {
      case 'daily':
        return 'bg-blue-100 text-blue-800';
      case 'weekly':
        return 'bg-purple-100 text-purple-800';
      case 'monthly':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Ensure profitLoss is a number before calling toLocaleString
  const formattedProfitLoss = typeof report.profitLoss === 'number' 
    ? report.profitLoss.toLocaleString() 
    : '0';

  return (
    <GlassCard>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
          <div className="flex items-center mt-1">
            <Calendar size={14} className="text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{report.date}</span>
          </div>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getReportTypeColor(report.type)}`}>
          {report.type.toUpperCase()}
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50/50 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">Total Trades</p>
          </div>
          <p className="mt-1 text-xl font-semibold text-gray-900">{report.totalTrades || 0}</p>
        </div>
        
        <div className="bg-blue-50/50 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">Win Rate</p>
            <BarChart2 size={16} className="text-blue-500" />
          </div>
          <p className="mt-1 text-xl font-semibold text-gray-900">{report.winRate || 0}%</p>
        </div>
        
        <div className="bg-blue-50/50 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">P/L</p>
            <TrendingUp size={16} className={typeof report.profitLoss === 'number' && report.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'} />
          </div>
          <p className={`mt-1 text-xl font-semibold ${typeof report.profitLoss === 'number' && report.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${formattedProfitLoss}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Top Performers</h4>
        <div className="flex -space-x-2">
          {report.topPerformers && report.topPerformers.map((traderId, index) => (
            <img
              key={traderId}
              className="w-8 h-8 rounded-full border-2 border-white"
              src={`https://images.unsplash.com/photo-${1500000000000 + parseInt(traderId) * 10000}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
              alt={`Top performer ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <GlassButton variant="primary" className="w-full">
          View Full Report
        </GlassButton>
      </div>
    </GlassCard>
  );
};

export default ReportCard;
