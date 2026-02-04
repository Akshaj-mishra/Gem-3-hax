// src/components/Hero/HeroVisual.tsx
import React from 'react';

export const HeroVisual: React.FC = () => (
  <div className="relative mt-12 md:mt-24 w-full max-w-6xl mx-auto px-4 perspective-1000 group">
    {/* Floating Decorative Elements */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

    {/* Main Dashboard Container */}
    <div className="relative rounded-3xl border border-slate-200/50 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-2 shadow-2xl transition-all duration-700 ease-out [transform:rotateX(10deg)_rotateY(0deg)] group-hover:[transform:rotateX(2deg)_rotateY(1deg)]">
      
      {/* Mock UI Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/50 dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="mx-auto bg-slate-200/50 dark:bg-white/5 px-4 py-1 rounded-md text-[10px] text-slate-400 font-mono">
          gemini-analysis-v3.live
        </div>
      </div>

      {/* The Visual Content */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950/50">
         {/* You can keep an image here, but let's add an AI overlay */}
         <img 
          src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
          alt="AI Analytics Interface" 
        />
        
        {/* Floating AI Insight Card */}
        <div className="absolute top-8 right-8 w-64 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-blue-500/30 shadow-xl animate-bounce-slow">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">G3</div>
              <div>
                <p className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Live Insight</p>
                <p className="text-[9px] text-slate-500">Just now</p>
              </div>
           </div>
           <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
             "The students are showing high engagement in the <strong>Quantum Mechanics</strong> module. Suggesting a pop-quiz to solidify knowledge."
           </p>
        </div>
      </div>
    </div>
  </div>
);
