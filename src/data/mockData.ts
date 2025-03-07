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

// Add the missing exports
export const checklistItems = [
  {
    id: '1',
    title: 'Check economic calendar for major news events',
    description: 'Review upcoming economic releases that might impact the market',
    completed: true,
    category: 'pre-trade',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Analyze market structure on higher timeframes',
    description: 'Identify key support/resistance levels and overall trend direction',
    completed: false,
    category: 'pre-trade',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Check risk-reward ratio before entering trade',
    description: 'Ensure potential reward is at least 2x the risk',
    completed: false,
    category: 'pre-trade',
    priority: 'high'
  },
  {
    id: '4',
    title: 'Set stop loss and take profit levels',
    description: 'Place orders to manage risk and lock in profits',
    completed: true,
    category: 'during-trade',
    priority: 'medium'
  },
  {
    id: '5',
    title: 'Monitor trade for technical invalidation',
    description: 'Watch for signs that your trading thesis is no longer valid',
    completed: false,
    category: 'during-trade',
    priority: 'medium'
  },
  {
    id: '6',
    title: 'Record trade details in journal',
    description: 'Document entry/exit points, strategy used, and outcome',
    completed: true,
    category: 'post-trade',
    priority: 'medium'
  },
  {
    id: '7',
    title: 'Review trade performance and psychology',
    description: 'Analyze what went well and what could be improved',
    completed: false,
    category: 'post-trade',
    priority: 'low'
  }
];

export const reports = [
  {
    id: '1',
    title: 'Monthly Performance Report - July 2023',
    description: 'Comprehensive analysis of trading performance for July 2023',
    date: '2023-08-01',
    metrics: {
      totalTrades: 42,
      winRate: 68,
      profit: 3250,
      drawdown: 5.2
    },
    type: 'monthly'
  },
  {
    id: '2',
    title: 'Strategy Analysis - Breakout Trades',
    description: 'Performance review of breakout trading strategy across all pairs',
    date: '2023-07-15',
    metrics: {
      totalTrades: 28,
      winRate: 71,
      profit: 1850,
      drawdown: 3.8
    },
    type: 'strategy'
  },
  {
    id: '3',
    title: 'Quarterly Review - Q2 2023',
    description: 'Quarterly performance analysis and strategy adjustments',
    date: '2023-07-02',
    metrics: {
      totalTrades: 115,
      winRate: 62,
      profit: 8750,
      drawdown: 7.5
    },
    type: 'quarterly'
  },
  {
    id: '4',
    title: 'Pair Analysis - EUR/USD',
    description: 'Detailed performance metrics for EUR/USD trades',
    date: '2023-06-28',
    metrics: {
      totalTrades: 35,
      winRate: 65,
      profit: 2200,
      drawdown: 4.1
    },
    type: 'pair'
  },
  {
    id: '5',
    title: 'Risk Management Audit',
    description: 'Analysis of position sizing and risk management effectiveness',
    date: '2023-06-15',
    metrics: {
      totalTrades: 87,
      winRate: 59,
      profit: 5400,
      drawdown: 6.2
    },
    type: 'risk'
  },
  {
    id: '6',
    title: 'Weekly Performance - Week 27',
    description: 'Trading performance summary for week 27 of 2023',
    date: '2023-07-09',
    metrics: {
      totalTrades: 12,
      winRate: 75,
      profit: 950,
      drawdown: 2.8
    },
    type: 'weekly'
  }
];

export const traders = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Senior Trader',
    performance: {
      monthlyProfit: 2500,
      winRate: 68,
      totalTrades: 35,
      averageRR: 2.1
    },
    specialties: ['Forex', 'Commodities'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Swing Trader',
    performance: {
      monthlyProfit: 1800,
      winRate: 72,
      totalTrades: 22,
      averageRR: 2.4
    },
    specialties: ['Indices', 'Stocks'],
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    role: 'Algorithmic Trader',
    performance: {
      monthlyProfit: -500,
      winRate: 45,
      totalTrades: 120,
      averageRR: 1.2
    },
    specialties: ['Crypto', 'Forex'],
    status: 'on leave'
  },
  {
    id: '4',
    name: 'Emma Davis',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    role: 'Day Trader',
    performance: {
      monthlyProfit: 1200,
      winRate: 58,
      totalTrades: 95,
      averageRR: 1.5
    },
    specialties: ['Stocks', 'Options'],
    status: 'active'
  },
  {
    id: '5',
    name: 'David Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    role: 'Portfolio Manager',
    performance: {
      monthlyProfit: 900,
      winRate: 62,
      totalTrades: 18,
      averageRR: 2.8
    },
    specialties: ['Bonds', 'Indices'],
    status: 'inactive'
  }
];

export const trades = [
  {
    id: '1',
    pair: 'EUR/USD',
    type: 'BUY',
    entryPrice: 1.0921,
    exitPrice: 1.1045,
    size: 0.5,
    profitLoss: 620,
    date: '2023-07-28T09:30:00',
    status: 'closed',
    checklistCompleted: true,
    trader: 'John Smith'
  },
  {
    id: '2',
    pair: 'GBP/JPY',
    type: 'SELL',
    entryPrice: 182.354,
    exitPrice: 180.215,
    size: 0.3,
    profitLoss: 485,
    date: '2023-07-27T14:15:00',
    status: 'closed',
    checklistCompleted: true,
    trader: 'Sarah Johnson'
  },
  {
    id: '3',
    pair: 'USD/CAD',
    type: 'SELL',
    entryPrice: 1.3245,
    exitPrice: 1.3315,
    size: 0.4,
    profitLoss: -224,
    date: '2023-07-26T11:45:00',
    status: 'closed',
    checklistCompleted: false,
    trader: 'Michael Chen'
  },
  {
    id: '4',
    pair: 'AUD/USD',
    type: 'BUY',
    entryPrice: 0.6732,
    exitPrice: null,
    size: 0.6,
    profitLoss: 318,
    date: '2023-07-28T15:20:00',
    status: 'open',
    checklistCompleted: true,
    trader: 'Emma Davis'
  },
  {
    id: '5',
    pair: 'USD/JPY',
    type: 'BUY',
    entryPrice: 139.45,
    exitPrice: 138.72,
    size: 0.5,
    profitLoss: -365,
    date: '2023-07-25T10:10:00',
    status: 'closed',
    checklistCompleted: true,
    trader: 'David Wilson'
  },
  {
    id: '6',
    pair: 'EUR/GBP',
    type: 'SELL',
    entryPrice: 0.8621,
    exitPrice: null,
    size: 0.3,
    profitLoss: 142,
    date: '2023-07-28T13:40:00',
    status: 'open',
    checklistCompleted: true,
    trader: 'John Smith'
  },
  {
    id: '7',
    pair: 'NZD/USD',
    type: 'BUY',
    entryPrice: 0.6198,
    exitPrice: 0.6245,
    size: 0.4,
    profitLoss: 188,
    date: '2023-07-24T09:05:00',
    status: 'closed',
    checklistCompleted: true,
    trader: 'Sarah Johnson'
  },
  {
    id: '8',
    pair: 'USD/CHF',
    type: 'SELL',
    entryPrice: 0.8956,
    exitPrice: null,
    size: 0.5,
    profitLoss: -95,
    date: '2023-07-28T11:30:00',
    status: 'open',
    checklistCompleted: false,
    trader: 'Michael Chen'
  }
];
