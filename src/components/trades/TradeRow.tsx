import React from 'react';
import { Trade } from '../../types';
import Badge from '../ui/Badge';
import { format } from 'date-fns';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

interface TradeRowProps {
  trade: Trade;
}

const TradeRow: React.FC<TradeRowProps> = ({ trade }) => {
  return (
    <tr className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {trade.pair}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center">
          {trade.type === 'buy' ? (
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
          ) : (
            <ArrowDownRight size={16} className="text-red-500 mr-1" />
          )}
          <span className={trade.type === 'buy' ? 'text-green-600' : 'text-red-600'}>
            {trade.type.toUpperCase()}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {trade.entryPrice}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {trade.status === 'closed' ? trade.exitPrice : '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {trade.size}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <span className={`${trade.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trade.status === 'closed' ? `$${trade.profitLoss.toLocaleString()}` : '-'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {format(new Date(trade.date), 'MMM dd, yyyy HH:mm')}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Badge
          variant={trade.status === 'open' ? 'info' : 'success'}
        >
          {trade.status.toUpperCase()}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Badge
          variant={trade.checklistCompleted ? 'success' : 'warning'}
        >
          {trade.checklistCompleted ? 'COMPLETED' : 'INCOMPLETE'}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-blue-600 hover:text-blue-900">
          <ExternalLink size={16} />
        </button>
      </td>
    </tr>
  );
};

export default TradeRow;
