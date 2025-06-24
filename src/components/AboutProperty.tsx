
import { ChevronDown } from 'lucide-react';

const AboutProperty = () => {
  return (
    <div className="backdrop-blur-3xl bg-slate-800/60 rounded-2xl p-5 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <h3 className="text-lg font-bold mb-4 text-white drop-shadow-lg">About this property</h3>
      
      <div className="text-slate-300 text-sm leading-relaxed space-y-3">
        <p>
          Experience luxury living at its finest in Mumbai with this stunning residential apartment. 
          Located in the prime area of Lower Parel, this property offers stunning downtown views 
          and premium amenities that redefine modern living.
        </p>
        <p className="opacity-60">
          The apartment features state-of-the-art facilities, premium location access, and is perfect 
          for professionals seeking a sophisticated lifestyle in the heart of Mumbai's business district...
        </p>
      </div>
      
      {/* Glassmorphism + Neomorphism read more button */}
      <button className="mt-4 flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 p-3 rounded-lg bg-slate-800/70 backdrop-blur-xl shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_2px_rgba(255,255,255,0.1)] border border-slate-600/30 w-full justify-center">
        <span className="font-medium text-sm drop-shadow-sm">Read More</span>
        <ChevronDown className="w-4 h-4 drop-shadow-sm" />
      </button>
    </div>
  );
};

export default AboutProperty;
