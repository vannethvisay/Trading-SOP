import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import StatCard from '../components/dashboard/StatCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import BarChart from '../components/dashboard/BarChart';
import PieChart from '../components/dashboard/PieChart';
import RiskMetrics from '../components/dashboard/RiskMetrics';
import ActiveTraders from '../components/dashboard/ActiveTraders';
import RecentAlerts from '../components/dashboard/RecentAlerts';
import MarketSentiment from '../components/dashboard/MarketSentiment';
import TradingHeatmap from '../components/dashboard/TradingHeatmap';
import TradingNotifications from '../components/dashboard/TradingNotifications';
import QuickActions from '../components/dashboard/QuickActions';
import TradingSummary from '../components/dashboard/TradingSummary';
import { 
  dashboardStats, 
  performanceData, 
  traderPerformanceData, 
  currencyPairPerformance,
  tradingActivityData
} from '../data/mockData';
import { DollarSign, Activity, BarChart2, TrendingDown } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="live-indicator">LIVE DATA</span>
          <button className="tab-button active">Today</button>
          <button className="tab-button">Week</button>
          <button className="tab-button">Month</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Daily P&L"
          value={`$${dashboardStats.totalProfit.toLocaleString()}`}
          icon={<DollarSign size={20} className="text-blue-500" />}
          trend={{ value: 2.5, isPositive: true, text: 'from yesterday' }}
          iconColor="bg-blue-50"
        />
        <StatCard
          title="Active Trades"
          value={dashboardStats.totalTrades}
          icon={<Activity size={20} className="text-blue-500" />}
          trend={{ value: 4, isPositive: true, text: 'pending orders' }}
          iconColor="bg-blue-50"
        />
        <StatCard
          title="Total Exposure"
          value={`${dashboardStats.winRate}%`}
          icon={<BarChart2 size={20} className="text-amber-500" />}
          trend={{ value: 0, isPositive: true, text: 'within safe limits' }}
          iconColor="bg-amber-50"
        />
        <StatCard
          title="Max Drawdown"
          value={`${dashboardStats.maxDrawdown}%`}
          icon={<TrendingDown size={20} className="text-rose-500" />}
          trend={{ value: 0, isPositive: false, text: 'approaching limit (3%)' }}
          iconColor="bg-rose-50"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <PerformanceChart data={performanceData} title="Team Performance" />
        </div>
        <div className="lg:col-span-1">
          <BarChart data={currencyPairPerformance} title="Currency Pair Performance" />
        </div>
        <div className="lg:col-span-1">
          <PieChart 
            data={tradingActivityData} 
            title="Trading Activity" 
            centerText={{ title: "Total Orders", value: 155 }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <TradingSummary />
        </div>
        <div className="lg:col-span-1">
          <MarketSentiment />
        </div>
        <div className="lg:col-span-1">
          <TradingHeatmap />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RiskMetrics />
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <QuickActions />
            <ActiveTraders />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <TradingNotifications />
            <RecentAlerts />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
