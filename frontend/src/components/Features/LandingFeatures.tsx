// src/compnents/Features/LandingFeatures.tsx

import React from 'react';
import { Globe, Zap, Shield, Code2 } from 'lucide-react';
import { FeatureCard } from '../UI/FeatureCard/FeatureCard.tsx';

import { featuresData } from '../../Data/featureData.tsx';

const Features: React.FC = () => {
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Everything you need to <span className="text-blue-500">Scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {featuresData.map((feature) => (
            <FeatureCard 
              key={feature.id}
              variant={feature.variant}
              className={feature.gridClass}
              title={feature.title}
              desc={feature.description}
              icon={feature.icon}
            >
              {/* Conditional rendering based on data presence */}
              {feature.tags && (
                <div className="flex gap-2">
                  {feature.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {feature.id === 'deploy' && (
                <div className="hidden md:block translate-x-12 translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-2xl font-mono text-sm">
                    <p className="text-blue-400">$ npm install @turbo/cli</p>
                    <p className="text-blue-400">$ turbo deploy</p>
                  </div>
                </div>
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
