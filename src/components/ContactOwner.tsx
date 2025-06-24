
import { User, Phone, MessageCircle, Shield } from 'lucide-react';

const ContactOwner = () => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-3xl rounded-3xl p-6 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">Contact Property Owner</h3>
      
      {/* Glassmorphism owner card */}
      <div className="flex items-center space-x-4 mb-6 p-4 bg-slate-700/40 backdrop-blur-xl rounded-2xl border border-slate-600/30 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
        {/* Skeuomorphic avatar */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center shadow-[6px_6px_12px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] relative border border-pink-400/30">
          <User className="w-7 h-7 text-white drop-shadow-sm" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-slate-800 shadow-lg"></div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white text-lg drop-shadow-sm">Rajesh Kumar</div>
          <div className="text-sm text-slate-400 flex items-center space-x-2">
            <span>Property Owner</span>
            <Shield className="w-3 h-3 text-green-400 drop-shadow-sm" />
            <span className="text-green-400 text-xs drop-shadow-sm">Verified</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">Usually responds within 10 minutes</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Skeuomorphic primary button */}
        <button className="py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white font-semibold shadow-[6px_6px_12px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),inset_1px_1px_2px_rgba(255,255,255,0.2),inset_-1px_-1px_2px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-pink-400/30">
          <MessageCircle className="w-5 h-5 drop-shadow-sm" />
          <span className="drop-shadow-sm">Chat Now</span>
        </button>
        
        {/* Neomorphism secondary button */}
        <button className="py-4 px-4 rounded-2xl bg-slate-800 text-white font-semibold shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-xl border border-slate-600/30">
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
