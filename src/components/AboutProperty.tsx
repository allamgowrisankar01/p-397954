
import { ChevronDown } from 'lucide-react';

const AboutProperty = () => {
  const handleReadMoreClick = () => {
    console.log('Read more clicked - expanding property description');
    // Add functionality to expand/collapse description
  };

  return (
    <div className="theme-glass-card rounded-2xl p-5">
      <h3 className="text-lg font-bold mb-4 theme-text-primary drop-shadow-lg font-montserrat">About this property</h3>
      
      <div className="theme-text-secondary text-sm leading-relaxed space-y-3">
        <p>
          Experience luxury living at its finest in Mumbai with this stunning residential apartment. 
          Located in the prime area of Lower Parel, this property offers stunning downtown views 
          and premium amenities that redefine modern living.
        </p>
        <p className="opacity-60">
          The apartment features state-of-the-art facilities, premium location access, and is perfect 
          for professionals seeking a sophisticated lifestyle in the heart of Mumbai's business district...
        </p>
      </div>
      
      <button 
        onClick={handleReadMoreClick}
        className="mt-4 flex items-center space-x-2 theme-text-accent transition-all duration-300 p-4 rounded-2xl theme-neo-button w-full justify-center"
      >
        <span className="font-medium text-sm drop-shadow-sm font-montserrat">Read More</span>
        <ChevronDown className="w-4 h-4 drop-shadow-sm" />
      </button>
    </div>
  );
};

export default AboutProperty;
