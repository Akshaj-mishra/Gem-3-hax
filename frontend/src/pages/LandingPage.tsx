// src/pages/LandingPage.tsx
import React, { useRef, useEffect, Suspense } from 'react';
import Navbar from '../components/UI/Navbar/Navbar.tsx';
import { sections } from '../components/ComponentsRegistery.tsx';
import { SmoothScroll } from '../components/Providers/SmoothScroll';

const LandingPage: React.FC = () => {
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listener when leaving the landing page
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        <main className="relative z-10 w-full flex flex-col items-center">
          <Navbar />
          {sections.map(({ id, Component }) => (
            <section key={id} id={id} className="w-full">
              <Suspense fallback={null}>
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
