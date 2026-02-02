// src/components/Hero/HeroHeadline.tsx
export const HeroHeadline: React.FC = () => (
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] text-white">
    Build your next idea
    <br />
    <span className="relative inline-block mt-4 py-2">
       {/* Increased padding here prevents the glow from clipping */}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
        at the speed of light.
      </span>
    </span>
  </h1>
);
