import { Trader, ChecklistItem, Trade, Report } from '../types';

export const traders: Trader[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    performance: 78,
    trades: 145,
    winRate: 68,
    profitLoss: 12450,
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    performance: 92,
    trades: 203,
    winRate: 75,
    profitLoss: 24680,
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    performance: 65,
    trades: 98,
    winRate: 58,
    profitLoss: 7890,
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    performance: 88,
    trades: 176,
    winRate: 72,
    profitLoss: 18950,
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david.kim@example.com',
    performance: 45,
    trades: 67,
    winRate: 42,
    profitLoss: -3450,
    status: 'suspended',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const checklistItems: ChecklistItem[] = [
  { id: '1', title: 'Check economic calendar', completed: false, category: 'pre-trade' },
  { id: '2', title: 'Analyze market trends', completed: false, category: 'pre-trade' },
  { id: '3', title: 'Review risk management rules', completed: false, category: 'pre-trade' },
  { id: '4', title: 'Set stop loss and take profit', completed: false, category: 'pre-trade' },
  { id: '5', title: 'Check for support/resistance levels', completed: false, category: 'pre-trade' },
  { id: '6', title: 'Monitor position regularly', completed: false, category: 'during-trade' },
  { id: '7', title: 'Adjust stop loss if necessary', completed: false, category: 'during-trade' },
  { id: '8', title: 'Follow trading plan strictly', completed: false, category: 'during-trade' },
  { id: '9', title: 'Record trade details', completed: false, category: 'post-trade' },
  { id: '10', title: 'Analyze trade performance', completed: false, category: 'post-trade' },
  { id: '11', title: 'Document lessons learned', completed: false, category: 'post-trade' },
  { id: '12', title: 'Update trading journal', completed: false, category: 'post-trade' }
];

export const trades: Trade[] = [
  {
    id: '1',
    traderId: '1',
    pair: 'EUR/USD',
    type: 'buy',
    entryPrice: 1.0845,
    exitPrice: 1.0892,
    size: 1.5,
    profitLoss: 705,
    date: '2023-06-15T09:30:00',
    status: 'closed',
    notes: 'Strong momentum after ECB announcement',
    checklistCompleted: true
  },
  {
    id: '2',
    traderId: '2',
    pair: 'GBP/JPY',
    type: 'sell',
    entryPrice: 168.75,
    exitPrice: 167.90,
    size: 2.0,
    profitLoss: 1700,
    date: '2023-06-16T11:15:00',
    status: 'closed',
    notes: 'Technical breakdown at resistance',
    checklistCompleted: true
  },
  {
    id: '3',
    traderId: '3',
    pair: 'USD/CAD',
    type: 'buy',
    entryPrice: 1.3450,
    exitPrice: 1.3425,
    size: 1.0,
    profitLoss: -250,
    date: '2023-06-17T14:45:00',
    status: 'closed',
    notes: 'Oil price spike affected position negatively',
    checklistCompleted: false
  },
  {
    id: '4',
    traderId: '4',
    pair: 'AUD/USD',
    type: 'sell',
    entryPrice: 0.6725,
    exitPrice: 0.0,
    size: 1.2,
    profitLoss: 0,
    date: '2023-06-18T08:20:00',
    status: 'open',
    notes: 'Expecting downside after poor economic data',
    checklistCompleted: true
  },
  {
    id: '5',
    traderId: '1',
    pair: 'USD/JPY',
    type: 'buy',
    entryPrice: 142.85,
    exitPrice: 0.0,
    size: 1.8,
    profitLoss: 0,
    date: '2023-06-18T15:30:00',
    status: 'open',
    notes: 'Following trend after Fed announcement',
    checklistCompleted: true
  }
];

export const reports: Report[] = [
  {
    id: '1',
    title: 'Daily Performance Report - June 18, 2023',
    type: 'daily',
    date: '2023-06-18',
    totalTrades: 12,
    winRate: 67,
    profitLoss: 2850,
    topPerformers: ['2', '4', '1']
  },
  {
    id: '2',
    title: 'Weekly Performance Report - Week 24, 2023',
    type: 'weekly',
    date: '2023-06-11',
    totalTrades: 58,
    winRate: 62,
    profitLoss: 12450,
    topPerformers: ['2', '1', '4']
  },
  {
    id: '3',
    title: 'Monthly Performance Report - May 2023',
    type: 'monthly',
    date: '2023-05-01',
    totalTrades: 245,
    winRate: 64,
    profitLoss: 48750,
    topPerformers: ['2', '4', '3']
  }
];

export const dashboardStats: { 
  totalProfit: number;
  totalTrades: number;
  winRate: number;
  activeTraders: number;
  openTrades: number;
} = {
  totalProfit: 48750,
  totalTrades: 245,
  winRate: 64,
  activeTraders: 3,
  openTrades: 2
};

export const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Profit/Loss',
      data: [12500, 8900, -3200, 15600, 24800, 18500],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }
  ]
};

export const traderPerformanceData = {
  labels: ['Alex', 'Sarah', 'Michael', 'Emily', 'David'],
  datasets: [
    {
      label: 'Win Rate (%)',
      data: [68, 75, 58, 72, 42],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }
  ]
};

export const currencyPairPerformance = {
  labels: ['EUR/USD', 'GBP/JPY', 'USD/CAD', 'AUD/USD', 'USD/JPY'],
  datasets: [
    {
      label: 'Profit/Loss',
      data: [15600, 8900, -2200, 7500, 12800],
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }
  ]
};
