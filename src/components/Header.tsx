
import { Menu, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 shadow-2xl theme-glass-card">
      <div className="flex items-center justify-between px-6 py-5 max-w-md mx-auto lg:max-w-2xl">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleMenuClick}
            className="p-3 rounded-2xl theme-glass-button"
          >
            <Menu className="w-5 h-5 theme-text-secondary" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff1c67] to-[#ff4585] bg-clip-text text-transparent tracking-wide drop-shadow-lg font-montserrat">
            RentoMate
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button 
            onClick={handleNotificationClick}
            className="p-3 rounded-2xl theme-glass-button relative"
          >
            <Bell className="w-5 h-5 theme-text-secondary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#ff1c67] to-[#ff4585] rounded-full animate-pulse shadow-lg ring-2 ring-white/20"></div>
          </button>
          <button 
            onClick={handleProfileClick}
            className="p-3 rounded-2xl theme-glass-button"
          >
            <User className="w-5 h-5 theme-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
