import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import TradeRow from '../components/trades/TradeRow';
import GlassButton from '../components/ui/GlassButton';
import AccountSelector from '../components/trades/AccountSelector';
import AccountForm from '../components/trades/AccountForm';
import { trades, tradingAccounts as initialAccounts } from '../data/mockData';
import { Plus, Filter, Download, CreditCard, Trash2, Edit } from 'lucide-react';
import { TradingAccount } from '../types';

const Trades: React.FC = () => {
  const [tradingAccounts, setTradingAccounts] = useState<TradingAccount[]>(initialAccounts);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [editingAccount, setEditingAccount] = useState<TradingAccount | undefined>(undefined);
  
  // Filter trades based on selected account
  const filteredTrades = selectedAccountId 
    ? trades.filter(trade => trade.accountId === selectedAccountId)
    : trades;
  
  // Find account name for display in trade rows
  const getAccountName = (accountId?: string) => {
    if (!accountId) return undefined;
    const account = tradingAccounts.find(acc => acc.id === accountId);
    return account?.name;
  };
  
  const handleSelectAccount = (accountId: string) => {
    setSelectedAccountId(accountId);
  };
  
  const handleAddAccount = () => {
    setEditingAccount(undefined);
    setShowAddAccount(true);
  };
  
  const handleEditAccount = () => {
    if (!selectedAccountId) return;
    const accountToEdit = tradingAccounts.find(acc => acc.id === selectedAccountId);
    if (accountToEdit) {
      setEditingAccount(accountToEdit);
      setShowAddAccount(true);
    }
  };
  
  const handleDeleteAccount = () => {
    if (!selectedAccountId) return;
    if (window.confirm('Are you sure you want to delete this account? This action cannot be undone.')) {
      setTradingAccounts(prev => prev.filter(acc => acc.id !== selectedAccountId));
      setSelectedAccountId(null);
    }
  };
  
  const handleSaveAccount = (account: TradingAccount) => {
    if (editingAccount) {
      // Update existing account
      setTradingAccounts(prev => 
        prev.map(acc => acc.id === account.id ? account : acc)
      );
    } else {
      // Add new account
      setTradingAccounts(prev => [...prev, account]);
    }
    setShowAddAccount(false);
    setEditingAccount(undefined);
    setSelectedAccountId(account.id);
  };
  
  const handleCancelAddAccount = () => {
    setShowAddAccount(false);
    setEditingAccount(undefined);
  };
  
  const handleClearFilter = () => {
    setSelectedAccountId(null);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trade Management</h1>
          <p className="text-gray-600">Track and manage all your trading positions.</p>
        </div>
        <div className="flex space-x-3">
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </GlassButton>
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </GlassButton>
          <GlassButton variant="primary" size="md" className="flex items-center">
            <Plus size={16} className="mr-2" />
            New Trade
          </GlassButton>
        </div>
      </div>
      
      {/* Account Management Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Trading Accounts</h2>
          <div className="flex space-x-2">
            {selectedAccountId && (
              <>
                <GlassButton 
                  variant="secondary" 
                  size="sm" 
                  className="flex items-center"
                  onClick={handleEditAccount}
                >
                  <Edit size={16} className="mr-2" />
                  Edit
                </GlassButton>
                <GlassButton 
                  variant="danger" 
                  size="sm" 
                  className="flex items-center"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </GlassButton>
              </>
            )}
            <GlassButton 
              variant="primary" 
              size="sm" 
              className="flex items-center"
              onClick={handleAddAccount}
            >
              <CreditCard size={16} className="mr-2" />
              Add Account
            </GlassButton>
          </div>
        </div>
        
        {showAddAccount ? (
          <AccountForm 
            onSave={handleSaveAccount} 
            onCancel={handleCancelAddAccount}
            editAccount={editingAccount}
          />
        ) : (
          <>
            <AccountSelector 
              accounts={tradingAccounts}
              selectedAccountId={selectedAccountId}
              onSelectAccount={handleSelectAccount}
            />
            
            {selectedAccountId && (
              <div className="flex justify-end mb-4">
                <GlassButton 
                  variant="secondary" 
                  size="sm"
                  onClick={handleClearFilter}
                >
                  Show All Trades
                </GlassButton>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Trades Table */}
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pair
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entry Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exit Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  P/L
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Checklist
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTrades.map((trade) => (
                <TradeRow 
                  key={trade.id} 
                  trade={trade} 
                  accountName={getAccountName(trade.accountId)}
                />
              ))}
              {filteredTrades.length === 0 && (
                <tr>
                  <td colSpan={11} className="px-6 py-10 text-center text-gray-500">
                    {selectedAccountId 
                      ? "No trades found for this account. Add a new trade to get started."
                      : "No trades found. Add a new trade to get started."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </Layout>
  );
};

export default Trades;
