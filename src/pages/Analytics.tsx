import React from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import BarChart from '../components/dashboard/BarChart';
import { performanceData, traderPerformanceData, currencyPairPerformance } from '../data/mockData';
import { Calendar, ChevronDown } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trading Analytics</h1>
          <p className="text-gray-600">Detailed analysis of your trading performance.</p>
        </div>
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 px-4 py-2">
          <Calendar size={16} className="text-gray-500" />
          <span className="text-sm text-gray-700">Last 6 Months</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PerformanceChart data={performanceData} title="Profit/Loss Over Time" />
        <BarChart data={traderPerformanceData} title="Trader Win Rates" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Currency Pair Performance</h2>
          <div className="h-80">
            <BarChart data={currencyPairPerformance} title="" />
          </div>
        </GlassCard>
        
        <GlassCard>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Trading Metrics</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Win Rate</span>
                <span className="text-sm font-medium text-gray-700">64%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Risk-Reward Ratio</span>
                <span className="text-sm font-medium text-gray-700">1:2.5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Average Holding Time</span>
                <span className="text-sm font-medium text-gray-700">3.2 days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Drawdown</span>
                <span className="text-sm font-medium text-gray-700">8.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Profit Factor</span>
                <span className="text-sm font-medium text-gray-700">1.85</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-blue-50/50 rounded-lg p-3">
              <p className="text-sm font-medium text-gray-500">Best Trading Day</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">Tuesday</p>
            </div>
            
            <div className="bg-blue-50/50 rounded-lg p-3">
              <p className="text-sm font-medium text-gray-500">Best Trading Time</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">9:30 - 11:00 AM</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
};

export default Analytics;
