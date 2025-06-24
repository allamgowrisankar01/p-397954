
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

  const handleAmenityClick = (amenityName: string) => {
    console.log(`${amenityName} amenity clicked`);
  };

  return (
    <div className="theme-glass-card rounded-3xl p-6">
      <h3 className="text-xl font-bold mb-6 flex items-center space-x-3 theme-text-primary font-montserrat">
        <div className="p-2 bg-gradient-to-br from-[#ff1c67]/20 to-[#ff4585]/20 rounded-xl border border-[#ff1c67]/30 backdrop-blur-xl">
          <Star className="w-5 h-5 theme-text-accent drop-shadow-sm" />
        </div>
        <span className="drop-shadow-lg">Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
              amenity.featured 
                ? 'bg-gradient-to-br from-[#ff1c67]/10 to-[#ff4585]/10 backdrop-blur-xl border border-[#ff1c67]/20' 
                : 'theme-glass-button'
            }`}
            onClick={() => handleAmenityClick(amenity.name)}
          >
            <div className="text-2xl drop-shadow-lg">{amenity.icon}</div>
            <span className="text-sm font-medium theme-text-primary truncate drop-shadow-sm">{amenity.name}</span>
            {amenity.featured && (
              <div className="ml-auto w-2 h-2 bg-gradient-to-br from-[#ff1c67] to-[#ff4585] rounded-full animate-pulse shadow-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
