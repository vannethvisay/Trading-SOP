import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import GlassCard from '../ui/GlassCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: any;
  title: string;
  isLoading?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, isLoading = false }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        boxPadding: 5,
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
        {!isLoading && (
          <select className="text-xs px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option value="profit">Profit</option>
            <option value="volume">Volume</option>
            <option value="trades">Trades</option>
          </select>
        )}
      </div>
      <div className="flex-1" style={{ minHeight: '250px' }}>
        {isLoading ? (
          <div className="animate-pulse h-full flex flex-col">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex-1 bg-gray-200 rounded"></div>
          </div>
        ) : (
          <Bar options={options} data={data} />
        )}
      </div>
    </GlassCard>
  );
};

export default BarChart;
