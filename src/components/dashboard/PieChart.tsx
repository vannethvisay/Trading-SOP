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
  isLoading?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, centerText, isLoading = false }) => {
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
      }
    },
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log('Clicked on:', data.labels[index]);
      }
    }
  };

  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex-1 relative" style={{ minHeight: '250px' }}>
        {isLoading ? (
          <div className="animate-pulse h-full flex flex-col">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex-1 bg-gray-200 rounded-full"></div>
          </div>
        ) : (
          <>
            <Doughnut options={options} data={data} />
            {centerText && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-xs text-gray-500">{centerText.title}</p>
                <p className="text-2xl font-bold text-gray-800">{centerText.value}</p>
              </div>
            )}
          </>
        )}
      </div>
    </GlassCard>
  );
};

export default PieChart;
