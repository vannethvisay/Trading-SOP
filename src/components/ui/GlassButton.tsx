import React, { ButtonHTMLAttributes } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 backdrop-blur-md flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-500/80 hover:bg-blue-600/90 text-white border border-blue-400/30 shadow-md shadow-blue-500/20',
    secondary: 'bg-gray-500/50 hover:bg-gray-600/60 text-white border border-gray-400/30 shadow-md shadow-gray-500/20',
    danger: 'bg-red-500/80 hover:bg-red-600/90 text-white border border-red-400/30 shadow-md shadow-red-500/20',
    success: 'bg-green-500/80 hover:bg-green-600/90 text-white border border-green-400/30 shadow-md shadow-green-500/20'
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
