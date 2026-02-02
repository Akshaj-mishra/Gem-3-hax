// src/components/Hero/Hero.tsx
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { HeroBadge } from './HeroBadge';
import { HeroHeadline } from './HeroHeadline';
import { HeroVisual } from './HeroVisual';

const Hero: React.FC = () => {
  return (
    // Added min-h-screen to ensure the section feels substantial
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-slate-950">
      
      {/* 1. Background Ambient Glows (Fixed positioning) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. Content Container */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        
        {/* Text Stack */}
        <div className="max-w-4xl w-full text-center flex flex-col items-center">
          <HeroBadge />
          
          {/* Headline - Simplified the component or just use it here for direct control */}
          <div className="mb-8">
             <HeroHeadline />
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            The all-in-one platform for developers who want to scale. 
            Automate your CI/CD, manage your database, and deploy globally in seconds.
          </p>

          {/* CTA Buttons - Better spacing/sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 active:scale-95">
              Start Building Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all">
              <Play size={18} className="fill-blue-600 text-blue-600" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* 3. Hero Visual - Now centered below content */}
        <div className="w-full mt-16 max-w-5xl">
           <HeroVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;
