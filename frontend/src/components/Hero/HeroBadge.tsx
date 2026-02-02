// src/components/Hero/HeroBadge.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroBadge: React.FC = () => (
  <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 overflow-hidden transition-all hover:border-blue-500/50 hover:bg-white/[0.06]">
    
    {/* 1. Shimmer Effect Overlay */}
    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

    {/* 2. Status Dot with multi-layered glow */}
    <div className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
    </div>

    {/* 3. Text with better spacing and contrast */}
    <span className="text-xs font-semibold tracking-wide text-slate-300 group-hover:text-blue-400 transition-colors">
      New: <span className="text-slate-100">AI-Powered Workflows</span>
    </span>

    <ChevronRight 
      size={14} 
      className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" 
    />
  </div>
);
