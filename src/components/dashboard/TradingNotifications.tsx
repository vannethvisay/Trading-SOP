import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface TradingNotificationsProps {
  onClose: () => void;
}

const TradingNotifications: React.FC<TradingNotificationsProps> = ({ onClose }) => {
  const [progress, setProgress] = useState(100);
  
  // Auto-close notification with progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 2;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  // Close notification when progress reaches 0
  useEffect(() => {
    if (progress <= 0) {
      onClose();
    }
  }, [progress, onClose]);
  
  // Randomly select a notification type
  const notificationType = React.useMemo(() => {
    const types = ['success', 'warning', 'info'];
    return types[Math.floor(Math.random() * types.length)];
  }, []);
  
  // Get notification content based on type
  const getNotificationContent = () => {
    switch (notificationType) {
      case 'success':
        return {
          icon: <CheckCircle size={20} className="text-green-500" />,
          title: 'Trade Executed Successfully',
          message: 'Your EUR/USD BUY order has been filled at 1.0921',
          color: 'border-green-500'
        };
      case 'warning':
        return {
          icon: <AlertTriangle size={20} className="text-amber-500" />,
          title: 'Margin Warning',
          message: 'Your account is approaching 80% margin usage',
          color: 'border-amber-500'
        };
      case 'info':
        return {
          icon: <Info size={20} className="text-blue-500" />,
          title: 'Market News Alert',
          message: 'USD Non-Farm Payrolls data release in 30 minutes',
          color: 'border-blue-500'
        };
      default:
        return {
          icon: <Info size={20} className="text-blue-500" />,
          title: 'Notification',
          message: 'You have a new trading notification',
          color: 'border-blue-500'
        };
    }
  };
  
  const notification = getNotificationContent();

  return (
    <div className={`fixed top-4 right-4 w-80 bg-white rounded-lg shadow-lg border-l-4 ${notification.color} z-50 overflow-hidden`}>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            {notification.icon}
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
            </div>
          </div>
          <button
            className="ml-4 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div 
        className={`h-1 ${
          notificationType === 'success' ? 'bg-green-500' : 
          notificationType === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
        }`}
        style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
      ></div>
    </div>
  );
};

export default TradingNotifications;
