
import { Menu, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl bg-slate-900/60 border-b border-slate-700/30 shadow-2xl">
      <div className="flex items-center justify-between px-6 py-5 max-w-md mx-auto lg:max-w-2xl">
        <div className="flex items-center space-x-4">
          {/* Neomorphism button */}
          <button className="p-3 rounded-2xl bg-slate-800 shadow-[inset_8px_8px_16px_#1e293b,inset_-8px_-8px_16px_#334155] hover:shadow-[inset_4px_4px_8px_#1e293b,inset_-4px_-4px_8px_#334155] transition-all duration-300 border border-slate-600/20">
            <Menu className="w-5 h-5 text-slate-300" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
            RentoMate
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          {/* Glassmorphism button with neomorphism shadow */}
          <button className="p-3 rounded-2xl bg-slate-800/70 backdrop-blur-xl shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all duration-300 border border-slate-600/30 relative">
            <Bell className="w-5 h-5 text-slate-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-pulse shadow-lg shadow-pink-500/50 ring-2 ring-slate-800"></div>
          </button>
          <button className="p-3 rounded-2xl bg-slate-800/70 backdrop-blur-xl shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all duration-300 border border-slate-600/30">
            <User className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
