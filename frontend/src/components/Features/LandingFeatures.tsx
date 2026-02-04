import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../UI/FeatureCard/FeatureCard';
import { featuresData } from '../../data/featureData';

const Features: React.FC = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            Intelligent features for <span className="text-blue-600 dark:text-blue-500">Modern Education.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Leveraging Gemini 3's multimodal capabilities to create the ultimate learning environment.
          </p>
        </div>

        {/* Bento Grid: 12-column system */}
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
              {/* Feature Tags */}
              {feature.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-blue-700 dark:text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* AI Code Snippet Override */}
              {feature.id === 'ai-logic' && (
                <div className="hidden md:block mt-6 translate-x-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                  <div className="bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-white/10 shadow-2xl font-mono text-xs">
                    <p className="text-emerald-500">// Gemini 3 Analysis</p>
                    <p className="text-blue-500">const insight = await gemini.analyze(lecture);</p>
                    <p className="text-purple-500">insight.generateQuiz();</p>
                  </div>
                </div>
              )}
            </FeatureCard>
          ))}
        </div>

        {/* CTA Button - NOW OUTSIDE THE MAP LOOP */}
        {/* 3. CTA Button - Correctly Nested */}
        <div className="mt-16 flex justify-center"> {/* Spacing wrapper */}
          <Link to="/features">                     {/* Navigation wrapper */}
            <button className="group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden">
              
              {/* 1. Frosted Glass Background */}
              <div className={`
                absolute inset-0 
                bg-white/10 dark:bg-white/5 
                backdrop-blur-md 
                border border-white/20 dark:border-white/10 
                rounded-2xl transition-all 
                group-hover:bg-white/20 group-hover:border-blue-500/50
              `} />

              {/* 2. Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(59,130,246,0.2),transparent_50%)] transition-opacity duration-300 pointer-events-none" />

              {/* 3. Text Content */}
              <span className="relative z-10 flex items-center gap-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Explore All Features
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
