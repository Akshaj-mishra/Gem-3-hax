// src/components/UI/Navbar/NavbarBase.tsx
import React, { useState } from "react";
import { cn } from "../../../utils/cn";
import { useLenis } from 'lenis/react';

interface NavbarBaseProps {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  mobileMenuContent?: React.ReactNode;
}

export const NavbarBase: React.FC<NavbarBaseProps> = ({ 
  leftSlot, centerSlot, rightSlot, mobileMenuContent 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lenis provides the smooth, non-jittery scroll value
  useLenis(({ scroll }) => {
    setIsScrolled(scroll > 20);
  });

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
      isScrolled ? "py-3" : "py-5"
    )}>
      {/* The Glass Container */}
      <div className={cn(
        "max-w-7xl mx-auto px-6 py-2 flex justify-between items-center transition-all duration-500 rounded-2xl border",
        isScrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-lg" 
          : "bg-transparent border-transparent"
      )}>
        
        {/* Left Slot */}
        <div className="flex items-center">{leftSlot}</div>

        {/* Center Slot: Navigation Pill */}
        <div className="hidden md:flex items-center">
           {centerSlot}
        </div>

        {/* Right Slot: Actions */}
        <div className="flex items-center gap-3">
          {rightSlot}
          {/* Mobile Button would go here */}
        </div>
      </div>

      {/* Mobile Drawer remains relative to the screen top */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white dark:bg-slate-900 md:hidden transition-all duration-300 origin-top shadow-2xl",
        menuOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 invisible"
      )}>
        {mobileMenuContent}
      </div>
    </nav>
  );
};
