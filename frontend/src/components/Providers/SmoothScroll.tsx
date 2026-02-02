// src/components/Providers/SmoothScroll.tsx
import { ReactLenis } from 'lenis/react';
import React from 'react';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1,      // Lower = smoother/slower (0.1 is the sweet spot)
      duration: 1.5,  // How long the "glide" lasts
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    }}>
      {children}
    </ReactLenis>
  );
};
