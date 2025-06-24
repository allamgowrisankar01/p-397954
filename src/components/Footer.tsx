
import { Home, Search, Heart, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-3xl border-t border-slate-700/30 p-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center max-w-md mx-auto">
        {/* Active tab with skeuomorphism */}
        <button className="flex flex-col items-center space-y-2 text-pink-400 transition-all duration-300 py-3 px-3 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] border border-slate-600/50">
          <Home className="w-6 h-6 drop-shadow-lg" />
          <span className="text-xs font-medium drop-shadow-sm">Home</span>
        </button>
        
        {/* Neomorphism inactive tabs */}
        <button className="flex flex-col items-center space-y-2 text-slate-400 hover:text-pink-400 transition-all duration-300 py-3 px-3 rounded-2xl bg-slate-800 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] border border-slate-600/20">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        
        <button className="flex flex-col items-center space-y-2 text-slate-400 hover:text-pink-400 transition-all duration-300 py-3 px-3 rounded-2xl bg-slate-800 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] border border-slate-600/20 relative">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Saved</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-pulse shadow-lg"></div>
        </button>
        
        <button className="flex flex-col items-center space-y-2 text-slate-400 hover:text-pink-400 transition-all duration-300 py-3 px-3 rounded-2xl bg-slate-800 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] border border-slate-600/20">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
