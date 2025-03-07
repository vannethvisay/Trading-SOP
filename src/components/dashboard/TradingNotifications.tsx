import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isNew: boolean;
}

const TradingNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Trade Executed',
      message: 'Buy order EUR/USD executed at 1.0876',
      time: '2 mins ago',
      type: 'success',
      isNew: true
    },
    {
      id: 2,
      title: 'Take Profit Hit',
      message: 'Take profit triggered on GBP/JPY at 182.45',
      time: '15 mins ago',
      type: 'info',
      isNew: true
    },
    {
      id: 3,
      title: 'Margin Warning',
      message: 'Account approaching 80% margin usage',
      time: '45 mins ago',
      type: 'warning',
      isNew: false
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isNew: false } : notification
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success':
        return (
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <GlassCard className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trading Notifications</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {notifications.filter(n => n.isNew).length} New
        </span>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`p-3 rounded-lg flex items-start ${
              notification.isNew ? 'bg-blue-50' : 'bg-gray-50'
            } transition-colors duration-300`}
          >
            <div className="relative">
              {getTypeIcon(notification.type)}
              {notification.isNew && (
                <span className="notification-dot pulse"></span>
              )}
            </div>
            
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">{notification.title}</h3>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              
              <div className="flex justify-end mt-2">
                <button 
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all notifications
        </button>
      </div>
    </GlassCard>
  );
};

export default TradingNotifications;
