import React from 'react';
import Layout from '../components/layout/Layout';
import ReportCard from '../components/reports/ReportCard';
import GlassButton from '../components/ui/GlassButton';
import { reports } from '../data/mockData';
import { FileText, Filter } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trading Reports</h1>
          <p className="text-gray-600">View and analyze your trading performance reports.</p>
        </div>
        <div className="flex space-x-3">
          <GlassButton variant="secondary" size="md" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </GlassButton>
          <GlassButton variant="primary" size="md" className="flex items-center">
            <FileText size={16} className="mr-2" />
            Generate Report
          </GlassButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </Layout>
  );
};

export default Reports;
