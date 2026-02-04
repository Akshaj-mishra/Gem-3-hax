// src/components/Features/FeaturePage/FeatureDetailRow.tsx
import React from 'react';
import { type Feature } from '../../../data/featureData';

interface FeatureDetailRowProps {
  feature: Feature;
  reverse?: boolean;
}

export const FeatureDetailRow: React.FC<FeatureDetailRowProps> = ({ feature, reverse }) => {
  return (
    <div className={`flex flex-col gap-16 items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Visual / Icon Side */}
      <div className="w-full md:w-1/2">
        <div className="relative group p-1">
          {/* Animated border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          
          <div className="relative aspect-video rounded-[2.2rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="scale-[3.5] text-blue-600 dark:text-blue-400 transition-transform duration-700 group-hover:scale-[4]">
              {feature.icon}
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Side */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {feature.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {feature.details || feature.description}
          </p>
        </div>
        
        {/* Capability Tags */}
        {feature.tags && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {feature.tags.map(tag => (
              <div key={tag} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
