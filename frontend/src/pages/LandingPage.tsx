// src/pages/LandingPage.tsx
import React, { useEffect, Suspense } from 'react';
import { useLenis } from 'lenis/react';

import { landingSections, getIdsFromRegistry } from '../components/ComponentsRegistery.tsx';
import { SmoothScroll } from '../components/Providers/SmoothScroll';

const LandingPage: React.FC = () => {
  const lenis = useLenis();

  const ids = getIdsFromRegistry(landingSections);

  // 1. Handle Mouse Movement (Spotlight)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Handle Incoming Hash Links (e.g., coming back from Features)
  useEffect(() => {
    if (window.location.hash && lenis) {
      const hash = window.location.hash;
      
      // Polling to wait for lazy-loaded components
      const checkExist = setInterval(() => {
        const element = document.querySelector(hash);
        
        if (element) {
          clearInterval(checkExist);
          lenis.scrollTo(hash, { 
            offset: -80, 
            duration: 1.5,
            immediate: false 
          });
        }
      }, 50);

      // Timeout after 2 seconds so it doesn't poll forever if the ID is wrong
      setTimeout(() => clearInterval(checkExist), 2000);
      
      return () => clearInterval(checkExist);
    }
  }, [lenis]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(59,130,246,0.1),transparent_40%)]" />
        
        <main className="relative z-10 w-full flex flex-col items-center">
          {landingSections.map(({ id, Component }) => (
            <section key={id} id={id} className="w-full">
              <Suspense fallback={<div className="h-screen w-full animate-pulse bg-slate-200 dark:bg-slate-800" />}>
                <Component />
              </Suspense>
            </section>
          ))}
        </main>
      </div>
    </SmoothScroll>
  );
};

export default LandingPage;
