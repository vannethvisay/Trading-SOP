import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  ClipboardCheck, 
  TrendingUp, 
  FileText, 
  Settings, 
  LogOut,
  BarChart2
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: <BarChart3 size={20} />, path: '/' },
    { name: 'Traders', icon: <Users size={20} />, path: '/traders' },
    { name: 'Checklists', icon: <ClipboardCheck size={20} />, path: '/checklists' },
    { name: 'Trades', icon: <TrendingUp size={20} />, path: '/trades' },
    { name: 'Reports', icon: <FileText size={20} />, path: '/reports' },
    { name: 'Analytics', icon: <BarChart2 size={20} />, path: '/analytics' },
  ];

  return (
    <div className="h-screen w-64 bg-white/90 backdrop-blur-lg border-r border-gray-200/50 shadow-lg flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg">
            <TrendingUp size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            ForexSOP
          </h1>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="ml-auto w-1.5 h-6 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200/50">
        <Link
          to="/settings"
          className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
        >
          <Settings size={20} className="mr-3" />
          <span>Settings</span>
        </Link>
        <button className="w-full mt-2 flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-200">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
