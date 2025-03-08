import React from 'react';
import { TradingAccount } from '../../types';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { format } from 'date-fns';
import { Wallet, Calendar, DollarSign } from 'lucide-react';

interface AccountSelectorProps {
  accounts: TradingAccount[];
  selectedAccountId: string | null;
  onSelectAccount: (accountId: string) => void;
}

const AccountSelector: React.FC<AccountSelectorProps> = ({ 
  accounts, 
  selectedAccountId, 
  onSelectAccount 
}) => {
  const getAccountTypeBadge = (type: string) => {
    switch (type) {
      case 'live':
        return <Badge variant="success">Live</Badge>;
      case 'demo':
        return <Badge variant="info">Demo</Badge>;
      case 'prop':
        return <Badge variant="warning">Prop</Badge>;
      default:
        return null;
    }
  };

  const getAccountStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'inactive':
        return <Badge variant="warning">Inactive</Badge>;
      case 'suspended':
        return <Badge variant="danger">Suspended</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {accounts.map((account) => (
        <div 
          key={account.id}
          onClick={() => onSelectAccount(account.id)}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-102 ${
            selectedAccountId === account.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
          }`}
        >
          <GlassCard className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
                  <p className="text-sm text-gray-500">{account.broker}</p>
                </div>
                <div className="flex space-x-2">
                  {getAccountTypeBadge(account.type)}
                  {getAccountStatusBadge(account.status)}
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Wallet size={16} className="mr-2 text-indigo-500" />
                    <span>Account #:</span>
                  </div>
                  <span className="text-sm font-medium">{account.accountNumber}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-green-500" />
                    <span>Balance:</span>
                  </div>
                  <span className="text-sm font-medium">${account.balance.toLocaleString()} {account.currency}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span>Created:</span>
                  </div>
                  <span className="text-sm font-medium">
                    {format(new Date(account.createdAt), 'MMM dd, yyyy')}
                  </span>
                </div>
              </div>
              
              {account.lastActivity && (
                <div className="mt-auto pt-3 text-xs text-gray-500">
                  Last activity: {format(new Date(account.lastActivity), 'MMM dd, yyyy HH:mm')}
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      ))}
    </div>
  );
};

export default AccountSelector;
