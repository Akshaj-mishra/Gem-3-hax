// src/components/UI/Navbar/FeaturesNavbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarBase } from './NavbarBase';
import { DarkModeToggle } from '../Darkmode/DarkModeToggle';
import { ChevronLeft, Info } from 'lucide-react';

export const FeaturesNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavbarBase
      // Left: Navigation back to landing
      leftSlot={
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-bold">Exit to Home</span>
        </button>
      }

      // Center: The "Current View" indicator
     centerSlot={
        <div className="flex items-center gap-3 px-6 py-2 bg-slate-100/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-inner">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Gemini <span className="text-blue-600">Explorer</span>
          </span>
        </div>
      }
      // Right: App Actions
      rightSlot={
        <>
          <DarkModeToggle />
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-transform active:scale-95">
            Docs
          </button>
        </>
      }
    />
  );
};
