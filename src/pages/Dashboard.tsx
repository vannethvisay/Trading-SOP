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
import QuickActions from '../components/dashboard/QuickActions';
import TradingSummary from '../components/dashboard/TradingSummary';
import TradingNotifications from '../components/dashboard/TradingNotifications';
import { 
  dashboardStats, 
  performanceData, 
  traderPerformanceData, 
  currencyPairPerformance,
  tradingActivityData,
  trades,
  traders
} from '../data/mockData';
import { DollarSign, Activity, BarChart2, TrendingDown } from 'lucide-react';

// Time periods for filtering data
type TimePeriod = 'today' | 'week' | 'month';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('today');
  const [stats, setStats] = useState(dashboardStats);
  const [performance, setPerformance] = useState(performanceData);
  const [currencyPerf, setCurrencyPerf] = useState(currencyPairPerformance);
  const [activityData, setActivityData] = useState(tradingActivityData);
  const [showNotification, setShowNotification] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update profit value to simulate live data
      setStats(prev => ({
        ...prev,
        totalProfit: prev.totalProfit + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10)
      }));
      
      // Randomly update active trades
      if (Math.random() > 0.8) {
        setStats(prev => ({
          ...prev,
          totalTrades: prev.totalTrades + (Math.random() > 0.5 ? 1 : -1)
        }));
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Show notification occasionally
  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      
      // Auto-hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      
      return () => clearTimeout(hideTimer);
    }, 10000);
    
    return () => clearTimeout(notificationTimer);
  }, []);

  // Filter data based on selected time period
  useEffect(() => {
    setRefreshing(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      // Update data based on selected period
      switch (selectedPeriod) {
        case 'today':
          setStats(dashboardStats);
          setPerformance(performanceData);
          setCurrencyPerf(currencyPairPerformance);
          break;
        case 'week':
          setStats({
            ...dashboardStats,
            totalProfit: dashboardStats.totalProfit * 5,
            totalTrades: dashboardStats.totalTrades * 4,
            winRate: dashboardStats.winRate + 1.3,
            maxDrawdown: dashboardStats.maxDrawdown - 0.5
          });
          // Modify chart data for weekly view
          setPerformance({
            ...performanceData,
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: performanceData.datasets.map(dataset => ({
              ...dataset,
              data: dataset.data.slice(0, 5).map(val => val * 1.2)
            }))
          });
          setCurrencyPerf({
            ...currencyPairPerformance,
            datasets: currencyPairPerformance.datasets.map(dataset => ({
              ...dataset,
              data: dataset.data.map(val => val * 1.5)
            }))
          });
          break;
        case 'month':
          setStats({
            ...dashboardStats,
            totalProfit: dashboardStats.totalProfit * 20,
            totalTrades: dashboardStats.totalTrades * 15,
            winRate: dashboardStats.winRate + 2.5,
            maxDrawdown: dashboardStats.maxDrawdown + 0.8
          });
          // Modify chart data for monthly view
          setPerformance({
            ...performanceData,
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: performanceData.datasets.map(dataset => ({
              ...dataset,
              data: [3500, 2800, 4200, 5100]
            }))
          });
          setCurrencyPerf({
            ...currencyPairPerformance,
            datasets: currencyPairPerformance.datasets.map(dataset => ({
              ...dataset,
              data: dataset.data.map(val => val * 4)
            }))
          });
          break;
      }
      
      setRefreshing(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedPeriod]);

  // Calculate derived stats
  const openTrades = trades.filter(trade => trade.status === 'open').length;
  const activeTradersCount = traders.filter(trader => trader.status === 'active').length;
  
  // Calculate profit trend
  const profitTrend = {
    value: 2.5,
    isPositive: stats.totalProfit > dashboardStats.totalProfit,
    text: 'from yesterday'
  };

  // Handle period change
  const handlePeriodChange = (period: TimePeriod) => {
    setSelectedPeriod(period);
  };

  // Handle refresh data
  const handleRefresh = () => {
    setRefreshing(true);
    
    // Simulate data refresh
    setTimeout(() => {
      // Update with slightly different values
      setStats({
        ...stats,
        totalProfit: stats.totalProfit + Math.floor(Math.random() * 50) - 25,
        totalTrades: stats.totalTrades + (Math.random() > 0.5 ? 1 : 0),
      });
      
      setRefreshing(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className={`live-indicator ${refreshing ? 'animate-pulse' : ''}`}>
            {refreshing ? 'UPDATING...' : 'LIVE DATA'}
          </span>
          <button 
            className={`tab-button ${selectedPeriod === 'today' ? 'active' : ''}`}
            onClick={() => handlePeriodChange('today')}
          >
            Today
          </button>
          <button 
            className={`tab-button ${selectedPeriod === 'week' ? 'active' : ''}`}
            onClick={() => handlePeriodChange('week')}
          >
            Week
          </button>
          <button 
            className={`tab-button ${selectedPeriod === 'month' ? 'active' : ''}`}
            onClick={() => handlePeriodChange('month')}
          >
            Month
          </button>
          <button 
            className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Notification */}
      {showNotification && (
        <TradingNotifications onClose={() => setShowNotification(false)} />
      )}
      
      {/* Stat Cards - Equal height and consistent spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Daily P&L"
          value={`$${stats.totalProfit.toLocaleString()}`}
          icon={<DollarSign size={20} className="text-blue-500" />}
          trend={profitTrend}
          iconColor="bg-blue-50"
          isLoading={isLoading}
        />
        <StatCard
          title="Active Trades"
          value={openTrades}
          icon={<Activity size={20} className="text-blue-500" />}
          trend={{ value: 4, isPositive: true, text: 'pending orders' }}
          iconColor="bg-blue-50"
          isLoading={isLoading}
        />
        <StatCard
          title="Total Exposure"
          value={`${stats.winRate}%`}
          icon={<BarChart2 size={20} className="text-amber-500" />}
          trend={{ value: 0, isPositive: true, text: 'within safe limits' }}
          iconColor="bg-amber-50"
          isLoading={isLoading}
        />
        <StatCard
          title="Max Drawdown"
          value={`${stats.maxDrawdown}%`}
          icon={<TrendingDown size={20} className="text-rose-500" />}
          trend={{ value: 0, isPositive: false, text: 'approaching limit (3%)' }}
          iconColor="bg-rose-50"
          isLoading={isLoading}
        />
      </div>
      
      {/* Chart Cards - Equal height with flex-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <PerformanceChart 
            data={performance} 
            title="Team Performance" 
            isLoading={isLoading || refreshing}
          />
        </div>
        <div className="lg:col-span-1">
          <BarChart 
            data={currencyPerf} 
            title="Currency Pair Performance" 
            isLoading={isLoading || refreshing}
          />
        </div>
        <div className="lg:col-span-1">
          <PieChart 
            data={activityData} 
            title="Trading Activity" 
            centerText={{ title: "Total Orders", value: stats.totalTrades }}
            isLoading={isLoading || refreshing}
          />
        </div>
      </div>
      
      {/* Summary Cards - Equal height with flex-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <TradingSummary 
            profitValue={stats.totalProfit}
            period={selectedPeriod}
            isLoading={isLoading || refreshing}
          />
        </div>
        <div className="lg:col-span-1">
          <MarketSentiment isLoading={isLoading || refreshing} />
        </div>
        <div className="lg:col-span-1">
          <TradingHeatmap isLoading={isLoading || refreshing} />
        </div>
      </div>
      
      {/* Bottom Cards - Equal height with flex-1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RiskMetrics isLoading={isLoading || refreshing} />
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <div className="h-[250px]">
              <QuickActions />
            </div>
            <div className="h-[250px]">
              <ActiveTraders 
                count={activeTradersCount}
                traders={traders.filter(t => t.status === 'active').slice(0, 3)}
                isLoading={isLoading || refreshing}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="h-[250px]">
            <RecentAlerts 
              trades={trades.filter(t => t.profitLoss < 0).slice(0, 3)}
              isLoading={isLoading || refreshing}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
