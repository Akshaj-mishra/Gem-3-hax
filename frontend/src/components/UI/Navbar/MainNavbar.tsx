// src/components/UI/Navbar/MainNavbar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavbarBase } from './NavbarBase';
import { DarkModeToggle } from '../Darkmode/DarkModeToggle';
import { Zap } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useScrollSpy } from '../../../hooks/useScrollSpy.tsx';
import { useLenis } from 'lenis/react';
import { landingSections, getIdsFromRegistry } from '../../ComponentsRegistery.tsx';

const navItems = landingSections
.filter(s => s.label)
.map(s => ({ name: s.label!, id: s.id }));

export const MainNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const isLandingPage = location.pathname === '/';

  const activeSection = useScrollSpy(getIdsFromRegistry(landingSections), 100);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isLandingPage && lenis) {
      e.preventDefault();
      lenis.scrollTo(0, { duration: 1.5 });
    }
  };

  const handleNavClick = (id: string) => {
    if (isLandingPage) {
      lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1.5 });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <NavbarBase
      leftSlot={
        <Link 
          to="/" 
          onClick={handleLogoClick} 
          className={cn(
            "flex items-center gap-3 group active:scale-95 transition-all duration-300",
            activeSection === 'hero' ? "opacity-100" : "opacity-80 hover:opacity-100"
          )}
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20 group-hover:rotate-3 transition-transform">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase">
            Gemini<span className="text-blue-600">Learn</span>
          </span>
        </Link>
      }

      centerSlot={
        <div className="flex items-center gap-1 bg-slate-200/50 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-slate-300/50 dark:border-white/10 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ease-out",

                  // INACTIVE STATES
                  "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", 

                  // ACTIVE STATES (The Fix)
                  isActive 
                    ? "bg-blue-600 dark:bg-blue-600 text-white shadow-md scale-105" 
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      }
      rightSlot={
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-95">
            Try Now
          </button>
        </div>
      }

      mobileMenuContent={
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "block w-full text-left text-lg font-bold py-3 border-b border-slate-50 dark:border-slate-800 transition-colors",
                activeSection === item.id ? "text-blue-600" : "text-slate-700 dark:text-slate-200"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      }
    />
  );
};
