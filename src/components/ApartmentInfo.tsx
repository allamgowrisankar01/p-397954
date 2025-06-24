
import { MapPin, Home, Star } from 'lucide-react';

const ApartmentInfo = () => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-3xl rounded-3xl p-6 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">Luxury 2BHK Apartment in Lodha Park</h2>
            {/* Glassmorphism rating badge */}
            <div className="flex items-center space-x-1 bg-yellow-500/20 backdrop-blur-xl px-3 py-1 rounded-full border border-yellow-500/30 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)]">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
              <span className="text-yellow-400 font-semibold text-sm drop-shadow-sm">4.8</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-slate-300 text-sm mb-2">
            <MapPin className="w-4 h-4 text-pink-400 drop-shadow-sm" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300 text-sm">
            <Home className="w-4 h-4 text-pink-400 drop-shadow-sm" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold text-white drop-shadow-lg">₹65,000</span>
          <span className="text-slate-400 text-base">/month</span>
          {/* Skeuomorphic badge */}
          <div className="ml-auto bg-gradient-to-br from-pink-500 to-violet-600 px-4 py-2 rounded-full text-sm font-semibold shadow-[6px_6px_12px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] border border-pink-400/30">
            <span className="text-white drop-shadow-sm">Zero Brokerage</span>
          </div>
        </div>

        {/* Glassmorphism info card */}
        <div className="flex items-center space-x-2 text-sm p-3 bg-slate-700/40 backdrop-blur-xl rounded-xl border border-slate-600/30 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
          <span className="text-slate-300">Maintenance: </span>
          <span className="text-white font-semibold">₹3,300/month</span>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-600/30">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Type</span>
              <span className="font-semibold text-white">2BHK</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Area</span>
              <span className="font-semibold text-white">1300 sq.ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Bathrooms</span>
              <span className="font-semibold text-white">2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Furnishing</span>
              <span className="font-semibold text-white">Fully Furnished</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Occupancy</span>
              <span className="font-semibold text-green-400 drop-shadow-sm">Ready to Move</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Parking</span>
              <span className="font-semibold text-white">1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
