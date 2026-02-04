// src/components/UI/Navbar/Navbar.tsx
import React, { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Internal imports
import Logo from "../../../assets/AnimatedIcon.svg?react";
import { DarkModeToggle } from "../Darkmode/DarkModeToggle.tsx"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Features", id: "features" },
  { name: "Solutions", id: "solutions" },
  { name: "Testimonials", id: "testimonials" },
];

const SCROLL_THRESHOLD = 20;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el && location.pathname === "/") {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { targetId: id } });
    }
    setMenuOpen(false);
  }, [location.pathname, navigate]);

  const handleLogoClick = useCallback(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Branding - Integrated with your new Logo */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group transition-transform active:scale-95"
        >
          <Logo className="w-10 h-10 drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
          
          <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            Gemini<span className="text-blue-600">Learn</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-95">
            Try Now
          </button>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 md:hidden transition-all duration-300 ease-in-out origin-top shadow-2xl",
        menuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-95 opacity-0 invisible"
      )}>
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 py-3 border-b border-slate-50 dark:border-slate-800"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
