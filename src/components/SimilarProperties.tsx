
import { Home } from 'lucide-react';

const SimilarProperties = () => {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      title: 'Premium 2BHK in Worli',
      location: 'Worli, Mumbai',
      details: '2 BHK • 1200 sq.ft',
      status: 'Fully Furnished',
      price: '₹72,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      title: 'Modern 3BHK in Bandra',
      location: 'Bandra West, Mumbai',
      details: '3 BHK • 1800 sq.ft',
      status: 'Semi Furnished',
      price: '₹95,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop',
      title: 'Luxury 2BHK in Andheri',
      location: 'Andheri East, Mumbai',
      details: '2 BHK • 1100 sq.ft',
      status: 'Fully Furnished',
      price: '₹58,000'
    }
  ];

  return (
    <div className="backdrop-blur-3xl bg-slate-800/60 rounded-2xl p-5 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
        <Home className="w-5 h-5 text-pink-400 drop-shadow-sm" />
        <span className="drop-shadow-lg">Similar Properties You Might Like</span>
      </h3>
      
      <div className="text-sm text-slate-400 mb-4">
        Neighborhood recommendations based on your preferences
      </div>
      
      <div className="space-y-3">
        {properties.map((property, index) => (
          <div 
            key={index}
            className="flex space-x-4 p-4 rounded-xl backdrop-blur-xl bg-slate-700/40 border border-slate-600/30 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_2px_rgba(255,255,255,0.05)] transition-all duration-300"
          >
            <img 
              src={property.image} 
              alt={property.title}
              className="w-16 h-12 rounded-lg object-cover flex-shrink-0 shadow-[4px_4px_8px_rgba(0,0,0,0.6)] border border-slate-600/30"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white truncate text-sm drop-shadow-sm">{property.title}</h4>
              <p className="text-xs text-slate-400">{property.location}</p>
              <p className="text-xs text-slate-500">{property.details}</p>
              <div className="flex items-center justify-between mt-2">
                {/* Skeuomorphic status badge */}
                <span className="text-xs bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-400 px-2 py-1 rounded backdrop-blur-xl border border-green-500/20 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] drop-shadow-sm">
                  {property.status}
                </span>
                <span className="font-bold text-white text-sm drop-shadow-sm">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Neomorphism button */}
      <button className="w-full mt-4 py-3 rounded-xl bg-slate-800 backdrop-blur-xl border border-pink-500/20 text-pink-400 font-medium shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all duration-300 text-sm">
        <span className="drop-shadow-sm">View Details</span>
      </button>
    </div>
  );
};

export default SimilarProperties;
