export interface Trader {
  id: string;
  name: string;
  email: string;
  performance: number | {
    monthlyProfit: number;
    winRate: number;
    totalTrades: number;
    averageRR: number;
  };
  trades?: number;
  winRate?: number;
  profitLoss?: number;
  status: 'active' | 'inactive' | 'suspended' | 'on leave';
  avatar: string;
  role?: string;
  specialties?: string[];
  profitSplit?: {
    trader: number;
    company: number;
  };
}

export interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
  category: 'pre-trade' | 'during-trade' | 'post-trade';
}

export interface TradingAccount {
  id: string;
  name: string;
  accountNumber: string;
  broker: string;
  balance: number;
  currency: string;
  type: 'demo' | 'live' | 'prop';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  lastActivity?: string;
}

export interface Trade {
  id: string;
  traderId: string;
  accountId?: string;
  pair: string;
  type: 'buy' | 'sell';
  entryPrice: number;
  exitPrice: number;
  size: number;
  profitLoss: number;
  date: string;
  status: 'open' | 'closed';
  notes: string;
  checklistCompleted: boolean;
}

export interface Report {
  id: string;
  title: string;
  type: 'daily' | 'weekly' | 'monthly';
  date: string;
  totalTrades: number;
  winRate: number;
  profitLoss: number;
  topPerformers: string[];
}

export interface DashboardStats {
  totalProfit: number;
  totalTrades: number;
  winRate: number;
  activeTraders: number;
  openTrades: number;
}
