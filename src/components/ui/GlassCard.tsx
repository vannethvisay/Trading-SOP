import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass p-5 hover-lift ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
