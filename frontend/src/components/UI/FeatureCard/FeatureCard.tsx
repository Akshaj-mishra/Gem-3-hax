// src/components/UI/FeatureCard/FeatureCard.tsx
import React from 'react';

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  desc, 
  icon, 
  className = "", 
  variant = 'glass',
  children 
}) => {
  const baseStyles = "relative overflow-hidden rounded-3xl p-8 transition-all duration-500 border ease-in-out";
  
  const variants = {
    glass: `
      bg-white/30 dark:bg-slate-900/30 
      backdrop-blur-md 
      border-white/40 dark:border-white/10 
      shadow-xl dark:shadow-none
      hover:bg-white/40 dark:hover:bg-slate-800/40
    `,
    primary: `
      bg-blue-600/80 backdrop-blur-lg
      text-white border-white/20 
      shadow-xl shadow-blue-500/20
    `,
    code: `
      bg-slate-50/50 dark:bg-slate-950/50 
      backdrop-blur-md border-slate-200 dark:border-white/10
    `
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className} group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        
        {/* --- ICON WRAPPER GOES HERE --- */}
        {icon && (
          <div className={`mb-4 inline-flex items-center justify-center transition-all duration-500 group-hover:scale-110
            ${variant === 'primary' 
              ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' 
              : 'text-blue-600 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]'
            }`}
          >
            {icon}
          </div>
        )}
        {/* ------------------------------- */}
        
        <h3 className={`font-bold mb-2 text-xl tracking-tight transition-colors
          ${variant === 'primary' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          {title}
        </h3>
        
        <p className={`leading-relaxed transition-colors text-sm
          ${variant === 'primary' ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
          {desc}
        </p>
        
        {children}
      </div>
    </div>
  );
};
