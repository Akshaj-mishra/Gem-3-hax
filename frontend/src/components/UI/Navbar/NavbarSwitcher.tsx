// src/components/UI/Navbar/NavbarSwitcher.tsx
import { useLocation } from 'react-router-dom';
import { MainNavbar } from './MainNavbar';
import { FeaturesNavbar } from './FeaturesNavbar';

export const NavbarSwitcher = () => {
  const location = useLocation();

  // If the path is /features, render the specialized navbar
  if (location.pathname === '/features') {
    return <FeaturesNavbar />;
  }

  // Otherwise, render the default MainNavbar
  return <MainNavbar />;
};
