// src/components/Hero/Hero.tsx
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { HeroBadge } from './HeroBadge';
import { HeroHeadline } from './HeroHeadline';
import { HeroVisual } from './HeroVisual';

const Hero: React.FC = () => {
  return (
    // 'isolate' creates a scoped Z-stacking context
    // src/components/Hero/Hero.tsx
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 isolate">
      {/* Add 'text-center' here to ensure all nested text defaults to middle */}
      <div className="container relative mx-auto px-6 flex flex-col items-center text-center">

        {/* Ensure this div is w-full so the flex centering actually works */}
        <div className="max-w-4xl w-full flex flex-col items-center">
          <HeroBadge />

          {/* Increased margin here to let the headline breathe */}
          <div className="mb-10 w-full">
            <HeroHeadline />
          </div>

          {/* Restrict width of paragraph so lines don't get too long and awkward */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
            The all-in-one platform for developers who want to scale. 
            Automate your CI/CD, manage your database, and deploy globally in seconds.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* ... buttons ... */}
          </div>
        </div>

        {/* Hero Visual: Ensure it's w-full to fill the space left by the 'void' in your screenshot */}
        <div className="w-full mt-24 max-w-6xl">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;

