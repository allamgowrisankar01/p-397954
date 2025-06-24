
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleClick = () => {
    console.log(`Switching theme from ${theme} to ${theme === 'light' ? 'dark' : 'light'}`);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggleClick}
      className="relative p-3 rounded-2xl theme-neo-button overflow-hidden group"
    >
      <div className="relative z-10 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-[#ff1c67] drop-shadow-sm" />
        ) : (
          <Sun className="w-5 h-5 text-[#ff1c67] drop-shadow-sm" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
