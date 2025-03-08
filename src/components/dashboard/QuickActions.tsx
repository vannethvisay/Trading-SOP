import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Plus, BarChart2, FileText, Bell } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { 
      icon: <Plus size={18} className="text-white" />, 
      label: 'New Trade', 
      color: 'bg-indigo-500 hover:bg-indigo-600',
      onClick: () => console.log('New Trade clicked')
    },
    { 
      icon: <BarChart2 size={18} className="text-white" />, 
      label: 'Analytics', 
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => console.log('Analytics clicked')
    },
    { 
      icon: <FileText size={18} className="text-white" />, 
      label: 'Reports', 
      color: 'bg-emerald-500 hover:bg-emerald-600',
      onClick: () => console.log('Reports clicked')
    },
    { 
      icon: <Bell size={18} className="text-white" />, 
      label: 'Alerts', 
      color: 'bg-amber-500 hover:bg-amber-600',
      onClick: () => console.log('Alerts clicked')
    }
  ];

  return (
    <GlassCard className="h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} rounded-lg p-3 transition-colors duration-200 flex flex-col items-center justify-center`}
            onClick={action.onClick}
          >
            <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-2">
              {action.icon}
            </div>
            <span className="text-sm font-medium text-white">{action.label}</span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default QuickActions;
