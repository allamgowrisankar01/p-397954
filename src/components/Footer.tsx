
import { Home, Search, Heart, User } from 'lucide-react';

const Footer = () => {
  const handleTabClick = (tab: string) => {
    console.log(`${tab} tab clicked`);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl theme-glass-card">
      <div className="grid grid-cols-4 gap-2 text-center max-w-md mx-auto">
        {/* Active tab */}
        <button 
          onClick={() => handleTabClick('Home')}
          className="flex flex-col items-center space-y-2 theme-text-accent transition-all duration-300 py-3 px-3 rounded-2xl theme-primary-button"
        >
          <Home className="w-6 h-6 drop-shadow-lg" />
          <span className="text-xs font-medium drop-shadow-sm">Home</span>
        </button>
        
        <button 
          onClick={() => handleTabClick('Search')}
          className="flex flex-col items-center space-y-2 theme-text-secondary hover:theme-text-accent transition-all duration-300 py-3 px-3 rounded-2xl theme-glass-button"
        >
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        
        <button 
          onClick={() => handleTabClick('Saved')}
          className="flex flex-col items-center space-y-2 theme-text-secondary hover:theme-text-accent transition-all duration-300 py-3 px-3 rounded-2xl theme-glass-button relative"
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs">Saved</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#ff1c67] to-[#ff4585] rounded-full animate-pulse shadow-lg"></div>
        </button>
        
        <button 
          onClick={() => handleTabClick('Profile')}
          className="flex flex-col items-center space-y-2 theme-text-secondary hover:theme-text-accent transition-all duration-300 py-3 px-3 rounded-2xl theme-glass-button"
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
