// src/pages/FeaturesPage.tsx
import React, { useEffect } from 'react';
import { FeatureHero } from '../components/Features/FeaturePage/FeatureHero.tsx';
import { FeatureDetailRow } from '../components/Features/FeaturePage/FeatureDetailRow.tsx';
import { featuresData } from '../data/featureData';
import { SmoothScroll } from '../components/Providers/SmoothScroll';

const FeaturesPage: React.FC = () => {
  // Ensure we always start at the top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <FeatureHero 
          title="Platform Capabilities" 
          subtitle="Explore how Gemini 3 is redefining the modern classroom with multimodal intelligence." 
        />
        
        {/* Added pt-12 to give the fixed Navbar breathing room */}
        <main className="container mx-auto px-6 py-24 pt-12 space-y-32">
          {featuresData.map((feature, index) => (
            <FeatureDetailRow 
              key={feature.id}
              feature={feature}
              reverse={index % 2 !== 0}
            />
          ))}
        </main>
      </div>
    </SmoothScroll>
  );
};

export default FeaturesPage;
