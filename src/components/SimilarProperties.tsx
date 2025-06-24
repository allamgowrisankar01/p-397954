
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

  const handlePropertyClick = (propertyTitle: string) => {
    console.log(`${propertyTitle} clicked`);
  };

  const handleViewDetails = () => {
    console.log('View details clicked');
  };

  return (
    <div className="theme-glass-card rounded-2xl p-5">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 theme-text-primary font-montserrat">
        <Home className="w-5 h-5 theme-text-accent drop-shadow-sm" />
        <span className="drop-shadow-lg">Similar Properties You Might Like</span>
      </h3>
      
      <div className="text-sm theme-text-secondary mb-4">
        Neighborhood recommendations based on your preferences
      </div>
      
      <div className="space-y-3">
        {properties.map((property, index) => (
          <div 
            key={index}
            className="flex space-x-4 p-4 rounded-xl theme-glass-button transition-all duration-300 cursor-pointer"
            onClick={() => handlePropertyClick(property.title)}
          >
            <img 
              src={property.image} 
              alt={property.title}
              className="w-16 h-12 rounded-lg object-cover flex-shrink-0 shadow-lg border border-white/10"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold theme-text-primary truncate text-sm drop-shadow-sm font-montserrat">{property.title}</h4>
              <p className="text-xs theme-text-secondary">{property.location}</p>
              <p className="text-xs theme-text-secondary opacity-75">{property.details}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-400 px-2 py-1 rounded backdrop-blur-xl border border-green-500/20 drop-shadow-sm">
                  {property.status}
                </span>
                <span className="font-bold theme-text-primary text-sm drop-shadow-sm font-montserrat">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={handleViewDetails}
        className="w-full mt-4 py-3 rounded-xl theme-glass-button theme-text-accent font-medium transition-all duration-300 text-sm"
      >
        <span className="drop-shadow-sm font-montserrat">View Details</span>
      </button>
    </div>
  );
};

export default SimilarProperties;
