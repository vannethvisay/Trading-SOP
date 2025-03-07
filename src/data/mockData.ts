import { ChartData } from 'chart.js';

export const dashboardStats = {
  totalProfit: 2450,
  totalTrades: 18,
  winRate: 8.2,
  activeTraders: 2,
  maxDrawdown: 2.8
};

export const performanceData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Profit',
      data: [1200, -800, -1200, 2500, 3200, 1800, 2400],
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Cumulative',
      data: [1200, 400, -800, 1700, 4900, 6700, 9100],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
    }
  ]
};

export const traderPerformanceData: ChartData<'bar'> = {
  labels: ['John', 'Sarah', 'Michael', 'Emma', 'David'],
  datasets: [
    {
      label: 'Profit',
      data: [2500, 1800, -500, 1200, 900],
      backgroundColor: [
        'rgba(79, 70, 229, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(249, 115, 22, 0.7)',
        'rgba(59, 130, 246, 0.7)'
      ],
      borderRadius: 4,
    }
  ]
};

export const currencyPairPerformance: ChartData<'bar'> = {
  labels: ['EUR/USD', 'GBP/JPY', 'USD/CAD', 'AUD/USD', 'USD/JPY', 'EUR/GBP'],
  datasets: [
    {
      label: 'Profit',
      data: [1200, 1700, -250, 800, -500, 350],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(59, 130, 246, 0.7)'
      ],
      borderRadius: 4,
    }
  ]
};

export const tradingActivityData: ChartData<'doughnut'> = {
  labels: ['Buy Orders', 'Sell Orders', 'Pending Orders', 'Closed Orders'],
  datasets: [
    {
      data: [65, 35, 15, 40],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(249, 115, 22, 0.7)',
        'rgba(16, 185, 129, 0.7)'
      ],
      borderWidth: 0,
    }
  ]
};
