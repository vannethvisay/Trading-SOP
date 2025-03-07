import React from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import StatCard from '../components/dashboard/StatCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import BarChart from '../components/dashboard/BarChart';
import { dashboardStats, performanceData, traderPerformanceData, currencyPairPerformance } from '../data/mockData';
import { DollarSign, Users, BarChart2, TrendingUp, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your trading performance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Profit/Loss"
          value={`$${dashboardStats.totalProfit.toLocaleString()}`}
          icon={<DollarSign size={24} className="text-blue-600" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Total Trades"
          value={dashboardStats.totalTrades}
          icon={<Activity size={24} className="text-indigo-600" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Win Rate"
          value={`${dashboardStats.winRate}%`}
          icon={<BarChart2 size={24} className="text-green-600" />}
          trend={{ value: 3.1, isPositive: true }}
        />
        <StatCard
          title="Active Traders"
          value={dashboardStats.activeTraders}
          icon={<Users size={24} className="text-purple-600" />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PerformanceChart data={performanceData} title="Monthly Performance" />
        <BarChart data={traderPerformanceData} title="Trader Performance" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Trades</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pair</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P/L</th>
                </tr>
              </thead>
              <tbody className="bg-white/50 divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EUR/USD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">BUY</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.0845</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.0892</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$705</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GBP/JPY</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">SELL</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">168.75</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">167.90</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$1,700</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">USD/CAD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">BUY</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.3450</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.3425</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-$250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassCard>
        
        <GlassCard>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Currency Pair Performance</h2>
          <div className="h-64">
            <BarChart data={currencyPairPerformance} title="" />
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
};

export default Dashboard;
