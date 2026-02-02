// src/pages/LandingPage.tsx
import React, { Suspense, lazy } from 'react';

// Regular imports for critical "above-the-fold" components
import Navbar from '../components/UI/Navbar/Navbar';
import Hero from '../components/Hero/Hero';

// Lazy load non-critical components to optimize initial bundle size
//const Features = lazy(() => import('../components/Features/Features'));
//const Pricing = lazy(() => import('../components/Pricing/Pricing'));
//const Footer = lazy(() => import('../components/Footer/Footer'));

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-100 selection:text-blue-700">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Main Content Container */}
      <main>
        {/* Hero is loaded immediately as it's the first thing users see */}
        <Hero />

        {/* 3. Sections with Suspense for lazy-loaded parts */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <section id="features">
            {/* <Features /> - Placeholder for when you build this */}
          </section>

          <section id="pricing" className="bg-slate-50 dark:bg-slate-900/50">
            {/* <Pricing /> - Placeholder */}
          </section>
        </Suspense>
      </main>

      {/* 4. Footer */}
      <Suspense fallback={null}>
        {/* <Footer /> */}
      </Suspense>
    </div>
  );
};

export default LandingPage;
