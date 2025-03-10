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
    type: 'monthly',
    date: '2023-08-01',
    totalTrades: 42,
    winRate: 68,
    profitLoss: 3250,
    topPerformers: ['1', '2', '4']
  },
  {
    id: '2',
    title: 'Strategy Analysis - Breakout Trades',
    type: 'weekly',
    date: '2023-07-15',
    totalTrades: 28,
    winRate: 71,
    profitLoss: 1850,
    topPerformers: ['1', '4']
  },
  {
    id: '3',
    title: 'Quarterly Review - Q2 2023',
    type: 'monthly',
    date: '2023-07-02',
    totalTrades: 115,
    winRate: 62,
    profitLoss: 8750,
    topPerformers: ['1', '2', '3', '5']
  },
  {
    id: '4',
    title: 'Pair Analysis - EUR/USD',
    type: 'daily',
    date: '2023-06-28',
    totalTrades: 35,
    winRate: 65,
    profitLoss: 2200,
    topPerformers: ['1', '3']
  },
  {
    id: '5',
    title: 'Risk Management Audit',
    type: 'weekly',
    date: '2023-06-15',
    totalTrades: 87,
    winRate: 59,
    profitLoss: 5400,
    topPerformers: ['2', '4', '5']
  },
  {
    id: '6',
    title: 'Weekly Performance - Week 27',
    type: 'weekly',
    date: '2023-07-09',
    totalTrades: 12,
    winRate: 75,
    profitLoss: 950,
    topPerformers: ['1', '2']
  }
];

export const traders = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Senior Trader',
    performance: {
      monthlyProfit: 2500,
      winRate: 68,
      totalTrades: 35,
      averageRR: 2.1
    },
    specialties: ['Forex', 'Commodities'],
    status: 'active',
    profitSplit: {
      trader: 70,
      company: 30
    }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Swing Trader',
    performance: {
      monthlyProfit: 1800,
      winRate: 72,
      totalTrades: 22,
      averageRR: 2.4
    },
    specialties: ['Indices', 'Stocks'],
    status: 'active',
    profitSplit: {
      trader: 65,
      company: 35
    }
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    role: 'Algorithmic Trader',
    performance: {
      monthlyProfit: -500,
      winRate: 45,
      totalTrades: 120,
      averageRR: 1.2
    },
    specialties: ['Crypto', 'Forex'],
    status: 'on leave',
    profitSplit: {
      trader: 60,
      company: 40
    }
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    role: 'Day Trader',
    performance: {
      monthlyProfit: 1200,
      winRate: 58,
      totalTrades: 95,
      averageRR: 1.5
    },
    specialties: ['Stocks', 'Options'],
    status: 'active',
    profitSplit: {
      trader: 75,
      company: 25
    }
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    role: 'Portfolio Manager',
    performance: {
      monthlyProfit: 900,
      winRate: 62,
      totalTrades: 18,
      averageRR: 2.8
    },
    specialties: ['Bonds', 'Indices'],
    status: 'inactive',
    profitSplit: {
      trader: 50,
      company: 50
    }
  }
];

export const tradingAccounts = [
  {
    id: 'acc1',
    name: 'Main Forex Account',
    accountNumber: 'FX78923456',
    broker: 'IC Markets',
    balance: 25000,
    currency: 'USD',
    type: 'live',
    status: 'active',
    createdAt: '2023-01-15T10:30:00',
    lastActivity: '2023-07-28T15:45:00'
  },
  {
    id: 'acc2',
    name: 'Prop Firm Challenge',
    accountNumber: 'PF12345678',
    broker: 'FTMO',
    balance: 100000,
    currency: 'USD',
    type: 'prop',
    status: 'active',
    createdAt: '2023-03-22T09:15:00',
    lastActivity: '2023-07-27T11:20:00'
  },
  {
    id: 'acc3',
    name: 'Practice Account',
    accountNumber: 'DM45678901',
    broker: 'Oanda',
    balance: 10000,
    currency: 'USD',
    type: 'demo',
    status: 'active',
    createdAt: '2023-02-10T14:45:00',
    lastActivity: '2023-06-15T16:30:00'
  },
  {
    id: 'acc4',
    name: 'Crypto Trading',
    accountNumber: 'CT98765432',
    broker: 'Binance',
    balance: 15000,
    currency: 'USD',
    type: 'live',
    status: 'inactive',
    createdAt: '2022-11-05T08:20:00',
    lastActivity: '2023-05-20T10:15:00'
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
    trader: 'John Smith',
    traderId: '1',
    accountId: 'acc1'
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
    trader: 'Sarah Johnson',
    traderId: '2',
    accountId: 'acc2'
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
    trader: 'Michael Chen',
    traderId: '3',
    accountId: 'acc3'
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
    trader: 'Emma Davis',
    traderId: '4',
    accountId: 'acc1'
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
    trader: 'David Wilson',
    traderId: '5',
    accountId: 'acc2'
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
    trader: 'John Smith',
    traderId: '1',
    accountId: 'acc1'
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
    trader: 'Sarah Johnson',
    traderId: '2',
    accountId: 'acc2'
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
    trader: 'Michael Chen',
    traderId: '3',
    accountId: 'acc3'
  }
];
