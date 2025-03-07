import React from 'react';
import { ChecklistItem as ChecklistItemType } from '../../types';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onToggle: (id: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onToggle }) => {
  return (
    <div className="flex items-center p-3 border border-gray-200/50 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
      />
      <label
        htmlFor={`item-${item.id}`}
        className={`ml-3 text-sm font-medium ${
          item.completed ? 'text-gray-400 line-through' : 'text-gray-700'
        }`}
      >
        {item.title}
      </label>
      <div className="ml-auto">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${item.category === 'pre-trade' ? 'bg-blue-100 text-blue-800' : 
            item.category === 'during-trade' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-green-100 text-green-800'}`}
        >
          {item.category.replace('-', ' ')}
        </span>
      </div>
    </div>
  );
};

export default ChecklistItem;
