// src/components/Intelligence/IntelligenceLanding.tsx
import React from 'react';

const IntelligenceLanding: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
          Built with <span className="text-blue-600">Gemini 3</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Beyond simple text. Experience a tutor that sees, hears, and reasons across every subject.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento Box 1: Vision */}
        <div className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Multimodal Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Show your camera a complex diagram or a handwritten equation. Gemini 3 breaks it down step-by-step in real-time.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
        </div>

        {/* Bento Box 2: Voice */}
        <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-500/20 text-white flex flex-col justify-between">
          <h3 className="text-2xl font-bold">Natural Voice</h3>
          <p className="text-blue-100 text-sm">
            Low-latency audio conversations. Practice a new language or debate philosophy with zero lag.
          </p>
        </div>

        {/* Bento Box 3: Reasoning */}
        <div className="md:col-span-3 bg-slate-100 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Reasoning & Context</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Unlike standard LLMs, our intelligence layer remembers your learning history across sessions to provide truly personalized feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLanding;
