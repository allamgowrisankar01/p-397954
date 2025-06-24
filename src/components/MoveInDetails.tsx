
import { Calendar } from 'lucide-react';

const MoveInDetails = () => {
  return (
    <div className="backdrop-blur-3xl bg-slate-800/60 rounded-2xl p-5 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
        <Calendar className="w-5 h-5 text-pink-400 drop-shadow-sm" />
        <span className="drop-shadow-lg">Move-in Details</span>
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Availability</span>
            <span className="font-semibold text-green-400 drop-shadow-sm">Immediate</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Building Type</span>
            <span className="font-semibold text-white">High-rise Tower</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Floor</span>
            <span className="font-semibold text-white">15th of 42</span>
          </div>
        </div>
        
        {/* Glassmorphism additional charges section */}
        <div className="pt-3 border-t border-slate-600/30">
          <div className="text-slate-400 mb-3 text-sm font-medium">Additional Charges:</div>
          <div className="space-y-2 text-xs p-3 bg-slate-700/40 backdrop-blur-xl rounded-xl border border-slate-600/20 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
            <div className="flex justify-between">
              <span className="text-slate-400">Electricity</span>
              <span className="text-white">₹8/unit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Water</span>
              <span className="text-white">₹500/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Maintenance</span>
              <span className="text-white">₹3,300/month</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-slate-600/30 pt-2 mt-2">
              <span className="text-slate-300">Security Deposit</span>
              <span className="text-white">₹90,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveInDetails;
