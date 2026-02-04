// src/hooks/useScrollSpy.ts
import { useState, useEffect } from 'react';

export const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const currentSection = ids.find(id => {
        const element = document.getElementById(id);
        if (!element) return false;
        const { offsetTop, offsetHeight } = element;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      });

      if (currentSection && currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, activeId, offset]);

  return activeId;
};
