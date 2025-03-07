import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
