// src/components/About/AboutLanding.tsx
import React from 'react';

const AboutLanding: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
            Democratizing <br />World-Class Tutoring.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            We believe that personalized education is a right, not a luxury. By leveraging Google's most advanced AI models, we provide every student with a private tutor that is infinitely patient and exceptionally smart.
          </p>
          <div className="flex gap-4">
            <div className="h-12 w-1 bg-blue-600 rounded-full" />
            <p className="italic text-slate-500 dark:text-slate-500">
              "The goal isn't just to give answers, but to teach how to think."
            </p>
          </div>
        </div>
        <div className="relative aspect-square bg-slate-100 dark:bg-slate-900 rounded-full border-8 border-slate-50 dark:border-slate-800 overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
           {/* You can drop a brand image or an abstract AI visualization here */}
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;
