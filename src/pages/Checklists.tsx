import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import ChecklistItem from '../components/checklists/ChecklistItem';
import GlassButton from '../components/ui/GlassButton';
import { checklistItems as initialChecklistItems } from '../data/mockData';
import { Plus, Filter } from 'lucide-react';

const Checklists: React.FC = () => {
  const [checklistItems, setChecklistItems] = useState(initialChecklistItems);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const toggleItem = (id: string) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  
  const filteredItems = activeCategory === 'all'
    ? checklistItems
    : checklistItems.filter((item) => item.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'pre-trade', name: 'Pre-Trade' },
    { id: 'during-trade', name: 'During Trade' },
    { id: 'post-trade', name: 'Post-Trade' }
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trading Checklists</h1>
          <p className="text-gray-600">Manage your trading SOPs and checklists.</p>
        </div>
        <div className="flex space-x-3">
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </GlassButton>
          <GlassButton variant="primary" size="md" className="flex items-center">
            <Plus size={16} className="mr-2" />
            Add Item
          </GlassButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <GlassCard>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                  <span className="ml-auto bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5 text-xs">
                    {category.id === 'all'
                      ? checklistItems.length
                      : checklistItems.filter((item) => item.category === category.id).length}
                  </span>
                </button>
              ))}
            </nav>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Checklist Stats</h3>
              <div className="bg-blue-50/50 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round((checklistItems.filter(item => item.completed).length / checklistItems.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(checklistItems.filter(item => item.completed).length / checklistItems.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <div className="lg:col-span-3">
          <GlassCard>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {activeCategory === 'all' ? 'All Checklist Items' : `${activeCategory.replace('-', ' ')} Checklist`}
            </h2>
            
            <div className="space-y-3">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <ChecklistItem
                    key={item.id}
                    item={item}
                    onToggle={toggleItem}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center py-6">No checklist items found.</p>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Checklists;
