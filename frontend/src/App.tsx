// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRegisterSW } from 'virtual:pwa-register/react';

import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage.tsx';
import { NavbarSwitcher } from './components/UI/Navbar/NavbarSwitcher.tsx'

function App() {
  // version auto check
  useRegisterSW({ onRegistered(r) { console.log('SW Registered'); } });
  return (
    <Router>
      <NavbarSwitcher />
      <Routes>
        {/* Our main landing page route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        {/* Example: You can easily add more pages here */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
