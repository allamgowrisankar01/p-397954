
import { Calendar } from 'lucide-react';

const MoveInDetails = () => {
  return (
    <div className="theme-glass-card rounded-2xl p-5">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 theme-text-primary font-montserrat">
        <Calendar className="w-5 h-5 theme-text-accent drop-shadow-sm" />
        <span className="drop-shadow-lg">Move-in Details</span>
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="theme-text-secondary">Availability</span>
            <span className="font-semibold text-green-400 drop-shadow-sm font-montserrat">Immediate</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="theme-text-secondary">Building Type</span>
            <span className="font-semibold theme-text-primary font-montserrat">High-rise Tower</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="theme-text-secondary">Floor</span>
            <span className="font-semibold theme-text-primary font-montserrat">15th of 42</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-white/10">
          <div className="theme-text-secondary mb-3 text-sm font-medium">Additional Charges:</div>
          <div className="space-y-2 text-xs p-3 theme-glass-card rounded-xl">
            <div className="flex justify-between">
              <span className="theme-text-secondary">Electricity</span>
              <span className="theme-text-primary font-montserrat">₹8/unit</span>
            </div>
            <div className="flex justify-between">
              <span className="theme-text-secondary">Water</span>
              <span className="theme-text-primary font-montserrat">₹500/month</span>
            </div>
            <div className="flex justify-between">
              <span className="theme-text-secondary">Maintenance</span>
              <span className="theme-text-primary font-montserrat">₹3,300/month</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-white/10 pt-2 mt-2">
              <span className="theme-text-secondary">Security Deposit</span>
              <span className="theme-text-primary font-montserrat">₹90,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveInDetails;
