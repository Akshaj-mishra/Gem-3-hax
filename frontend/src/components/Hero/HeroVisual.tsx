// src/components/Hero/HeroVisual.tsx
export const HeroVisual: React.FC = () => (
  <div className="relative mt-16 w-full max-w-5xl mx-auto px-4">
    {/* Decorative Background Glows */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
    
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-2 shadow-2xl">
      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
          alt="App Dashboard"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
);
