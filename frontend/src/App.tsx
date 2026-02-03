// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useRegisterSW } from 'virtual:pwa-register/react';

function App() {
  // version auto check
  useRegisterSW({ onRegistered(r) { console.log('SW Registered'); } });
  return (
    <Router>
      <Routes>
        {/* Our main landing page route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Example: You can easily add more pages here */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
