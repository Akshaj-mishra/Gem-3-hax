// src/components/Animations/InkDiffusion.tsx
import React, { useEffect, useRef } from "react";
import "./InkDiffusion.css";

interface InkDiffusionProps {
  cursorRef: React.MutableRefObject<{ x: number; y: number }>;
}

export const InkDiffusion: React.FC<InkDiffusionProps> = ({ cursorRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spawnBlot = () => {
      if (!containerRef.current) return;

      const blot = document.createElement("div");
      blot.className = "ink-blot animate-soak";
      
      // Randomize size for asymmetry
      const size = Math.random() * 300 + 150;
      const x = cursorRef.current.x || window.innerWidth / 2;
      const y = cursorRef.current.y || window.innerHeight / 2;

      // Add a slight random offset so they don't stack perfectly
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;

      blot.style.width = `${size}px`;
      blot.style.height = `${size}px`;
      blot.style.left = `${x + offsetX - size / 2}px`;
      blot.style.top = `${y + offsetY - size / 2}px`;

      // Randomize the rotation so the "bleed" looks different every time
      blot.style.rotate = `${Math.random() * 360}deg`;

      containerRef.current.appendChild(blot);

      // Clean up DOM after animation finishes
      setTimeout(() => {
        blot.remove();
      }, 8000);
    };

    const interval = setInterval(spawnBlot, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* The SVG Filter definition - must stay in the DOM */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="ink-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" 
            />
          </filter>
        </defs>
      </svg>
      
      <div ref={containerRef} className="ink-container fixed inset-0 -z-10 pointer-events-none" />
    </>
  );
};
