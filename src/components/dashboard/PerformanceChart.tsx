import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import GlassCard from '../ui/GlassCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface PerformanceChartProps {
  data: any;
  title: string;
  isLoading?: boolean;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, title, isLoading = false }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        boxPadding: 5,
        usePointStyle: true,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          callback: function(value: any) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(value);
          }
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 2,
        hoverRadius: 5
      }
    }
  };

  return (
    <GlassCard className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {!isLoading && (
          <div className="flex space-x-2">
            <button className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
              1D
            </button>
            <button className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700">
              1W
            </button>
            <button className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
              1M
            </button>
          </div>
        )}
      </div>
      <div className="flex-1" style={{ minHeight: '250px' }}>
        {isLoading ? (
          <div className="animate-pulse h-full flex flex-col">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex-1 bg-gray-200 rounded"></div>
          </div>
        ) : (
          <Line options={options} data={data} />
        )}
      </div>
    </GlassCard>
  );
};

export default PerformanceChart;
