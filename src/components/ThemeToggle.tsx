
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 overflow-hidden group theme-glass-button"
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
