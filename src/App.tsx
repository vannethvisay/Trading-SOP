import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Traders from './pages/Traders';
import Checklists from './pages/Checklists';
import Trades from './pages/Trades';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/traders" element={<Traders />} />
        <Route path="/checklists" element={<Checklists />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
