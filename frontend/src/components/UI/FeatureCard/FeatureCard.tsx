// src/components/UI/FeatureCard/FeatureCard.tsx

import React from 'react';

interface FeatureCardProps {
  children?: React.ReactNode;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  className?: string; // For the col-span logic
  variant?: 'glass' | 'primary' | 'code';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  children, 
  title, 
  desc, 
  icon, 
  className = "", 
  variant = 'glass' 
}) => {
  // Common base styles
  const baseStyles = `relative overflow-hidden rounded-3xl p-8 transition-all duration-300 border`;
  
  // Variant specific styles
  const variants = {
    glass: "bg-slate-900/40 border-white/10 hover:border-blue-500/30 group",
    primary: "bg-gradient-to-br from-blue-600 to-indigo-700 border-white/5 text-white shadow-xl shadow-blue-900/20",
    code: "bg-slate-950 border-white/10 flex flex-col md:flex-row items-center group"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className={variant === 'code' ? 'md:w-1/2 relative z-10' : 'relative z-10'}>
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className={`font-bold mb-2 ${variant === 'primary' ? 'text-2xl' : 'text-xl text-white'}`}>
          {title}
        </h3>
        <p className={variant === 'primary' ? 'text-blue-100/80' : 'text-slate-400'}>
          {desc}
        </p>
        {/* Render extra children like the "NYC-1" badges if passed */}
        {children && ! (variant === 'code') && <div className="mt-4">{children}</div>}
      </div>

      {/* Special slot for the Code visual specifically */}
      {variant === 'code' && children && (
        <div className="md:w-1/2 mt-6 md:mt-0">
          {children}
        </div>
      )}

      {/* Background decoration for Glass variant */}
      {variant === 'glass' && (
        <div className="absolute top-10 right-[-5%] w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      )}
    </div>
  );
};
