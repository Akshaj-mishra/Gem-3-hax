// src/components/Features/FeaturePage/FeatureHero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface FeatureHeroProps {
  title: string;
  subtitle: string;
}

export const FeatureHero: React.FC<FeatureHeroProps> = ({ title, subtitle }) => {
  return (
    <header className="relative pt-32 pb-16 overflow-hidden border-b border-slate-200 dark:border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </Link>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
          {title.split(' ')[0]} <span className="text-blue-600 dark:text-blue-500">{title.split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
