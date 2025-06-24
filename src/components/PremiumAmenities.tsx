
import { Star } from 'lucide-react';

const PremiumAmenities = () => {
  const amenities = [
    { icon: '📶', name: 'High-speed WiFi', featured: true },
    { icon: '📺', name: '55" Smart TV', featured: true },
    { icon: '🚗', name: 'Covered Parking', featured: false },
    { icon: '🍳', name: 'Modular Kitchen', featured: true },
    { icon: '❄️', name: 'Central AC', featured: true },
    { icon: '☕', name: 'Coffee Machine', featured: false },
    { icon: '🔒', name: '24/7 Security', featured: true },
    { icon: '🏊', name: 'Gym & Pool', featured: true }
  ];

  return (
    <div className="bg-slate-800/60 backdrop-blur-3xl rounded-3xl p-6 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <h3 className="text-xl font-bold mb-6 flex items-center space-x-3 text-white">
        {/* Skeuomorphic icon container */}
        <div className="p-2 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-xl border border-pink-500/30 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <Star className="w-5 h-5 text-pink-400 drop-shadow-sm" />
        </div>
        <span className="drop-shadow-lg">Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
              amenity.featured 
                ? 'bg-gradient-to-br from-pink-500/10 to-violet-500/10 backdrop-blur-xl border border-pink-500/20 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.02),inset_2px_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.02),inset_1px_1px_2px_rgba(255,255,255,0.1)]' 
                : 'bg-slate-800/70 backdrop-blur-xl border border-slate-600/30 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]'
            }`}
          >
            <div className="text-2xl drop-shadow-lg">{amenity.icon}</div>
            <span className="text-sm font-medium text-white truncate drop-shadow-sm">{amenity.name}</span>
            {amenity.featured && (
              <div className="ml-auto w-2 h-2 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-pulse shadow-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
