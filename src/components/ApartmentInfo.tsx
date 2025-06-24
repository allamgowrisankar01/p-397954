
import { MapPin, Home, Star } from 'lucide-react';

const ApartmentInfo = () => {
  return (
    <div className="theme-glass-card rounded-3xl p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold theme-text-primary leading-tight drop-shadow-lg font-montserrat">Luxury 2BHK Apartment in Lodha Park</h2>
            <div className="flex items-center space-x-1 bg-yellow-500/20 backdrop-blur-xl px-3 py-1 rounded-full border border-yellow-500/30">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
              <span className="text-yellow-400 font-semibold text-sm drop-shadow-sm">4.8</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 theme-text-secondary text-sm mb-2">
            <MapPin className="w-4 h-4 theme-text-accent drop-shadow-sm" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2 theme-text-secondary text-sm">
            <Home className="w-4 h-4 theme-text-accent drop-shadow-sm" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold theme-text-primary drop-shadow-lg font-montserrat">₹65,000</span>
          <span className="theme-text-secondary text-base">/month</span>
          <div className="ml-auto theme-primary-button px-4 py-2 rounded-full text-sm font-semibold">
            <span className="text-white drop-shadow-sm font-montserrat">Zero Brokerage</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm p-3 theme-glass-card rounded-xl">
          <span className="theme-text-secondary">Maintenance: </span>
          <span className="theme-text-primary font-semibold font-montserrat">₹3,300/month</span>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Type</span>
              <span className="font-semibold theme-text-primary font-montserrat">2BHK</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Area</span>
              <span className="font-semibold theme-text-primary font-montserrat">1300 sq.ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Bathrooms</span>
              <span className="font-semibold theme-text-primary font-montserrat">2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Furnishing</span>
              <span className="font-semibold theme-text-primary font-montserrat">Fully Furnished</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Occupancy</span>
              <span className="font-semibold text-green-400 drop-shadow-sm font-montserrat">Ready to Move</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="theme-text-secondary">Parking</span>
              <span className="font-semibold theme-text-primary font-montserrat">1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
