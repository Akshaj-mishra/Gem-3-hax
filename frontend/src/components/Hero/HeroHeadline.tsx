// src/components/Hero/HeroHeadline.tsx
import React from 'react';

export const HeroHeadline: React.FC = () => (
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-slate-900 dark:text-white transition-colors duration-500">
    Master any subject
    <br />
    <span className="relative inline-block mt-2">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 animate-gradient drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
        with Gemini AI.
      </span>
    </span>
  </h1>
);
