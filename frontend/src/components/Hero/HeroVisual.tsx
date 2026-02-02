// src/components/Hero/HeroVisual.tsx
export const HeroVisual: React.FC = () => (
  <div className="relative mt-12 md:mt-24 w-full max-w-6xl mx-auto px-4 perspective-1000">
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:rotate-x-2 transition-transform duration-700">
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
        className="w-full h-auto rounded-2xl" 
        alt="Dashboard" 
      />
    </div>
  </div>
);
