import React, { useState } from 'react';
import { TradingAccount } from '../../types';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import { v4 as uuidv4 } from 'uuid';

interface AccountFormProps {
  onSave: (account: TradingAccount) => void;
  onCancel: () => void;
  editAccount?: TradingAccount;
}

const AccountForm: React.FC<AccountFormProps> = ({ onSave, onCancel, editAccount }) => {
  const [account, setAccount] = useState<Partial<TradingAccount>>(
    editAccount || {
      name: '',
      accountNumber: '',
      broker: '',
      balance: 0,
      currency: 'USD',
      type: 'live',
      status: 'active'
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccount(prev => ({
      ...prev,
      [name]: name === 'balance' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAccount: TradingAccount = {
      id: editAccount?.id || uuidv4(),
      name: account.name || '',
      accountNumber: account.accountNumber || '',
      broker: account.broker || '',
      balance: account.balance || 0,
      currency: account.currency || 'USD',
      type: (account.type as 'demo' | 'live' | 'prop') || 'live',
      status: (account.status as 'active' | 'inactive' | 'suspended') || 'active',
      createdAt: editAccount?.createdAt || new Date().toISOString(),
      lastActivity: editAccount?.lastActivity
    };
    
    onSave(newAccount);
  };

  return (
    <GlassCard className="max-w-2xl mx-auto mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editAccount ? 'Edit Trading Account' : 'Add New Trading Account'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <input
              type="text"
              name="name"
              value={account.name || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={account.accountNumber || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Broker
            </label>
            <input
              type="text"
              name="broker"
              value={account.broker || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Balance
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                $
              </span>
              <input
                type="number"
                name="balance"
                value={account.balance || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select
              name="currency"
              value={account.currency || 'USD'}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <select
              name="type"
              value={account.type || 'live'}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="live">Live</option>
              <option value="demo">Demo</option>
              <option value="prop">Prop Firm</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={account.status || 'active'}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <GlassButton
            type="button"
            variant="secondary"
            onClick={onCancel}
          >
            Cancel
          </GlassButton>
          <GlassButton
            type="submit"
            variant="primary"
          >
            {editAccount ? 'Update Account' : 'Add Account'}
          </GlassButton>
        </div>
      </form>
    </GlassCard>
  );
};

export default AccountForm;
