// src/components/Hero/HeroBadge.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 animate-fade-in">
    <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
      New: AI-Powered Workflows
    </span>
    <ChevronRight size={14} className="text-blue-400" />
  </div>
);
