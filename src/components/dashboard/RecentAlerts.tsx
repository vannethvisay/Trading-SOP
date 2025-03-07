import React from 'react';
import GlassCard from '../ui/GlassCard';

interface Alert {
  id: number;
  type: 'critical' | 'warning';
  message: string;
  time: string;
}

const RecentAlerts: React.FC = () => {
  const alerts: Alert[] = [
    {
      id: 1,
      type: 'critical',
      message: 'EUR/USD approaching daily loss limit',
      time: '10 mins ago'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Unusual volume detected in USD/JPY',
      time: '25 mins ago'
    }
  ];

  return (
    <GlassCard className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
        <span className="status-badge critical">1 Critical</span>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {alerts.map(alert => (
          <div key={alert.id} className="p-2.5 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-2.5 ${
                alert.type === 'critical' ? 'bg-rose-100' : 'bg-amber-100'
              }`}>
                {alert.type === 'critical' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-xs font-semibold uppercase ${
                      alert.type === 'critical' ? 'text-rose-600' : 'text-amber-600'
                    }`}>
                      {alert.type}
                    </span>
                    <p className="mt-0.5 text-xs font-medium text-gray-800">{alert.message}</p>
                  </div>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">View</button>
                  <button className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default RecentAlerts;
