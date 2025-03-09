import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import TraderCard from '../components/traders/TraderCard';
import TraderForm from '../components/traders/TraderForm';
import TraderDetails from '../components/traders/TraderDetails';
import TraderFilters from '../components/traders/TraderFilters';
import ProfitSplitEditor from '../components/ui/ProfitSplitEditor';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import GlassButton from '../components/ui/GlassButton';
import { traders as tradersData } from '../data/mockData';
import { UserPlus, Filter, PieChart, Search } from 'lucide-react';
import { Trader } from '../types';

const Traders: React.FC = () => {
  const [traders, setTraders] = useState<Trader[]>(tradersData);
  const [filteredTraders, setFilteredTraders] = useState<Trader[]>(tradersData);
  const [selectedTrader, setSelectedTrader] = useState<Trader | null>(null);
  const [editingTrader, setEditingTrader] = useState<Trader | null>(null);
  const [isAddingTrader, setIsAddingTrader] = useState(false);
  const [editingProfitSplit, setEditingProfitSplit] = useState<Trader | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirmTrader, setDeleteConfirmTrader] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<{
    status: string[];
    specialties: string[];
    performance: string;
  }>({
    status: [],
    specialties: [],
    performance: ''
  });

  // Extract all unique specialties from traders for filter options
  const availableSpecialties = useMemo(() => {
    const specialtiesSet = new Set<string>();
    traders.forEach(trader => {
      trader.specialties?.forEach(specialty => {
        specialtiesSet.add(specialty);
      });
    });
    return Array.from(specialtiesSet);
  }, [traders]);

  // Apply filters and search
  useEffect(() => {
    let result = [...traders];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(trader => 
        trader.name.toLowerCase().includes(query) || 
        trader.email.toLowerCase().includes(query) ||
        (trader.role && trader.role.toLowerCase().includes(query))
      );
    }
    
    // Apply status filters
    if (activeFilters.status.length > 0) {
      result = result.filter(trader => 
        activeFilters.status.includes(trader.status)
      );
    }
    
    // Apply specialty filters
    if (activeFilters.specialties.length > 0) {
      result = result.filter(trader => 
        trader.specialties?.some(specialty => 
          activeFilters.specialties.includes(specialty)
        )
      );
    }
    
    // Apply performance filters
    if (activeFilters.performance) {
      const getPerformanceValue = (trader: Trader) => {
        if (typeof trader.performance === 'object') {
          return trader.performance.monthlyProfit;
        } else if (typeof trader.profitLoss === 'number') {
          return trader.profitLoss;
        } else {
          return 0;
        }
      };
      
      const getWinRate = (trader: Trader) => {
        if (typeof trader.performance === 'object') {
          return trader.performance.winRate;
        } else if (typeof trader.winRate === 'number') {
          return trader.winRate;
        } else {
          return 0;
        }
      };
      
      switch (activeFilters.performance) {
        case 'positive':
          result = result.filter(trader => getPerformanceValue(trader) > 0);
          break;
        case 'negative':
          result = result.filter(trader => getPerformanceValue(trader) < 0);
          break;
        case 'high':
          result = result.filter(trader => getWinRate(trader) >= 60);
          break;
        case 'low':
          result = result.filter(trader => getWinRate(trader) < 50);
          break;
      }
    }
    
    setFilteredTraders(result);
  }, [traders, searchQuery, activeFilters]);

  const handleAddTrader = () => {
    setIsAddingTrader(true);
    setSelectedTrader(null);
    setEditingTrader(null);
    setEditingProfitSplit(null);
  };

  const handleTraderSubmit = (traderData: Omit<Trader, 'id'>) => {
    if (editingTrader) {
      // Update existing trader
      setTraders(prevTraders => 
        prevTraders.map(trader => 
          trader.id === editingTrader.id 
            ? { ...traderData, id: editingTrader.id } 
            : trader
        )
      );
      setEditingTrader(null);
    } else {
      // Add new trader
      const newTrader: Trader = {
        ...traderData,
        id: `trader-${Date.now()}`
      };
      setTraders(prevTraders => [...prevTraders, newTrader]);
      setIsAddingTrader(false);
    }
  };

  const handleEditTrader = (trader: Trader) => {
    setEditingTrader(trader);
    setSelectedTrader(null);
    setIsAddingTrader(false);
    setEditingProfitSplit(null);
  };

  const handleDeleteTrader = (traderId: string) => {
    setDeleteConfirmTrader(traderId);
  };

  const confirmDeleteTrader = () => {
    if (deleteConfirmTrader) {
      setTraders(prevTraders => 
        prevTraders.filter(trader => trader.id !== deleteConfirmTrader)
      );
      if (selectedTrader?.id === deleteConfirmTrader) {
        setSelectedTrader(null);
      }
      setDeleteConfirmTrader(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmTrader(null);
  };

  const handleViewTrader = (trader: Trader) => {
    setSelectedTrader(trader);
    setEditingTrader(null);
    setIsAddingTrader(false);
    setEditingProfitSplit(null);
  };

  const handleBackToList = () => {
    setSelectedTrader(null);
    setEditingTrader(null);
    setIsAddingTrader(false);
    setEditingProfitSplit(null);
  };

  const handleEditProfitSplit = (trader: Trader) => {
    setEditingProfitSplit(trader);
    setSelectedTrader(null);
    setEditingTrader(null);
    setIsAddingTrader(false);
  };

  const handleSaveProfitSplit = (traderId: string, traderSplit: number, companySplit: number) => {
    setTraders(prevTraders => 
      prevTraders.map(trader => 
        trader.id === traderId 
          ? { 
              ...trader, 
              profitSplit: { 
                trader: traderSplit, 
                company: companySplit 
              } 
            } 
          : trader
      )
    );
    setEditingProfitSplit(null);
  };

  const handleCancelEdit = () => {
    setEditingProfitSplit(null);
    setEditingTrader(null);
    setIsAddingTrader(false);
  };

  const handleApplyFilters = (filters: {
    status: string[];
    specialties: string[];
    performance: string;
  }) => {
    setActiveFilters(filters);
    setShowFilters(false);
  };

  return (
    <Layout>
      {selectedTrader ? (
        <TraderDetails 
          trader={selectedTrader}
          onBack={handleBackToList}
          onEdit={handleEditTrader}
          onDelete={handleDeleteTrader}
          onEditProfitSplit={handleEditProfitSplit}
        />
      ) : editingTrader || isAddingTrader ? (
        <TraderForm 
          trader={editingTrader}
          onSubmit={handleTraderSubmit}
          onCancel={handleCancelEdit}
        />
      ) : editingProfitSplit ? (
        <ProfitSplitEditor 
          trader={editingProfitSplit} 
          onSave={handleSaveProfitSplit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Traders Management</h1>
              <p className="text-gray-600">Manage and monitor your trading team's performance.</p>
            </div>
            <div className="flex space-x-3">
              <GlassButton 
                variant="secondary" 
                size="md" 
                className="flex items-center"
                onClick={() => setShowFilters(true)}
              >
                <Filter size={16} className="mr-2" />
                Filter
              </GlassButton>
              <GlassButton 
                variant="primary" 
                size="md" 
                className="flex items-center"
                onClick={handleAddTrader}
              >
                <UserPlus size={16} className="mr-2" />
                Add Trader
              </GlassButton>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search traders by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {showFilters && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <TraderFilters 
                onFilter={handleApplyFilters}
                onClose={() => setShowFilters(false)}
                availableSpecialties={availableSpecialties}
              />
            </div>
          )}
          
          {filteredTraders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No traders found matching your criteria.</p>
              {(activeFilters.status.length > 0 || activeFilters.specialties.length > 0 || activeFilters.performance || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveFilters({ status: [], specialties: [], performance: '' });
                    setSearchQuery('');
                  }}
                  className="mt-2 text-indigo-600 hover:text-indigo-800"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTraders.map((trader) => (
                <div key={trader.id} className="relative">
                  <div 
                    onClick={() => handleViewTrader(trader)}
                    className="cursor-pointer h-full"
                  >
                    <TraderCard trader={trader} />
                  </div>
                  <button 
                    onClick={() => handleEditProfitSplit(trader)}
                    className="absolute top-3 right-3 p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors"
                    title="Edit Profit Split"
                  >
                    <PieChart size={16} className="text-indigo-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      
      {deleteConfirmTrader && (
        <ConfirmDialog
          title="Delete Trader"
          message="Are you sure you want to delete this trader? This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={confirmDeleteTrader}
          onCancel={handleCancelDelete}
          variant="danger"
        />
      )}
    </Layout>
  );
};

export default Traders;
