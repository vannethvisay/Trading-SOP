import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import GlassCard from '../ui/GlassCard';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface PieChartProps {
  data: ChartData<'doughnut'>;
  title: string;
  centerText?: {
    title: string;
    value: string | number;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data, title, centerText }) => {
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          padding: 20,
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      },
      title: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1e293b',
        bodyColor: '#334155',
        borderColor: 'rgba(148, 163, 184, 0.2)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 6
      }
    }
  };

  return (
    <GlassCard className="h-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex space-x-2">
          <button className="tab-button active">Today</button>
          <button className="tab-button">Week</button>
        </div>
      </div>
      <div className="h-64 relative">
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

export default PieChart;
