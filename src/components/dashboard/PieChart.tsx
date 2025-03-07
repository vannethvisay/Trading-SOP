import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import GlassCard from '../ui/GlassCard';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
  title: string;
  centerText?: {
    title: string;
    value: number;
  };
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, title, centerText }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        boxPadding: 5,
        usePointStyle: true
      }
    }
  };

  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex-1 relative" style={{ minHeight: '250px' }}>
        <Doughnut options={options} data={data} />
        
        {centerText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-sm text-gray-500">{centerText.title}</p>
            <p className="text-2xl font-bold text-gray-800">{centerText.value}</p>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default PieChartComponent;
