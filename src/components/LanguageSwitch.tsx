import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ACCENT_COLORS = [
  { id: 'blue', hex: '#3B82F6' },
  { id: 'red', hex: '#F43F5E' },
  { id: 'emerald', hex: '#10B981' },
  { id: 'amber', hex: '#F59E0B' },
  { id: 'violet', hex: '#8B5CF6' },
] as const;

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Primary Pill: Theme & Language */}
      <div className="flex items-center glass-panel p-1.5 rounded-full shadow-2xl backdrop-blur-md border border-white/10">
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="relative w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none overflow-hidden"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <div className={`absolute transition-all duration-700 ease-in-out transform ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
          <Sun className="w-5 h-5" />
        </div>
        <div className={`absolute transition-all duration-700 ease-in-out transform ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
          <Moon className="w-5 h-5" />
        </div>
      </button>

      {/* Internal Divider */}
      <div className="w-[1px] h-6 bg-white/20 mx-1.5 rounded-full"></div>

      {/* Language Toggle */}
      <button 
        onClick={toggleLanguage}
        className="px-4 h-10 rounded-full text-white font-medium hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 group overflow-hidden"
        title="Toggle Language"
      >
        <span className="tracking-widest text-sm relative">
             <div className={`absolute transition-all duration-500 ${language === 'tr' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>EN</div>
             <div className={`transition-all duration-500 ${language === 'en' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>TR</div>
        </span>
        <div className="relative w-5 h-4 flex items-center justify-center overflow-hidden rounded-[2px] opacity-90 shadow-sm group-hover:scale-105 transition-transform duration-300">
           <img 
            src="https://flagcdn.com/w40/gb.png"
            alt="English"
            className={`absolute w-full h-full object-cover transition-all duration-700 ${language === 'tr' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          />
          <img 
            src="https://flagcdn.com/w40/tr.png"
            alt="Türkçe"
            className={`absolute w-full h-full object-cover transition-all duration-700 ${language === 'en' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          />
        </div>
      </button>
      </div>

      {/* Accent Color Palette Pill */}
      <div className="flex items-center justify-center glass-panel p-1.5 rounded-full shadow-lg backdrop-blur-md border border-white/10 gap-2">
        {ACCENT_COLORS.map(c => (
          <button
            key={c.id}
            onClick={() => setAccentColor(c.id as any)}
            className={`w-5 h-5 rounded-full transition-all duration-300 ${accentColor === c.id ? 'scale-110 shadow-[0_0_12px_currentColor] ring-2 ring-white/60' : 'scale-90 opacity-50 hover:scale-100 hover:opacity-100'}`}
            style={{ backgroundColor: c.hex, color: c.hex }}
            title={`${c.id.charAt(0).toUpperCase() + c.id.slice(1)} Mode`}
          />
        ))}
      </div>
      
    </div>
  );
}
